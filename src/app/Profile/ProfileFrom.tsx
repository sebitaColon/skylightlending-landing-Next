'use client'
import { Button, Input, Spinner } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import iconEdit from '@/assets/iconEdit.svg'
import iconDone from '@/assets/done.svg'
import iconNot from '@/assets/danger.svg'
import { fetchUserData, updateUserProfile } from './serviceUser'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { yupResolver } from "@hookform/resolvers/yup";
import { profileDataValidation } from "@/validation/profileDataValidation";

interface User {
    id: number;
    name: string;
    last_name: string;
    email: string;
    role: string;
}

interface UserState {
    user: User | null;
}

interface DataProfile {
    name: string,
    last_name: string,
}

export default function ProfileForm() {
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();
    const [data, setData] = useState<UserState>({ user: null });
    const [id, setId] = useState<number>()
    const [formValues, setFormValues] = useState<{ name: string, last_name: string }>({
        name: '',
        last_name: ''
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUserData();
                if (!userData.success) {
                    router.push("/login");
                }
                setData({ user: userData.data });
                setId(userData.data.id);
                setFormValues({
                    name: userData.data.name,
                    last_name: userData.data.last_name
                });
            } catch (error) {
                router.push("/login");
            }
        };
        fetchData();
    }, [router]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(profileDataValidation),
    });

    const handleSave = async (data: DataProfile) => {
        try {
            if (!id) {
                toast.error("ID no encontrado");
            }
            const result = await updateUserProfile({ ...data, id });
            if (!result.success) {
                toast.error(`${result.message}`);
            } else {
                toast.success(`User updated`);
                const updatedUserData = await fetchUserData();
                if (updatedUserData.success) {
                    setData({ user: updatedUserData.data });
                    setFormValues({
                        name: updatedUserData.data.name,
                        last_name: updatedUserData.data.last_name
                    }); 
                }
            }
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
        }
    };
    if (!data.user) {
        return (
            <div className="flex gap-4 w-full h-screen justify-end items-center">
                <Spinner color="default" />
            </div>
        );
    }

    function handleView() {
        setIsEditing(!isEditing)
        reset();
    }

    const fields: { label: string, name: 'name' | 'last_name', defaultValue: string }[] = [
        { label: "Name", name: "name", defaultValue: data.user.name },
        { label: "Last Name", name: "last_name", defaultValue: data.user.last_name },
    ];
        
    return (
        <div>
            {isEditing ? (
                <form onSubmit={handleSubmit(handleSave)}
                    className='gap-2 pb-2 items-end justify-end'>
                    <div className='gap-2 flex flex-col text-white'>
                    {fields.map((field) => (
                        <div key={field.name} className="gap-2 flex flex-col text-white">
                            <Input
                                isClearable
                                radius="lg"
                                defaultValue={field.defaultValue}
                                className="text-foreground"
                                {...register(field.name, { required: `${field.label} is required` })}
                            />
                            {errors[field.name]&& (
                                <p className="text-red-500">{errors[field.name]?.message}</p>
                            )}
                        </div>
                    ))}
                    </div>
                    <div className='flex justify-end pt-2 gap-2'>
                        <Button type="submit" className='min-h-5 min-w-5 w-10 text-white h-10 p-0 rounded-lg bg-green-500'>
                            <Image src={iconDone} alt='iconDone' className='w-7 h-7' />
                        </Button>
                        <Button className='min-h-5 min-w-5 w-10 text-white h-10 p-0 rounded-lg bg-red-500' onClick={handleView}>
                            <Image src={iconNot} alt='iconNot' className='w-7 h-7' />
                        </Button>
                    </div>
                </form>
            ) : (
                <div className='w-full h-auto flex justify-between text-white'>
                    <span className='text-xl pr-5'>{`${data.user?.name + ' ' + data.user?.last_name}`}</span>
                    <Button className='bg-transparent min-h-5 min-w-5 w-auto h-auto p-0' onClick={handleView}>
                        <Image alt='imgIconEdit' src={iconEdit} className='w-5 h-5 ' />
                    </Button>
                </div>
            )}
            <span className='text-sm text-gray-400'>{data.user?.email}</span>
            <div className='w-auto h-auto flex justify-center flex-col text-white '>
                <h2 className='text-white font-bold text-xl pt-10'>My role: {data.user?.role}</h2>
            </div>
        </div>
    )
}
