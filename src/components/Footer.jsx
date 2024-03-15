import React from 'react'
import { socials } from '@/constants'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='py-10'>
        <div className="flex flex-col md:flex-row text-white font-sora px-10 md:text-start text-center">
            <div className="flex items-center justify-center text-gray-400">
                <h5 className='text-sm'>© 2024. All rights reserved. Cloned By {" "}
                    <a href="https://github.com/radlarabi" className='hover:text-[#AC6AFF]'>Radouan Larabi</a>
                </h5>
            </div>
            <div className="flex justify-center w-full md:justify-end md:w-auto ml-auto gap-10 my-10 md:my-0">
                {
                    socials.map((item, index) => (
                        <a key={index} className="h-10 w-10 flex justify-center items-center bg-[#15131D] rounded-full" href=''>
                            <Image
                                src={item.iconUrl}
                                width={16}
                                height={16}
                                onClick={""}
                                alt={item.title}
                            />
                        </a>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Footer
