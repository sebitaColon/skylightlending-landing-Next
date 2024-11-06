import React from 'react'
import Image from 'next/image'
import { Avatar} from '@nextui-org/react'
import imageProtada from '@/assets/img-body-contactus.jpg'
import imageCamera from '@/assets/imageCamera.svg'
import ButtonBack from '@/components/UI/ButtonBack'
import ProfileFrom from './ProfileFrom'
import ProfileFromImage from './ProfileFromImage'

export default function page() {

  return (
    <section className='w-full h-[100vh] bg-blueFooter flex items-center flex-col relative'>
      <Image src={imageProtada} alt='imgProtada' className='absolute max-h-[290px] lg:max-h-[320px] object-cover w-full '/>
      <ButtonBack/>
      <div className='w-full h-full flex bg-transparent abosulute z-10 top-0 left-0 flex-col items-center justify-start gap-5 p-5 pt-20'>
          <h1 className='text-white text-5xl font-bold'>WELCOME!</h1>
          <h1 className=' text-3xl mb-10 text-white' style={{fontFamily : 'fantasy'}}>to my profile</h1>        
        <div className='h-auto w-full flex flex-col items-center justify-center '>
          <div className='w-auto h-auto relative mb-6'>
            <ProfileFromImage/>
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" isBordered color='primary' className="w-20 h-20 text-large lg:w-36 lg:h-36 " />
          </div>
          <div className='w-auto h-auto flex justify-center flex-col text-white '>
            <ProfileFrom/>
            <span className='text-sm text-gray-400'>sebita03082003@gmail.com</span>
          </div>
        </div>
        <h2 className='text-white font-bold text-xl pt-10'>My role: User</h2>
      </div>
    </section>
  )
}
