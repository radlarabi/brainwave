import React from 'react'
import {service1, service2, service3, check, gradient, play} from "@/assets"
import {brainwaveServices, brainwaveServicesIcons} from "@/constants"
import ChatBubbleWing from "@/assets/svg/ChatBubbleWing"
import {VideoBar} from "@/components/design/Services"
import Image from 'next/image'

const Services = () => {
  return (
    <div className='mx-auto max-w-[85rem] text-white py-10'>
        <div className="lg:mx-6 lg:mb-12">
            <h1 className='text-3xl lg:text-5xl w-full md:text-center text-start font-sora'>Generative AI made for creators.</h1>
            <p className='mt-4 md:text-center text-start w-full text-base text-[#757185]'>Brainwave unlocks the potential of AI-powered applications</p>
        </div>
        <div className="relative">
            <div className="relative mb-6">
                <div className="relative  overflow-hidden min-h-[39rem] flex justify-center items-center mt-5 border rounded-3xl border-gray-700 p-8 lg:p-20 ">
                    <div className="absolute top-0 left-0 lg:w-auto w-full h-full md:w-3/5">
                        <Image
                            className='w-full h-full object-cover md:object-right'
                            src={service1}
                            width={800}
                            height={730}
                        />
                    </div>
                    <div className="ml-auto z-10 flex flex-col justify-start items-start max-w-[17rem]">
                        <h1 className='text-3xl lg:text-5xl w-full md:text-center text-start font-sora'>Smartest AI</h1>
                        <p className='mt-4 mb-[3rem] md:text-center text-start w-full text-base text-[#757185]'>Brainwave unlocks the potential of AI-powered applications</p>
                        {
                            brainwaveServices.map((item, index) => (
                                <div key={index} className="flex flex-row border-t py-4 items-center w-full border-gray-700">
                                    <Image
                                        className='mr-5'
                                        src={check}
                                        width={25}
                                        height={25}
                                    />
                                    <h5 className=''>{item}</h5>
                                </div> 
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="absolute top-0 w-full h-full -z-50 opacity-15">
                <Image
                    className='w-full h-full object-cover'
                    src={gradient}
                    width={1700}
                    height={1700}
                />
            </div>
        </div>
        <div className="relative lg:grid lg:grid-cols-2 lg:space-x-6">
            <div className="card1 py-4 lg:py-0">
                <div className="relative overflow-hidden border rounded-3xl border-gray-700 min-h-[39rem]">
                    <div className="absolute top-0 right-0 lg:w-auto w-full h-full md:w-3/5 -z-10">
                        <Image
                            className='w-full h-full object-cover md:object-right opacity-40 md:opacity-80'
                            src={service2}
                            width={800}
                            height={730}
                        />
                    </div>
                    <div className="absolute left-8 bottom-8 lg:mx-6 lg:mb-12">
                        <h1 className='text-3xl lg:text-5xl w-full text-start font-sora'>Photo editing</h1>
                        <p className='mt-4 text-start w-full text-base text-gray-300'>Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
                    </div>
                    <div className="bg-black absolute right-8 top-8 max-w-[17rem] px-8 py-6 rounded-t-3xl rounded-bl-3xl">
                        <h5 className='font-code-pro'>Hey Brainwave, enhance this photo</h5>
                        <ChatBubbleWing className="absolute bottom-0 left-full"/>
                    </div>
                </div>
                <div className="absolute top-0 w-full h-full -z-50 opacity-15">
                    <Image
                        className='w-full h-full object-cover'
                        src={gradient}
                        width={1700}
                        height={1700}
                    />
                </div>
            </div>
            <div className="card2">
                <div className="relative border rounded-3xl border-gray-700 min-h-[39rem]">
                    <div className="pt-12 px-8 lg:mx-6 lg:mb-12">
                        <h1 className='text-3xl lg:text-5xl w-full text-start font-sora'>Video generation</h1>
                        <p className='mt-4 text-start w-full text-base text-gray-300'>The world’s most powerful AI photo and video art generation engine. What will you create?</p>
                        <div className="flex flex-row justify-between my-5">
                            {
                                brainwaveServicesIcons.map((item, index) => (
                                    <div key={index} className="bg-gray-800/80 p-2 w-[3rem] h-[3rem] mx-2 rounded-2xl  flex justify-center items-center">
                                        <Image
                                            className='w-full h-full'
                                            src={item}
                                            width={24}
                                            height={24}
                                        />    
                                    </div>
                                ))
                            }
                        </div>
                        <div className="relative h-[20rem] bg-black/40 w-full rounded-3xl overflow-hidden">
                            <div className="absolute w-full h-full top-0">
                                <Image
                                    className='w-full h-full object-cover'
                                    src={service3}
                                    width={1700}
                                    height={1700}
                                />
                                <div className="absolute bottom-0 w-full">
                                    <VideoBar/>
                                </div>
                                <div className="absolute bg-[#252134] max-w-[15rem] top-8 left-[3rem] px-8 py-3 md:py-4 rounded-t-2xl rounded-br-2xl">
                                    <h5 className='font-code-pro text-base'>Video generated!</h5>
                                    <ChatBubbleWing className="absolute fill-[#252134] bottom-0 -left-6 scale-x-[-1]"/>
                                    <div className="absolute text-[10px] bottom-1 right-1 font-extralight">JUST NOW</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
