import React from 'react'
import brackets from "@/assets/svg/Brackets"
import {roadmap} from "@/constants"
import Image from 'next/image'
import { loading1, check2, grid } from '@/assets'
import Button from './Button'
const Roadmap = () => {
  return (
    <div className='py-20 text-white' id="Roadmap">
		<div className="py-20 mb-20">
			<div className="flex flex-col justify-start md:justify-center">
					<div className="flex md:justify-center mb-4">
						{brackets("left")}
						<p className='uppercase text-xs font-code-pro font-light tracking-wider mx-4'>READY TO GET STARTED</p>
						{brackets("rigth")}
					</div>
					<h1 className=' text-3xl lg:text-5xl md:text-center mb-12 font-sora'>What we’re working on</h1>
			</div>
			<div className="grid md:gap-6 md:grid-cols-2 max-w-[70rem] mx-auto font-sora">
				{
					roadmap.map((item, index) => (
						<div key={index} className={`my-4 md:my-0 p-4 relative border border-gray-700 rounded-3xl overflow-hidden ${index == 1 || index == 3 ? "md:translate-y-[7rem]" : "" }`}>
							<div className="absolute top-0">
								<Image
									className='w-full h-full object-cover'
									src={grid}
									width={600}
									height={600}
									alt='grid'
								/>
							</div>
							<div className="flex items-center p-4">
							
								<div className="flex md:justify-center items-center">
									{brackets("left")}
									<p className='uppercase text-xs font-code-pro font-light tracking-wider mx-4'>{item.date}</p>
									{brackets("rigth")}
								</div>
							
								<div className="flex bg-white font-code-pro font-extralight uppercase text-xs text-black ml-auto rounded-md px-3 py-1">
									{
									item.status == "done" ? 
									<Image
										className='mr-1'
										src={check2}
										width={16}
										height={16}
										alt='grid'
										/> 
										:
										<Image
										className='mr-1'
										src={loading1}
										width={16}
										height={16}
										alt='loading'
										/> 
									}
									{item.status}
								</div>
							</div>
							<Image
								src={item.imageUrl}
								width={628}
								height={426}
								alt='imageUrl'
							/>
							<h1 className='text-3xl px-10 mb-4'>{item.title}</h1>
							<h5 className='text-base font-extralight text-gray-400 px-10 mb-4'>{item.text}</h5>
						</div>
					))
				}
			</div>
		</div>
		<div className="w-full flex justify-center items-center">
			<Button className="text-xs font-code-pro px-5 py-3 uppercase font-bold tracking-wider" border>
				our roadmap
			</Button>
		</div>
    </div>
  )
}

export default Roadmap
