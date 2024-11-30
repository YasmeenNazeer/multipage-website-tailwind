"use client"
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
 // Assuming you have a Button component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to handle menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu visibility
  };

  return (
    <>
      <header className="w-full flex flex-col gap-[16px]">
        {/* Top div */}
        <div className="w-full h-[54px] bg-mainbg px-[62px] xsmall:flex justify-between items-center hidden border-b-[1px] border-b-[black]">
          <div className="h-[30px] flex justify-center items-center gap-[16px] text-[14px] leading-[150%]">
            <p>Phone Number: 956 742 455 678</p>
            <div className="w-[1px] h-[30px] bg-[#676767]"></div>
            <p>Email:info@ddsgnr.com</p>
          </div>

          {/* Social icons */}
          <div className="flex justify-center items-center gap-[12px]">
            <FaFacebookF size={'24px'} />
            <FaInstagram size={'24px'} />
            <FaTwitter size={'24px'} />
            <FaLinkedin size={'24px'} />
          </div>
        </div>

        {/* Bottom div */}
        <div className="w-full h-[72px] xsmall:px-[64px] xsmall:py-[16px] bg-mainbg flex justify-between items-center px-[24px] py-[12px] border-b-[1px] border-b-[black]">
          <Image src="/images/logo.png" alt="logo img" width={131} height={41} />

          {/* Desktop menu (hidden on small screens) */}
          <div className="xsmall:flex justify-between items-center gap-[32px] hidden">
            <ul className="flex justify-center items-center gap-[52px] text-[16px]">
              <li><Link href={'/'}>Home</Link></li>
              <li><Link href={'/about'}>About Us</Link></li>
              <li><Link href={'/testimonial'}>Testimonial</Link></li>
              <li><Link href={'/achievements'}>Achivements</Link></li>
            </ul>

            <div className="flex justify-center items-center gap-[16px]">
              <Button variant={'transparentbtn'}>Login</Button>
              <Button>Sign Up</Button>
            </div>
          </div>

          {/* Hamburger icon (only shown on small screens) */}
          <IoMdMenu size={24} className="xsmall:block lg:hidden" onClick={toggleMenu} />

        </div>
        
        {/* Hamburger menu (only shown when isMenuOpen is true on small screens) */}
        {isMenuOpen && (
          <div className="w-full bg-slate-100 border-t-[1px] border-t-[black] p-4 xsmall:block lg:hidden">
            <ul className="flex flex-col items-center gap-[16px] text-[16px]">
              <li><Link href={'/'}>Home</Link></li>
              <li><Link href={'/about'}>About Us</Link></li>
              <li><Link href={'/testimonial'}>Testimonial</Link></li>
              <li><Link href={'/achievements'}>Achivements</Link></li>
            </ul>
            
            <div className="flex justify-center items-center gap-[16px] mt-4">
              <Button variant={'transparentbtn'}>Login</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
