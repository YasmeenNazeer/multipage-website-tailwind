import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Hero() {
  return (
    <>
      <section>
        {/* top div  */}

        <div
          className="
           flex
             flex-col  xsmall:flex-row"
        >
          {/* left div  */}
          <div
            className="   
            w-full xsmall:w-1/2
            py-[64px] xsmall:py-[250px]
            px-[24px] xsmall:px-[80px]
            flex 
            justify-center 
            items-center"
          >
            <div className=" w-full ">
              <h1
                className="

              text-[40px]  xsmall:text-[56px] 
               leading-[48px] xsmall:leading-[67px]
                 font-bold
                mb-[24px]"
              >
                Learn new skills online with ease
              </h1>
              <p className="text-[18px] leading-[27px] mb-[40px] ">
                Discover a wide range of courses covering a variety of subjects,
                taught by expert instructors.
              </p>

              <Button className=" mr-[16px]">Start learning now </Button>
              <Button variant={"transparentbtn"}>Explore Courses </Button>
            </div>
          </div>

          {/* right div  */}
          <div className=" 
          w-full xsmall:w-1/2
          h-[390px] xsmall:h-[800px]
           overflow-hidden
           flex 
           justify-center">
            <Image
              src={"/images/main.png"}
              alt="main img"
              width={640}
              height={900}
              className="
               w-[428px]  xsmall:w-[640px] 
                 h-[600px] xsmall:h-[900px]"
            ></Image>
          </div>
        </div>

        {/* bottom div  */}
        <div
          className="
           w-full 
          bg-mainbg
           py-[48px] xsmall:py-[80px] 
           px-[24px]   xsmall:px-[8px] 
             flex 
            flex-col   xsmall:flex-row
            gap-[24px]  xsmall:gap-0
           justify-between
           items-center "
        >
          <div className=" w-[320px]">
            <h5 className="text-[24px] font-bold leading-[33.6px] ">
              Trusted by 2000+ companies <br />
              worldwide.
            </h5>
          </div>

          <div className="
          flex 
          gap-[16px]   xsmall:gap-[19px] 
          overflow-x-auto ">
            <Image
              src={"/images/imge1.png"}
              alt="img1"
              width={124}
              height={38}  
              ></Image>
            <Image
              src={"/images/image2.png"}
              alt="img1"
              width={123.8}
              height={38.52}
            ></Image>
            <Image
              src={"/images/image3.png"}
              alt="img1"
              width={123.8}
              height={38.52}
            ></Image>
            <Image
              src={"/images/image4.png"}
              alt="img1"
              width={123.8}
              height={38.52}
            ></Image>
            <Image
              src={"/images/image5.png"}
              alt="img1"
              width={123.8}
              height={38.52}
            ></Image>
            <Image
              src={"/images/image6.png"}
              alt="img1"
              width={123.8}
              height={38.52}
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
