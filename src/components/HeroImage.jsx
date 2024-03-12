import React from 'react'
import { curve, robot, loading, gradient } from '@/assets'
import name from '../assets/hero/name.jpg'
import Image from 'next/image'
const HeroImage = () => {
  return (
    <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 z-50">
        <div className='customGradient max-w-[62rem] h-fit rounded-2xl'>
            <div className="p-[2px] ">
                <div className='bg-[#43435C] h-[1.4rem] rounded-t-[0.9rem]'/>
                <div className="overflow-hidden aspect-[33/40] md:aspect-[688/490] lg:aspect-[1124/490] rounded-b-[0.9rem]">
                    <Image
                        className='scale-[1.7] md:scale-[1] translate-y-[8%] md:-translate-y-[10%] lg:-translate-y-[21%]'
                        src={robot}
                        width={1024}
                        height={490}
                    />
                </div>
                <div className='bg-gray-800 h-[1.4rem] rounded-b-[0.9rem] mx-[1rem]'/>
                <div className='bg-gradient-to-r from-[#594E45] to-[#573C60] h-[1.4rem] rounded-b-[0.9rem] mx-[2rem]'/>

            </div>
        </div>
    </div>
  )
}

export default HeroImage
