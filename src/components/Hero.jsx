import React from 'react'
import {BackgroundCircles, HamburgerMenu} from "@/components/design/Header"
import Image from 'next/image'
import { curve, robot, loading , heroBackground} from '@/assets'
import Button from './Button'
import HeroImage from './HeroImage'
const svgGradiant = () => (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  viewBox="0 0 700 700" width="700" height="700" opacity="0.64">
            
        </svg>
    </>
)
const Hero = () => {
  return (
    <div className='relative px-[18px] md:mx-[2vw] md:border-x border-gray-800'>
        {/* <div className="opacity-20 block overflow-hidden">
            <HamburgerMenu/>
        </div> */}
        <div className="hidden lg:block overflow-hidden">
            <BackgroundCircles/>
        </div>

        <div className="relative mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] w-full">
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
        <div className="absolute -translate-y-[30%] translate-x-[10%] -z-50">
            {/* <svg className='' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 700 700" width="700" height="700" opacity="0.64"><defs><radialGradient id="ffflux-gradient">
                <stop offset="0%" stop-color="hsl(315, 100%, 72%)"></stop>
                    <stop offset="100%" stop-color="hsl(203, 80%, 10%)"></stop>
                    </radialGradient><filter id="ffflux-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feTurbulence type="fractalNoise" baseFrequency="0.001 0.001" numOctaves="2" seed="33" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
                <feGaussianBlur stdDeviation="0 0" x="0%" y="0%" width="100%" height="100%" in="turbulence" edgeMode="duplicate" result="blur"></feGaussianBlur>
                <feBlend mode="color-burn" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend"></feBlend>
                
                </filter></defs><rect width="700" height="700" fill="url(#ffflux-gradient)" filter="url(#ffflux-filter)"></rect></svg> */}
                <Image
                    src={heroBackground}
                    width={1440}
                    height={1800}
                />
        </div>
        </div>
        <HeroImage/>
        <div className="hidden absolute md:block left-1/2 top-[40rem] w-fit aspect-square border  rounded-full opacity-15">
            <div className='absolute top-1/2 left-1/2 w-[46.875rem] md:w-[46.875rem]  xl:w-[65.875rem] aspect-square border   rounded-full -translate-x-1/2 -translate-y-1/2'/>
            <div className='absolute top-1/2 left-1/2 w-[35.875rem] md:w-[40.875rem]  xl:w-[50.875rem] aspect-square border   rounded-full -translate-x-1/2 -translate-y-1/2'/>
            <div className='absolute top-1/2 left-1/2 w-[26.875rem] md:w-[30.875rem]  xl:w-[40.875rem] aspect-square border   rounded-full -translate-x-1/2 -translate-y-1/2'/>
            <div className='absolute top-1/2 left-1/2 w-[16.875rem] md:w-[16.875rem]  xl:w-[26.875rem] aspect-square border   rounded-full -translate-x-1/2 -translate-y-1/2'/>
        </div>
        
    </div>
  )
}

export default Hero
