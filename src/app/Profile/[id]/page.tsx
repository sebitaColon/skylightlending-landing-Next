'use client'
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import React from 'react'
import imageProtada from '@/assets/img-body-contactus.jpg'
import ButtonBack from '@/components/UI/ButtonBack'
import { Avatar, Spinner } from "@nextui-org/react";

interface User {
    name: string;
    last_name: string;
    email: string;
    role: string;
    isActive: boolean;
    image_url: string;
}

export default function ProfilePage({ params }: { params: { id: string } }) {
    const id = params.id;
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`/api/user/${id}`);
            const data = await response.json();
            setUser(data.data);
        };
        fetchUser();
    }, [id]);

    if (!user) {
        return (
        <div className="flex gap-4 w-full h-screen justify-end items-center">
            <Spinner color="default" />
        </div>
        )
    }

    return (
        <section className='w-full h-[100vh] bg-blueFooter flex items-center flex-col relative'>
            <Image src={imageProtada} alt='imgProtada' className='absolute max-h-[290px] lg:max-h-[320px] object-cover w-full ' />
            <ButtonBack />
            <div className='w-full h-full flex bg-transparent abosulute z-10 top-0 left-0 flex-col items-center justify-start gap-5 p-5 pt-20'>
                <h1 className='text-white text-5xl font-bold'>WELCOME!</h1>
                <h1 className=' text-3xl mb-10 text-white' style={{ fontFamily: 'fantasy' }}>to my profile</h1>
                <div className='h-auto w-full flex flex-col items-center justify-center '>
                    <div className='w-auto h-auto relative mb-6'>
                        <Avatar showFallback src={`${user.image_url}`} isBordered color='primary' className="w-20 h-20 text-large lg:w-36 lg:h-36 " />
                    </div>
                    <div className='w-auto h-auto flex flex-col justify-start text-white'>
                        <span className='text-xl pr-5'>{`${user.name + ' ' + user.last_name}`}</span>
                        <span className='text-sm text-gray-400'>{user.email}</span>
                    </div>
                    <div className='w-auto h-auto flex justify-center flex-col text-white '>
                        <h2 className='text-white font-bold text-xl pt-10'>My role: {user.role}</h2>
                    </div>
                </div>
            </div>
        </section >
    );
};