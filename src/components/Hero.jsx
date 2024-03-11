import React from 'react'
import {BackgroundCircles, HamburgerMenu} from "@/components/design/Header"
import Image from 'next/image'
import { curve } from '@/assets'
const Hero = () => {
  return (
    <div className='px-2'>
        {/* <div className="opacity-20 block overflow-hidden">
            <HamburgerMenu/>
        </div> */}
        <div className="hidden lg:block overflow-hidden">
            <BackgroundCircles/>
        </div>
        <div className="lg:border-x-2 lg:border-gray-800">
            <div className="text-center  pt-[8rem] z-100 container text-white">
                <h1 className='text-[2.5rem] font-semibold font-sora mb-6'>
                    Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
                    <span className='inline-block relative'>
                        Brainwave
                        <Image
                            className='absolute top-full left-0 w-full'
                            src={curve}
                            width={624}
                            height={28}
                            alt='curv'
                        />
                    </span>
                </h1>
                <p className='text-center max-w-3xl mx-auto font-[0.8rem] leading-6'>
                    Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero
