import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import Image from 'next/image';
import { testimonialDetail } from '@/constant/testimonialDetail';

function Testimonials() {
  return (
    <>
    <section className='w-full px-[24px] xsmall:px-[64px] py-[112px]'>
        <h2 className='h1 mb-[24px]'>Customer testimonials</h2>
        <p className='text-[18px] leading-[27px] mb-[80px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          {/*card div */}
        <div className='w-full flex flex-row gap-[32px] overflow-x-auto xsmall:overflow-x-visible '>

        {testimonialDetail.map((item, index) =>(
               <div className=' shrink-0 grow-0  p-[32px] w-[321px] xsmall:w-[362px] border-[1px] border-[black] 'key={index}>
               <div className='flex gap-1 mb-[24px] '>
               <LiaStarSolid size={20}/>
               <LiaStarSolid size={20} />
               <LiaStarSolid size={20}/>
               <LiaStarSolid size={20}/>
               <LiaStarSolid size={20}/>
               </div>
               <p className='mb-[24px] text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>


             <div className='flex gap-[20px]'>
            <div className='w-[56] h-[56px] rounded-full overflow-hidden'>
             <Image src={item.image} alt={'team3'} width={56} height={56}></Image>
            </div>

          <div className='flex flex-col h-full justify-start mt-[8px]'>
           <p className='text-[16px] leading-[24px] font-semibold'>{item.name}</p>
           <p className='text-[16px] leading-[24px] '>{item.post}</p>
          </div>
   
   
   
           </div>

           </div>
            ))}
              
          
            
 

        </div>



    </section>
    
    
    
    
    
    
    </>
  )
}

export default Testimonials