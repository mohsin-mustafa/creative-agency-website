import React from 'react'
// import heroImage from "../../../assests/heroImage.png";
import GetStartedButton from './getStartedButton';
import "./heroBgImage.css";
// import heroImage from "../../../assests/heroImage.png";

export default function HeroSection() {
  return (

    <div class=" mx-0 flex flex-col-reverse  items-start mt-0 pt-0      md:flex-row ">
 
      {/* Left   */} 
      <div className=' flex flex-col items-start heroBgImage  bg-right-top bg-cover  -mt-[80px] bg-no-repeat w-screen h-screen  '>

        <div className='pt-[70px] flex flex-col'>
        <p className=' pt-[113px] text-[#111029] font-[Poppins] font-semibold text-[56px] leading-[72px] tracking-[-0.4px] text-left ' >
          Make your business


        </p>
        <p className='text-[#FF6800] font-[Poppins] font-semibold text-[56px] leading-[72px] tracking-[-0.4px] text-left'>
          more powerful
        </p>
        <p className='text-[#111029] font-[Poppins] font-semibold text-[56px] leading-[72px] tracking-[-0.4px] text-left'>
          with us
        </p>


        <p className='text-[#6B6B6B] font-[Poppins] font-normal text-[18px] leading-[32px] tracking-[-0.4px] text-left'>
          We provide various services to make <br /> your business
          grow and get bigger.  Your <br /> satisfaction is our first priority.
        </p>

        <div className='flex  justify-start md:justify-start mt-6 '>
          <GetStartedButton />

        </div>
        </div>

      </div>

      {/* Right */}
      {/* <div className=' flex justify-end  '>
        <img src={heroImage} alt="" className='w-[100%]  ' />



      </div> */}






    </div>





  );
};
