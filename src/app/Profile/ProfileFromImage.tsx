'use client'
import { Button } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'
import imageCamera from '@/assets/imageCamera.svg'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import uploadFile from '@/assets/uploadFile.svg'

export default function ProfileFromImage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} className='min-w-8 min-h-8 p-1 w-auto h-auto bg-blue-500 rounded-full absolute -bottom-2 z-10 -right-2 lg:w-12 lg:h-12' >
                <Image src={imageCamera} alt='imagenCamera' className=''></Image>
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop='blur'>
                <form>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Upload Image</ModalHeader>
                                <ModalBody>
                                    <div className='w-full h-52 flex items-center justify-center relative border-3 border-dashed border-blueFooter rounded-2xl'>
                                        <Image src={uploadFile} alt='upload'></Image>
                                        <input type="file" className='w-full h-full absolute opacity-0 bg-red-400 flex items-center justify-center' />
                                    </div>
                                    <h1>dasdasdasdas.svg</h1>
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
