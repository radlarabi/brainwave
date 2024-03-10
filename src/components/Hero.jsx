import React from 'react'
import {BackgroundCircles, HamburgerMenu} from "@/components/design/Header"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=''>
        <div className="opacity-20 block overflow-hidden">
            <HamburgerMenu/>
        </div>
        <div className="block overflow-hidden">
            <BackgroundCircles/>
        </div>
        <h1 className='text-white'>
            Explore the Possibilities of AI Chatting with
            <span>
                Brainwave
            </span>
        </h1>
    </div>
  )
}

export default Hero
