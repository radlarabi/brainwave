'use client'
import React from 'react'
import Image from 'next/image'
import Button from './Button'
import {discord, check, curve1, curve2, brainwaveSymbol} from '@/assets'
import {collabApps} from '@/constants'
import {LeftCurve} from '@/components/design/Collaboration'

const Collaboration = () => {
  return (
    <div className='px-8 mt-12 flex flex-col lg:flex-row  justify-center items-center mx-auto max-w-[85rem]'>
        <div className="text-white max-w-[25rem] ">
            <h1 className='text-3xl md:text-5xl font-medium mb-5 font-sora'>
                AI Chat App for seamless collaboration
            </h1>
            <div className="flex flex-row my-3">
                <Image
                    className='mr-5'
                    src={check}
                    width={25}
                    height={25}
                />
                <h5 className=''>Seamless Integration</h5>
            </div>
            <p className='md:text-base text-sm font-extralight py-4 font-sora text-gray-300'>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter</p>

            <div className="flex flex-row my-3">
                <Image
                    className='mr-5'
                    src={check}
                    width={25}
                    height={25}
                />
                <h5 className=''>Smart Automation</h5>
            </div>

            <div className="flex flex-row my-8">
                <Image
                    className='mr-5'
                    src={check}
                    width={25}
                    height={25}
                />
                <h5 className=''>Top-notch Security</h5>
            </div>
            <Button className="uppercase px-6 py-3 text-sm font-code-pro font-semibold">
                Try it Now
            </Button>
        </div>
        <div className=" text-white lg:ml-auto max-w-[25rem]">
            <p className='md:text-base text-sm font-extralight mb-4 py-4 font-sora text-gray-300'>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter</p>
            <div className="relative flex justify-center items-center aspect-square border rounded-full border-gray-800">
                <div className="flex aspect-square border rounded-full w-60 mx-auto border-gray-800">
                    <div className="flex justify-center items-center w-full">
                        <Image
                            className='w-[48px] h-[48px]'
                            src={brainwaveSymbol}
                            width={48}
                            height={48}
                        />
                        <div className="">
                            {
                                collabApps.map((item, key) => (       
                                    // ${45 * item.id > 180 ? `rotate-${45 * item.id}` : `-rotate-${45 * item.id}`}
                                    <div className={`absolute -py-4 -px-8 top-0 left-1/2 h-1/2 origin-bottom`} key={key} style={{ transform: `rotate(-${45 * item.id}deg)`}}>
                                        <Image
                                            style={{ transform: `rotate(${45 * item.id}deg)`}}
                                            src={item.icon}
                                            width={item.width}
                                            height={item.height}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
                    <Image 
                        src={curve1}
                        width={522}
                        height={180}
                        />
                </div>
                
                <div className="opacity-20">
                    <div className='absolute top-1/2 left-1/2 w-[22rem] aspect-square border   rounded-full -translate-x-1/2 -translate-y-1/2'/>
                    <div className='absolute top-1/2 left-1/2 w-[12rem] aspect-square border   rounded-full -translate-x-1/2 -translate-y-1/2'/>
                </div>
                
                <div className="">
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Collaboration
