import Layout from '@/components/Layout'
import React from 'react'
import Image from 'next/image'
import BackgrounImg from "@/assets/FondoFormInstaller.jpg";
import RegisterForm from './RegisterForm';
import { Button } from '@nextui-org/react';
import volver from '@/assets/volver.svg'

export default function page() {
    return (
        <Layout>
            <div className="w-full h-auto flex flex-col items-center justify-center relative">
                <Image
                    src={BackgrounImg}
                    alt=""
                    className="absolute object-cover w-full h-full -z-10"
                />
                <div
                    className={`w-full h-auto p-5 bg-background text-foreground mt-40 mb-20 rounded-3xl flex flex-col justify-start sm:w-4/5 md:max-w-5xl xl:mt-52 `}
                >
                    <div className="w-full flex items-center mb-5 justify-between">
                    <a
                            className="w-10 rounded-3xl min-w-none bg-blue-600 shadow-lg"
                            color="primary"
                            href='/login'
                        >
                            <Image src={volver} alt='volver'/>
                        </a>
                        <div className='flex items-center'>
                            <h1 className="pr-10">FAQs</h1>
                            <Button variant="shadow" radius="full" color="primary">
                                Get in touch
                            </Button>
                        </div>
                    </div>
                    <RegisterForm />
                </div>
            </div>
        </Layout>
    )
}
