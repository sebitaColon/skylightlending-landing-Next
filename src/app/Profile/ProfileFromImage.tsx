'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import Image from 'next/image'
import imageCamera from '@/assets/imageCamera.svg'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import uploadFile from '@/assets/uploadFile.svg'
import imageProtada from '@/assets/img-body-contactus.jpg'
import iconEdit from '@/assets/iconEdit.svg'

export default function ProfileFromImage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [fileName, setFileName] = useState<string | null>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setFileName('');
            setImageSrc(null);
        }
    };
    return (
        <>
            <Button onPress={onOpen} className='min-w-8 min-h-8 p-1 w-auto h-auto bg-blue-500 rounded-full absolute -bottom-2 z-10 -right-2 lg:w-12 lg:h-12' >
                <Image src={imageCamera} alt='imgCamera'/>
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur'>
                <form>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Upload Image</ModalHeader>
                                <ModalBody>
                                    <div className='w-full h-52 flex items-center justify-center relative border-3 border-dashed border-blueFooter rounded-2xl'>
                                        {imageSrc ? (
                                            <div className='w-full h-full flex items-center justify-center relative overflow-hidden bg-blueFooter'>
                                                <h1 className='text-white text-base font-bold absolute top-3 z-20'>WELCOME!</h1>
                                                <h1 className=' text-[10px] text-white font-bold absolute top-9 z-20' style={{ fontFamily: 'fantasy' }}>to my profile</h1>
                                                <Image src={imageProtada} alt='imagePortada' className='object-cover w-full h-full -top-2/4 left-0 absolute'/>
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
                                                <div className='w-auto h-auto absolute gap-2 bottom-10 flex justify-between'>
                                                    <span className='text-[8px] text-white '>Juan Garcia</span>
                                                    <Button className='bg-transparent min-h-2 min-w-2 w-auto h-auto p-0' >
                                                        <Image alt='imgIconEdit' src={iconEdit} className='w-2 h-2 '/>
                                                    </Button>
                                                </div>
                                                <span className='text-[6px] absolute bottom-7 text-gray-400'>sebita03082003@gmail.com</span>

                                            </div>
                                        ) : (
                                            <Image src={uploadFile} alt='upload'/>
                                        )}
                                        <input onChange={handleFileChange} accept="image/*" type="file" className='w-full h-full absolute opacity-0 bg-red-400 flex items-center justify-center z-30' />
                                    </div>
                                    <h1>{fileName}</h1>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose} type='submit'>
                                        Action
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}
