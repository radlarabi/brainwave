'use client'
import React from 'react'
import {BackgroundCircles, HamburgerMenu} from "@/components/design/Header"
import Image from 'next/image'
import { curve, robot, loading , heroBackground} from '@/assets'
import Button from './Button'
import HeroImage from './HeroImage'
import {companyLogos} from '@/constants'
import { useScroll } from 'framer-motion'
const Hero = () => {
    const { scrollYProgress } = useScroll();
    console.log(scrollYProgress.getPrevious);
    return (
        <div className='relative ' id="Hero">
            <div className="relative mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] w-full z-50">
                <div className="text-center flex flex-col justify-center items-center pt-[8rem]  text-white font-sora max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
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
                            className={"bg-white text-black hover:bg-slate-700 text-xs font-code-pro font-bold w-auto inline-flex justify-center items-center h-11 px-6 tracking-wider "}
                            >
                            GET STARTED
                        </Button>
                    </div>
                </div>
            </div>
            <HeroImage/>
            <div className="hidden absolute md:block left-1/2 top-[40rem] w-fit aspect-square border  rounded-full opacity-15">
                <div className='absolute top-1/2 left-1/2 w-[46.875rem] md:w-[46.875rem]  xl:w-[65.875rem] aspect-square border   rounded-full -translate-x-1/2 -translate-y-1/2'/>
                <div className='absolute top-1/2 left-1/2 w-[35.875rem] md:w-[40.875rem]  xl:w-[50.875rem] aspect-square border   rounded-full -translate-x-1/2 -translate-y-1/2'/>
                <div className='absolute top-1/2 left-1/2 w-[26.875rem] md:w-[30.875rem]  xl:w-[40.875rem] aspect-square border   rounded-full -translate-x-1/2 -translate-y-1/2'/>
                <div className='absolute top-1/2 left-1/2 w-[16.875rem] md:w-[16.875rem]  xl:w-[26.875rem] aspect-square border   rounded-full -translate-x-1/2 -translate-y-1/2'/>
            </div>
            <div className="mt-20 hidden lg:block">
                <h5 className='text-gray-400 font-inter font-light text-xs text-center tracking-widest uppercase'>
                    Helping people create beautiful content at
                </h5>
                <ul className='flex gap-20 lg:gap-28 justify-center items-center h-[8.5rem]'>
                    {
                        companyLogos.map((item, index) => (
                            <li key={index} className=''>
                                <Image
                                    src={item}
                                    width={134}
                                    height={28}
                                />
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default Hero
