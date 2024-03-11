import React from 'react'
import {BackgroundCircles, HamburgerMenu} from "@/components/design/Header"
import Image from 'next/image'
import { curve, robot, loading } from '@/assets'
import Button from './Button'

const Hero = () => {
  return (
    <div className='px-[18px] md:mx-[2vw] md:border-x border-gray-800'>
        {/* <div className="opacity-20 block overflow-hidden">
            <HamburgerMenu/>
        </div> */}
        <div className="hidden lg:block overflow-hidden">
            <BackgroundCircles/>
        </div>
        <div className=" mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <div className="text-center flex flex-col justify-center items-center pt-[8rem]  text-white font-sora ">
                <h1 className='lg:text-6xl text-[2.5rem] md:text-[2.75rem] font-semibold mb-6'>
                    Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
                    <span className='relative'>
                        Brainwave
                        <Image
                            className='absolute top-full left-0'
                            src={curve}
                            width={624}
                            height={28}
                            alt='curv'
                        />
                    </span>
                </h1>
                <p className='lg:text-xl text-sm text-center max-w-3xl mx-auto font-[0.8rem] leading-6 mb-6 text-[#CAC9C6]'>
                    Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
                </p>
                <div className="flex justify-center">
                    <Button
                        className={"bg-white text-black text-xs font-code-pro font-bold w-auto inline-flex justify-center items-center h-11 px-6 tracking-wider"}
                        >
                        GET STARTED
                    </Button>
                </div>
            </div>
        </div>
        <div className="relative flex justify-center customGradient rounded-2xl overflow-hidden h-[30rem] md:h-[43rem]">
            <div className="absolute  mx-[2px] my-[2px] text-white bottom-[5rem] md:bottom-[6rem] w-[90%] md:w-[60%] z-10 bg-black/65 rounded-3xl flex items-center h-[12%] md:h-[8%] px-6">
                <Image
                    className='w-5 h-5 mr-5'
                    src={loading}
                    width={0}
                    height={0}
                    alt='curv'
                />
                AI is generating
            </div>
            <div className="absolute  mx-[2px] my-[2px] rounded-[1.1rem] overflow-hidden h-[99%] w-[90%] bg-gradient-to-r from-[#594E45] to-[#573C60] z-100"/>
            <div className="absolute  mx-[2px] my-[2px] rounded-[1.1rem] overflow-hidden h-[95%] w-[94%] bg-[#1B1B2E] "/>
            <div className="mx-[2px] my-[2px] rounded-[1.1rem] overflow-hidden h-[90%]">
                <Image
                    className='rounded-[1.1rem] md:scale-[1]  md:-translate-y-[10%] scale-[1.6] translate-y-5 '
                    src={robot}
                    width={0}
                    height={0}
                    alt='curv'
                />
            </div>
                
        </div>
    </div>
  )
}

export default Hero
