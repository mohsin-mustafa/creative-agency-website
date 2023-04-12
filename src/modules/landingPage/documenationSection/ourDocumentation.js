import React from 'react'
import SirNaveed from './sirNaveed';
import "./documentsBgImage.css";


export default function OurDocumentation() {
  return (
    <div className=' documentsBgImge w-[100%] bg-no-repeat  bg-center bg-cover '>
      <div class="container mx-auto mt-[200px] ">
        <div className='text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7'>
          Our Documentation
        </div>

        <div className='text-[#111029] font-[Poppins] font-semibold  text-[42px] leading-[56px] tracking-[-0.1px]'>

          See what our profile is like and how we work for your <br /> business
        </div>
        <SirNaveed />
      </div>
    </div>
  );
};
