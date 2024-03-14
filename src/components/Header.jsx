'use client'
import { useState } from "react"
import { brainwave } from "@/assets"
import Image from "next/image"

import Button from "@/components/Button"

import {navigation, navigationButton} from '@/constants/index'
import { enablePageScroll, disablePageScroll } from "scroll-lock"

export default function Header(){
    const [toggle, setToggle] = useState(false)
    const toggleHandler = () =>{
        setToggle(!toggle)
        toggle ? enablePageScroll() : disablePageScroll() 
    }
    return (
        <div className="md:mx-4 lg:mx-4">
            <div className="flex w-full py-[1rem] px-[20px] border-b border-gray-800 z-100">
                <Image 
                    src={brainwave}
                    width={180}
                    height={40}
                />
                <div className="lg:hidden ml-auto text-white">
                    <Button className={`menu text-white ${toggle ? 'opened' : ''}`} onClick={toggleHandler}>
                        <svg width="40" height="40" viewBox="0 0 100 100" stroke="#9E94C9">
                            <path className="line line1"  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2"  d="M 20,50 H 80" />
                            <path className="line line3"  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </Button>
                </div>
                <div className="font-code-pro text-gray-300 hidden lg:flex flex-row justify-center items-center text-xs font-bold uppercase lg:space-x-[4rem] ml-auto">
                    {navigation.map((item, key) => (
                        <a key={key} href={item.url} className="flex flex-row justify-center items-center hover:text-fuchsia-900">
                            {item.title}
                        </a>
                    ))}
                </div>
                <div className="font-code-pro text-gray-300 hidden lg:flex ml-auto uppercase text-xs font-bold ">
                    {navigationButton.map((item, key) => (
                        key == 1 ? 
                        <Button key={key} href={item.url} className="h-full px-4 text-white">
                            {item.title}
                        </Button>
                        :
                        <a key={key} href={item.url} className="h-full  flex justify-center items-center px-9 ">
                            {item.title}
                        </a>

                    ))}
                </div>
            </div>
            {
                toggle && 
                <div className="lg:hidden w-full px-[1rem] absolute bg-[#080312] --font-code-pro z-[120]">
                    <div className="h-[90vh] bg-[#080312] text-white gap-10 border-x border-gray-800 flex flex-col justify-center items-center text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12">
                        {navigation.map((item, key) => (
                            <a key={key} href={item.url}>
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}