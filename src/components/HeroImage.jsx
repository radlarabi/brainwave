import {useState} from 'react'
import {robot, notification1} from '@/assets'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, useSpring } from 'framer-motion'
import {heroIcons, notificationImages} from "@/constants"
import {BackgroundCircles} from "@/components/design/Hero"

const HeroImage = ({posX, posY}) => {
    const { scrollY } = useScroll()
    const [offset, setOffset] = useState(0)

    const scaleY = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    useMotionValueEvent(scaleY, "change", (latest) => {
        setOffset(latest / 30)
    })

    return (
    <motion.div
        className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 -z-50">
        <BackgroundCircles posX={posX} posY={posY}/>
        <div className='customGradient max-w-[62rem] h-fit rounded-2xl'>
            <div className="p-[2px] relative">
                <motion.div 
                    style={{ transform: `translateY(${offset}%)`}}
                    className="absolute w-full h-full z-50" >
                    <div className='hidden xl:flex absolute -right-[5rem] top-1/2 w-[15rem] bg-[#29263A] p-4 rounded-2xl backdrop-blur-md gap-4'>
                        <div className="">
                            <Image
                                className='rounded-lg'
                                src={notification1}
                                width={50}
                                height={50}
                                alt='notification1'
                                />
                        </div>
                        <div className="">
                            <h5 className='text-white font-sora text-sm font-semibold mb-1'>Code generation</h5>
                            <div className="flex flex-row">
                                {
                                    notificationImages.map((item, index) => (
                                        <div key={index} className="">
                                            <Image 
                                                className='rounded-full'
                                                src={item}
                                                width={20}
                                                height={20}
                                                alt='item'
                                            />
                                        </div>
                                    ))
                                }
                                <h5 className='text-sm ml-auto text-gray-200 font-light '>1min ago</h5>
                            </div>
                        </div>
                    </div>
                    <div className='hidden xl:flex absolute -left-[5rem] top-1/2 w-[15rem] bg-[#29263A]/50 py-5 rounded-2xl backdrop-blur-md'>
                        <div className="flex flex-row justify-between items-center w-full h-full px-5">
                            {
                                heroIcons.map((item ,key) => (
                                    <div key={key} className="">
                                        <Image
                                            src={item}
                                            width={24}    
                                            height={24}
                                            alt='item'
                                        />    
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
                <div className='bg-[#43435C] h-[1.4rem] rounded-t-[0.9rem]'/>
                <div className="overflow-hidden aspect-[33/40] md:aspect-[688/490] lg:aspect-[1124/490] rounded-b-[0.9rem]">
                    <Image
                        className='scale-[1.7] md:scale-[1] translate-y-[8%] md:-translate-y-[10%] lg:-translate-y-[21%]'
                        src={robot}
                        width={1024}
                        height={490}
                        alt='robot'
                    />
                </div>
                <div className='bg-gray-800 h-[1.4rem] rounded-b-[0.9rem] mx-[1rem]'/>
                <div className='bg-gradient-to-r from-[#594E45] to-[#573C60] h-[1.4rem] rounded-b-[0.9rem] mx-[2rem]'/>

            </div>
        </div>
    </motion.div>
  )
}

export default HeroImage
