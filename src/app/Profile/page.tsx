import React from 'react'
import Image from 'next/image'
import { Avatar, Button} from '@nextui-org/react'
import iconEdit from '@/assets/iconEdit.svg'
import imageProtada from '@/assets/img-body-contactus.jpg'
import imageCamera from '@/assets/imageCamera.svg'
import ButtonBack from '@/components/UI/ButtonBack'

export default function page() {

  return (
    <section className='w-full h-[100vh] bg-blueFooter flex items-center flex-col relative'>
      <Image src={imageProtada} alt='imageProtada' className='absolute max-h-[290px] lg:max-h-[320px] object-cover w-full '></Image>
      <ButtonBack/>
      <div className='w-full h-full flex bg-transparent abosulute z-10 top-0 left-0 flex-col items-center justify-start gap-5 p-5 pt-20'>
          <h1 className='text-white text-5xl font-bold'>WELCOME!</h1>
          <h1 className=' text-3xl mb-10 text-white' style={{fontFamily : 'fantasy'}}>to my profile</h1>        
        <div className='h-auto w-full flex flex-col items-center justify-center '>
          <div className='w-auto h-auto relative mb-6'>
            <Button className='min-w-8 min-h-8 p-1 w-auto h-auto bg-blue-500 rounded-full absolute -bottom-2 z-10 -right-2 lg:w-12 lg:h-12'>
                <Image src={imageCamera} alt='imagenCamera' className=''></Image>
            </Button>
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" isBordered color='primary' className="w-20 h-20 text-large lg:w-36 lg:h-36 " />
          </div>
          <div className='w-auto h-auto flex justify-center flex-col text-white '>
            <div className='w-full h-auto flex justify-between'>
              <span className='text-xl'>Juan Garcia</span>
              <Button className='bg-transparent min-h-5 min-w-5 w-auto h-auto p-0'>
                <Image alt='imgStatus' src={iconEdit} className='w-5 h-5 '></Image>
              </Button>
            </div>
            <span className='text-sm text-gray-400'>sebita03082003@gmail.com</span>
          </div>
        </div>
        <h2 className='text-white font-bold text-xl pt-10'>My role: User</h2>
      </div>
    </section>
  )
}
