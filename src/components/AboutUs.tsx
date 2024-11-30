import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { Button } from './ui/button';
import { aboutDetail } from '@/constant/aboutDetail';
function AboutUs() {
  return (
    <>
    
   <section className='w-full bg-white  py-[48px] xsmall:py-[112px] text-center '>
    <h1 className='h1 mb-[24px]'>Our team</h1>
    <p  className='text-[18px] leading-[27px]  mb-[48px]  xsmall:mb-[80px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

     {/*cards div */}
     <div className='
      w-full
      h-[723px] xsmall:h-auto
      grid 
      grid-col-1 xsmall:grid-cols-3  
      xsmall:grid-rows-2
      gap-x-[48px] 
      gap-y-[48px]  xsmall:gap-y-[64px]
      overflow-y-auto'>


      {aboutDetail.map((item, index) =>(
             <div className=' flex flex-col justify-center 'key={index}>
             <div className='inline-block m-auto mb-[24px]' >
              <Image src={item.image} alt='img1' width={80} height={80}></Image>
            </div>
            <h1 className='text-[20px] leading-[30px] font-semibold'>{item.name}</h1>
            <p className='text-[18px] leading-[27px] mb-[24px]'>{item.post}</p>

            <div className='flex justify-center m-auto gap-[14px]'>
            <FaLinkedin size={24} />
            <FaTwitter  size={24}/>
            <HiOutlineGlobeAlt size={24} />
            </div>
     </div>

    ))}
  


     

     </div>
     <Button variant={'transparentbtn'} className='mt-[48px]  xsmall:hidden'>View All</Button>
   </section>
    
    </>
  )
}

export default AboutUs