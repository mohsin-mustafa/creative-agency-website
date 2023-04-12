import React from 'react'
import cardlogo1 from "../../../assests/cardlogo1.svg";
import cardlogo2 from "../../../assests/cardlogo2.svg";
import cardlogo3 from "../../../assests/cardlogo3.svg";
import cardlogo4 from "../../../assests/cardlogo4.svg";
import cardlogo5 from "../../../assests/cardlogo5.svg";
import cardlogo6 from "../../../assests/cardlogo6.svg";
import arrowIcon from "../../../assests/arrowIcon.svg";


import "./ourServicesCard.css";



export default function OurServicesCard() {
  return (
    <div className=' serviceBgImage  bg-no-repeat bg-center bg-cover  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[60px] gap-11 mx-7 md:mx-[160px]'>
      <div className='shadow-custom-box-shadow md:w-[352px]  grid justify-items-center bg-[#4C40F7] hover:bg-cyan-500 cursor-pointer rounded-[20px] drop-shadow-2xl '>
        <img src={cardlogo1} alt="" className='mt-11' />
        <p className='mt-[14px] text-[#FFFFFF] font-[Poppins] font-semibold text-[20px] leading-7 '>Ideate</p>
        <p className='mt-4 mx-[30px] text-[#FFFFFF] font-[Poppins] font-normal text-[18px] leading-8'>We help you develop creative ideas so that your business can grow more rapidly</p>
        <img src={arrowIcon} alt="" className='my-11' />
      </div>

      <div className='shadow-custom-box-shadow md:w-[352px] grid justify-items-center bg-[#ECECEC] hover:bg-red-500 cursor-pointer rounded-[20px]  '>
        <img src={cardlogo2} alt="" className='mt-11' />
        <p className='mt-[14px] text-[#111029] font-[Poppins] font-semibold text-[20px] leading-7' >Design</p>
        <p className='mt-4 mx-[30px] text-[#FFFFFF] font-[Poppins] font-normal text-[18px] leading-8'>We provide services with the best designs than our designer team for your business</p>
        <img src={arrowIcon} alt="" className='my-11' />

      </div>

      <div className='shadow-custom-box-shadow md:w-[352px] grid justify-items-center bg-[#ECECEC] hover:bg-green-400 cursor-pointer rounded-[20px]'>
        <img src={cardlogo3} alt="" className='mt-11' />
        <p className='mt-[14px] text-[#111029] font-[Poppins] font-semibold text-[20px] leading-7 '>Web Development</p>
        <p className='mt-4 mx-[30px] text-[#FFFFFF] font-[Poppins] font-normal text-[18px] leading-8'>We help develop company websites to be more professional and attractive</p>
        <img src={arrowIcon} alt="" className='my-11' />

      </div>


      <div className='shadow-custom-box-shadow grid justify-items-center bg-[#ECECEC] hover:bg-yellow-300 cursor-pointer  rounded-[20px] '>
        <img src={cardlogo4} alt="" className='mt-11' />
        <p className='mt-[14px] text-[#111029] font-[Poppins] font-semibold text-[20px] leading-7'>App Development</p>
        <p className='mt-4 mx-[30px] text-[#FFFFFF] font-[Poppins] font-normal text-[18px] leading-8'>We help develop company mobile apps to be more professional and attractive</p>
        <img src={arrowIcon} alt="" className='my-11' />

      </div>

      <div className='shadow-custom-box-shadow grid justify-items-center bg-[#ECECEC] hover:bg-blue-500 cursor-pointer rounded-[20px]'>
        <img src={cardlogo5} alt="" className='mt-11' />
        <p className='mt-[14px] text-[#111029] font-[Poppins] font-semibold text-[20px] leading-7'>Business Growth</p>
        <p className='mt-4 mx-[30px] text-[#FFFFFF] font-[Poppins] font-normal text-[18px] leading-8'>We also provide services by providing input for your business growth</p>
        <img src={arrowIcon} alt="" className='my-11' />

      </div>


      <div className='shadow-custom-box-shadow grid justify-items-center bg-[#ECECEC] hover:bg-orange-400 cursor-pointer  rounded-[20px]'>
        <img src={cardlogo6} alt="" className='mt-11' />
        <p className='mt-[14px] text-[#111029] font-[Poppins] font-semibold text-[20px] leading-7'>Digital marketing</p>
        <p className='mt-4 mx-[30px] text-[#FFFFFF] font-[Poppins] font-normal text-[18px] leading-8'>We also help you market your products through an online marketplace</p>
        <img src={arrowIcon} alt="" className='my-11' />

      </div>
    </div>
  );
};
