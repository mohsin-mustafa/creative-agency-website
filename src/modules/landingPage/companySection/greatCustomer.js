import React from 'react'
import CompanyLogos from './companyLogos';


export default function GreatCustomer() {
  return (
        
<div class=" md:container md:mx-auto mt-[200px]">
      <div className='text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7'>
      Some of Our Great Customers
      </div>

      <div className='text-[#111029] font-[Poppins] font-semibold  text-[42px] leading-[56px] tracking-[-0.1px]'>

      Some of the companies we have worked with
      </div>

      <CompanyLogos />
    </div>

  );
};
