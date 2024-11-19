'use client';
import { Avatar, Button, user } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import imageCamera from '@/assets/imageCamera.svg';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react';
import uploadFile from '@/assets/uploadFile.svg';
import imageProtada from '@/assets/img-body-contactus.jpg';
import iconEdit from '@/assets/iconEdit.svg';
import { useRouter } from "next/navigation";
import { fetchUserData } from './serviceUser';
import toast from 'react-hot-toast';

interface User {
    name: string,
    last_name: string,
    email: string;
}

interface UserState {
    user: User | null;
}


export default function ProfileFromImage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [fileName, setFileName] = useState<string | null>(null);
    const [imageSrc, setImageSrc] = useState<string>();
    const [uploading, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [file, setFile] = useState<File>()
    const [id, setId] = useState<number>()
    const [data, setData] = useState<UserState>({ user: null });
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUserData();
                if (!userData.success) {
                    router.push("/login");
                }
                setData({ user: userData.data })
                setImageUrl(userData.data.image_url)
                setImageSrc(userData.data.image_url)
                setId(userData.data.id);
            } catch (error) {
                router.push("/login");
            }
        };
        fetchData();
    }, [router, isOpen]);

    const updateFileChange = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!file) {
            console.error('No file selected');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(`/api/user/${id}`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                toast.success(`${data.message}`)
                setImageUrl(data.imageUrl)
            } else {
                toast.error(`${data.message}`)
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        } finally {
            setUploading(false);
        }
    }

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setFile(file)
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setFileName('');
            setImageSrc('');
        }
    };

    return (
        <>
            <Avatar showFallback src={`${imageUrl}`} isBordered color='primary' className="w-20 h-20 text-large lg:w-36 lg:h-36 " />
            <Button onPress={onOpen} className='min-w-8 min-h-8 p-1 w-auto h-auto bg-blue-500 rounded-full absolute -bottom-2 z-10 -right-2 lg:w-12 lg:h-12' >
                <Image src={imageCamera} alt='imgCamera' />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur'>
                <form onSubmit={updateFileChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Upload Image</ModalHeader>
                                <ModalBody>
                                    <div className='w-full h-52 flex items-center justify-center relative border-3 border-dashed border-blueFooter rounded-2xl'>
                                        {imageSrc ? (
                                            <div className='w-full h-full flex items-center justify-center relative overflow-hidden bg-blueFooter rounded-2xl'>
                                                <h1 className='text-white text-base font-bold absolute top-3 z-20'>WELCOME!</h1>
                                                <h1 className=' text-[10px] text-white font-bold absolute top-9 z-20' style={{ fontFamily: 'fantasy' }}>to my profile</h1>
                                                <Image src={imageProtada} alt='imagePortada' className='object-cover w-full h-full -top-2/4 left-0 absolute' />
                                                <span className='w-20 h-20 border-2 border-blue-500 absolute z-10 rounded-full object-cover bg-white overflow-hidden'
                                                >
                                                    <Image
                                                        src={imageSrc}
                                                        alt={fileName || ''}
                                                        className='w-full h-full object-cover border-1 border-white rounded-full'
                                                        width={200}
                                                        height={200}
                                                    />
                                                </span>
                                                <div className='w-auto h-auto absolute bottom-7 flex flex-col items-start'>
                                                    <div className='w-auto h-auto gap-2 flex justify-between'>
                                                        <span className='text-[8px] text-white '>{data.user?.name +' '+ data.user?.last_name}</span>
                                                        <Button className='bg-transparent min-h-2 min-w-2 w-auto h-auto p-0' >
                                                            <Image alt='imgIconEdit' src={iconEdit} className='w-2 h-2 ' />
                                                        </Button>
                                                    </div>
                                                    <span className='text-[6px] text-gray-400'>{data.user?.email}</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <Image src={uploadFile} alt='upload' />
                                        )}
                                        <input onChange={handleFileChange} accept="image/*" type="file" className='w-full h-full absolute opacity-0 bg-red-400 flex items-center justify-center z-30' />
                                    </div>
                                    <h1>{fileName}</h1>
                                </ModalBody>
                                <ModalFooter className='flex items-center justify-between'>
                                    <Button color="danger" onPress={onClose}>
                                        Delete
                                    </Button>
                                    <div>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color='primary' onPress={onClose} type='submit'>
                                            {uploading ? 'Uploading...' : 'Action'}
                                        </Button>
                                    </div>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}
