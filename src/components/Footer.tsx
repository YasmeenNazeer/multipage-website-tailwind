import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constant/footerLinks'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <>
    <footer className='w-full 
  gap-[80px] 
    flex 
    flex-col 
    px-[24px] 
    py-[48px]
     xsmall:p-[80px]
     bg-mainbg
     text-center xsmall:text-start'>
    {/*top div */}
       <div className='
       w-full 
       flex
       flex-col
        xsmall:flex-row
         justify-between 
         items-center '>

        <div className='w-[287px] xsmall:w-auto flex xsmall:flex-row flex-col gap-4 '>
            <p className='text-[18px] leading-[27px]  font-semibold'>Subscribe to our newsletter</p>
            <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

          <div className='gap-4 flex flex-col mt-[24px] xsmall:mt-0 '>
            <div className='flex gap-4 flex-col xsmall:flex-row'>
            <Input placeholder='Enter your email' className='w-full xsmall:w-[265px] h-[48px] p-[12px] focus:border-[black] border-[1px] border-[black]'/>
            <Button variant={'transparentbtn'} className='w-full xsmall:w-auto'>Subscribe</Button>
            </div>
            <p>By subscribing you agree to with our Privacy Policy</p>
          </div>
          </div>




{/* beech wali div */}
<div className=' w-full flex flex-col xsmall:flex-row  gap-10'>

<div className= 'xsmall:w-[250px] h-[40px] inline-block xsmall:block m-auto xsmall:m-0  '>
  <Image src={"/images/logo.png"} alt={'logo'} height={30} width={130}></Image>
</div>

  {footerLinks.map((item , index)=>{
    return (
      <div className='flex  flex-col gap-4 w-[250px] m-auto xsmall:text-start' key={index}>
      <h4 className='text-[16px] leading-[24px] font-semibold '>{item.heading}</h4>
      <ul className='flex  flex-col gap-2'>
      <li><Link  href="#!">{item.l1}</Link></li>
      <li><Link href="#!">{item.l2}</Link></li>
      <li><Link href="#!">{item.l3}</Link></li>
      <li><Link href="#!">{item.l4}</Link></li>
      <li><Link href="#!">{item.l5}</Link></li>
      </ul>
    </div>
    
    )


  })}
</div>


{/* bottom div */}
   <div className='w-full 
   h-auto 
   xsmall:h-[57px]
    border-t-[1px]
     border-[black] 
     pt-[32px] xsmall:pt-0
     flex 
      xsmall:flex-row  flex-col 
      justify-between
       items-end
       text-center'>

<div className=' flex xsmall:flex-row flex-col gap-[24px] '>
<p>2023 Ddsgnr. All right reserved.</p>

    <div  className=' flex gap-[24px]'>
     <Link href={"#!"}>Privacy Policy</Link>
    <Link href={"#!"}>Terms of Service</Link>
    <Link href={"#!"}>Cookies Settings</Link>
    </div>
   </div>



   <div className="flex justify-center items-center gap-[12px] m-auto mt-[24px] xsmall:mt-0 xsmall:m-0 ">
             <FaFacebookF size={'24px'}/>
             <FaInstagram  size={'24px'} />
             <FaTwitter   size={'24px'}/>
             <FaLinkedin  size={'24px'} />

        </div>
   </div>





    </footer>


    </>
  )
}

export default Footer