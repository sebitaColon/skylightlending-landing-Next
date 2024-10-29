"use client"
import { Button } from '@nextui-org/react'
import React from 'react'

export default function ButtonContacUS() {
  return (
      <>
      <Button className="group hover:text-white bg-white text-xl w-32 h-10 md:w-52 md:h-16 group-hover:opacity-100 px-12 py-8 rounded-none relative
      after:content-[''] after:bg-blueFooter after:absolute after:w-1 after:h-1 after:-left-24 after:-bottom-10
      hover:after:w-80 hover:after:h-52 after:transform-transition after:ease-in after:delay-50 after:transition-all after:rounded-full hover:after:rounded-none after:-z-10
      dark:text-black">
          Get In Touch
      </Button>
      </>
    )
}
