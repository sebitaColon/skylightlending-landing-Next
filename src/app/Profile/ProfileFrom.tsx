'use client'
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import Image from 'next/image'
import iconEdit from '@/assets/iconEdit.svg'
import iconDone from '@/assets/done.svg'
import iconNot from '@/assets/danger.svg'
export default function ProfileFrom() {
    const [isEditing, setIsEditing] = useState(false);
    function handleView() {
        setIsEditing(!isEditing)
    }

    return (
        <div>
            {isEditing ? (
                <form action="" className='flex gap-2 pb-2 items-end'>
                    <div className='gap-2 flex flex-col text-white'>
                        <Input
                            isClearable
                            radius="lg"
                            defaultValue={'Juan'}
                            className='text-foreground'
                        />
                        <Input
                            isClearable
                            radius="lg"
                            defaultValue={'Garcia'}
                            className='text-foreground'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Button className='min-h-5 min-w-5 w-10 text-white h-10 p-0 rounded-lg bg-green-500' onClick={handleView}>
                            <Image src={iconDone} alt='iconDone' className='w-7 h-7'/>
                        </Button>
                        <Button className='min-h-5 min-w-5 w-10 text-white h-10 p-0 rounded-lg bg-red-500' onClick={handleView}>
                            <Image src={iconNot} alt='iconNot' className='w-7 h-7'/>
                        </Button>
                    </div>
                </form>
            ) : (
                <div className='w-full h-auto flex justify-between'>
                    <span className='text-xl'>Juan Garcia</span>
                    <Button className='bg-transparent min-h-5 min-w-5 w-auto h-auto p-0' onClick={handleView}>
                        <Image alt='imgIconEdit' src={iconEdit} className='w-5 h-5 '/>
                    </Button>
                </div>
            )}
        </div>
    )
}
