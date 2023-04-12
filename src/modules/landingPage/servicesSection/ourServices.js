import React from 'react'
import OurServicesCard from "./ourServicesCard";

export default function OurServices() {
  return (
    // <div className='flex justify-center '>

    <div class=" md:container md:mx-auto mt-[120px]">
      <div className='text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7 pb-[10px]'>
        Our Services
      </div>

      <div className='text-[#111029] font-[Poppins] font-semibold  text-[42px] leading-[56px] tracking-[-0.1px]'>

        The various services we provide to make your <br /> business more powerful
      </div>
      <OurServicesCard />
    </div>


    // </div>
  );
};
