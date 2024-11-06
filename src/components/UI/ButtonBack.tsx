'use client'
import React from 'react'
import Image from 'next/image'
import buttonBack from '@/assets/buttonBack.svg'

export default function ButtonBack() {
    const handleBack = () => {
        window.history.back(); 
        console.log('hola');
      };
  return (
    <Image src={buttonBack} alt='botonAtras' className='w-10 h-10 bg-blueFooter absolute top-5 left-5 rounded-xl z-20' onClick={handleBack}></Image>
)
}
