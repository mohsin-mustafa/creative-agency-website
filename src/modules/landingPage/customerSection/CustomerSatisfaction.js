import React from 'react'
import tick from "../../../assests/tick.svg";
export default function CustomerSatisfaction() {
    return (

        <div className="container mx-auto  flex flex-col    md:flex-row ">
         {/* <div className='flex flex-col md:flex-row '> */}
            {/* left */}
            {/* <div className=" flex flex-col space-y-12 md:w-1/2"> */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2    gap-5 ml-4 md:ml-40   md:mr-20 '>

                <div className=' bg-red-500 rounded-[20px] mt-[155px] '>
                    <p className='mt-[72px] ml-7 mr-10 text-[#4C40F7] font-[Poppins] font-semibold  text-[20px] lg:text-[56px] leading-[72px] tracking-[-0.4px] '>70K+</p>
                    <p className='mt-4  mx-[28px] mb-[72px] text-[#FFFFFF] font-[Poppins] font-normal text-[18px]  leading-8'>We have more than customers</p>
                </div>


                <div className='  bg-[#ECECEC] rounded-[20px] mt-[105px] hover:bg-yellow-300 mb-10 '>
                    <p className='mt-[72px] ml-7 mr-10 text-[#FF6800] font-[Poppins] font-semibold  text-[20px] lg:text-[56px] leading-[72px] tracking-[-0.4px]' >100+</p>
                    <p className='mt-4  mx-[28px] mb-[72px] text-[#FFFFFF] font-[Poppins] font-normal  lg:text-[18px] leading-8 '> Projects we have completed</p>

                </div>
                <div className=' bg-[#ECECEC] rounded-[20px] mt-10 hover:bg-red-300 mb-[105px]'>
                    <p className='mt-[72px] ml-7 mr-10 text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] lg:text-[56px] leading-[72px] tracking-[-0.4px]'>10M+</p>
                    <p className='mt-4  mx-[28px] mb-[72px] text-[#FFFFFF] font-[Poppins] font-normal lg:text-[18px] leading-8'>People who are helped because of our hard work</p>

                </div>






                <div className=' bg-[#ECECEC] rounded-[20px] hover:bg-green-500   mb-[155px]'>
                    <p className='mt-[72px] ml-7 mr-10 text-[#4ADB61] font-[Poppins] font-semibold text-[20px] lg:text-[56px] leading-[72px] tracking-[-0.4px]'>200+</p>
                    <p className='mt-4  mx-[28px] mb-[72px] text-[#FFFFFF] font-[Poppins] font-normal   lg:text-[18px] leading-8' >Support from world-renowned companies</p>

                </div>




            </div>



            {/* right */}
            <div className="flex flex-col md:w-1/2 text-center md:text-left space-y-4 mx-4 md:mx-0">

                <p className='text-[#111029] font-[Poppins] font-semibold text-[56px] leading-[72px]  tracking-[-0.4px] mt-[90px]'>Customer satisfaction is our first priority</p>
                <p className='text-[#6B6B6B] font-[Poppins] font-normal text-[18px] leading-[32px] my-[35px] '>We serve many customers, ranging from small businesses, medium entrepreneurs, to world-renowned companies. Their satisfaction is our pleasure. We strive to provide the best service by:</p>
                <p className='flex'>
                    <img src={tick} alt="" className='pr-[22.8px]' />
                    Provide idea support from our creative team</p>
                <p className='flex'>
                    <img src={tick} alt="" className='pr-[22.8px]' />
                    Provide attractive and professional design services</p>
                <p className='flex'>
                    <img src={tick} alt="" className='pr-[22.8px]' />
                    Support for service 24 hours a week</p>
                <p className='flex'>
                    <img src={tick} alt="" className='pr-[22.8px]' />
                    Helping our customers to grow their business</p>
                <p className='flex max-w-sm '>
                    <img src={tick} alt="" className='pr-[22.8px]' />
                    Provide support to market products through online marketplace </p>

            </div>
        </div>

    );
};
