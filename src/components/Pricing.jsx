import React from 'react'
import {smallSphere, check} from '@/assets'
import Image from 'next/image'
import brackets from "@/assets/svg/Brackets"
import {pricing} from '@/constants'
import Button from './Button'
const Pricing = () => {
  return (
    <div className='py-20 text-white'>
        <div className="hidden lg:flex lg:justify-center lg:items-start lg:mb-[6rem] ">
            <Image
                src={smallSphere}
                width={255}
                height={255}
            />
        </div>
        <div className="flex flex-col justify-start md:justify-center">
            <div className="flex md:justify-center mb-4">
                {brackets("left")}
                <p className='uppercase text-xs font-code-pro font-light tracking-wider mx-4'>GET STARTED WITH BRAINWAVE</p>
                {brackets("rigth")}
            </div>
            <h1 className=' text-3xl md:text-center mb-12 font-sora'>Pay once, use forever</h1>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center font-sora lg:max-w-[80rem] mx-auto py-4">
            {
                pricing.map((item, index) => (
                    <div key={index} className={`text-sora border border-gray-700 rounded-xl w-full h-full p-6 my-4 lg:mx-3 ${index == 1 ? "py-8" : "py-6"}`}>
                        <h2 className={`text-3xl mb-4 ${index == 0 ? "text-[#FFC876]" : index == 1 ? "text-[#AC6AFF]" : "text-[#FF776F]"}`}>
                            {item.title}
                        </h2>
                        <p className={`text-base text-gray-500 font-light mb-4`}>
                            {item.description}
                        </p>
                        <h1 className='text-[5rem] font-semibold flex flex-row items-center justify-start h-20 mb-4'>
                            <div className="text-[2rem] px-1">
                                {
                                    index != 2 ? `$ ${" "}` : `${" "}`
                                }
                            </div>
                            {item.price}
                        </h1>
                        <div className="w-full ">
                            { 
                                index != 2 ? 
                                    <Button className={`tracking-wider text-xs uppercase px-6 py-3 font-code-pro font-semibold w-full ${index != 2 ? `bg-white text-black` : ""}`} full>
                                        {index != 2 ? "Try it Now" : "Contact us"}
                                    </Button>
                                :
                                    <Button className={`tracking-wider text-xs uppercase px-6 py-3 font-code-pro font-semibold w-full ${index != 2 ? `bg-white text-black` : ""}`} full border>
                                        {index != 2 ? "Try it Now" : "Contact us"}
                                    </Button>

                            }
                        </div>
                        <div className="py-10">
                            {
                                item.features.map((subItem, key) => (
                                    <div key={key} className="flex flex-row border-t py-4 items-center w-full border-gray-700">
                                        <Image
                                            className='mr-5'
                                            src={check}
                                            width={25}
                                            height={25}
                                        />
                                        <h5 className='text-sm'>{subItem}</h5>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
        <a href="" className='text-xs flex w-full justify-center underline font-code-pro font-bold tracking-wider'>SEE THE FULL DETAILS</a>
    </div>
  )
}

export default Pricing
