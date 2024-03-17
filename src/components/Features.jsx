'use client'
import React, { useState } from 'react'
import {benefits} from '@/constants'
import Image from 'next/image'
import Arrow from '@/assets/svg/Arrow'
import {benefitImage2} from "@/assets" 
const Features = () => {
    const [isHover, setIsHover] = useState(false)
    const [hoverIndex, setHoverIndex] = useState(0)
    return (
        <div className='mt-10' id="Features">
            <h2 className='text-white text-3xl md:text-5xl max-w-md lg:max-w-[50rem] lg:text-center mx-auto font-medium mb-12'>
                Chat Smarter, Not Harder with Brainwave
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[80rem] mx-auto">
                {
                    benefits.map((item, index) => (
                        <div
                            onMouseEnter={() => {setIsHover(true); setHoverIndex(index)}}
                            onMouseLeave={() => setIsHover(false)}
                            key={index} 
                            className="relative overflow-hidden  text-white flex flex-col min-h-[22rem] md:max-w-[24rem] p-[2.4rem] bg-blue-900/5 my-4 mx-2 rounded-xl"
                        >
                            {
                                isHover && index == hoverIndex &&  
                                <div key={index} className="mx-auto absolute w-full h-full top-0 letf-0 opacity-10 -z-50">
                                    <Image
                                        className='w-full h-full object-cover'
                                        src={benefitImage2}
                                        width={350}
                                        height={350}
                                        alt='benefitImage2'
                                        />
                                </div>
                            }
                            {/* 
                            <div className='absolute bg-blue-600 w-full h-full'/> */}
                            <h5 className='text-2xl mb-5 '>
                                {item.title}
                            </h5>
                            <p className='font-light'>
                                {item.text}
                            </p>
                            <div className=" mt-auto flex items-center">
                                <Image
                                    src={item.iconUrl}
                                    width={50}
                                    height={50}
                                    alt='iconUrl'
                                />
                                <p className='text-xs font-bold uppercase ml-auto font-code-pro'>Explore more</p>
                                <div className="m-2 bg-blue z-50">
                                    <Arrow/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Features
