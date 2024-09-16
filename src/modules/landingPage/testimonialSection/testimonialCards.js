import React from 'react'
// import { Card } from 'flowbite-react';
import testimonial1 from "../../../assests/testimonial1.png";
import testimonial2 from "../../../assests/testimonial2.png";
import testimonial3 from "../../../assests/testimonial3.png";
import testimonial4 from "../../../assests/testimonial4.png";
import testimonial5 from "../../../assests/testimonial5.png";
import testimonial6 from "../../../assests/testimonial6.png";
import star from "../../../assests/star.svg";

export default function TestimonialCards() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11  mx-7 md:mx-[60px]  mt-14'>
            {/* Grid 1 */}
            <div className=" bg-[#F9F9FD] rounded-[20px] mb-[60px] hover:bg-cyan-500">


                <div className="flex flex-col items-center pb-10  ">
                    <img
                        className=" h-24 w-24 rounded-full -mt-5 scale-150"
                        src={testimonial1}
                        alt="Bonnie image" />

                    <h1 className='mb-2  text-[#111029] font-[Poppins] font-semibold text-2xl '>  Ronald Richards</h1>
                    <h2 className=" text-[#ABAFC7]  font-[Poppins] font-medium  text-base">   Google inc.</h2>

                    <div className="mt-4 flex space-x-3 lg:mt-6">                                                 { /* text-['18px']  */ }
 
                        <p className="cursor-pointer flex items-center rounded-lg   py-2 max-w-xs px-8 text-center text-[#70798B] font-[Poppins] font-normal text-[18px] leading-8 hover:bg-yellow-200"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod  tempor incididunt.
                        </p>
                    </div>
                    <div className='flex py-6 space-x-1'>

                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>

            {/* Grid 2 */}
            <div className=" bg-green-300 rounded-[20px] mb-[60px] hover:bg-red-500">


                <div className="flex flex-col items-center pb-10  ">
                    <img
                        className="mb-3 h-24 w-24 rounded-full -mt-10"
                        src={testimonial2}
                        alt="Bonnie image" />

                    <h1 className='mb-2  text-[#111029] font-[Poppins] font-semibold text-2xl '> Guy Hawkins</h1>
                    <h2 className=" text-[#ABAFC7]  font-[Poppins] font-medium  text-base">  Paypal inc.</h2>

                    <div className="mt-4 flex space-x-3 lg:mt-6">

                        <p className="cursor-pointer flex items-center rounded-lg   py-2 max-w-xs px-8 text-center text-[#70798B] font-[Poppins] font-normal text-[18px] leading-8 hover:bg-yellow-200"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod  tempor incididunt.
                        </p>
                    </div>
                    <div className='flex py-6 space-x-1'>

                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
            {/* Grid 3 */}
            <div className=" bg-green-300 rounded-[20px] mb-[60px] hover:bg-pink-400" >


                <div className="flex flex-col items-center pb-10  ">
                    <img
                        className="mb-3 h-24 w-24 rounded-full -mt-10"
                        src={testimonial3}
                        alt="Bonnie image" />

                    <h1 className='mb-2  text-[#111029] font-[Poppins] font-semibold text-2xl '>  Kristin Watson</h1>
                    <h2 className=" text-[#ABAFC7]  font-[Poppins] font-medium  text-base">   Microsoft inc.</h2>

                    <div className="mt-4 flex space-x-3 lg:mt-6">

                        <p className="cursor-pointer flex items-center rounded-lg   py-2 max-w-xs px-8 text-center text-[#70798B] font-[Poppins] font-normal text-[18px] leading-8 hover:bg-yellow-200"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod  tempor incididunt.
                        </p>
                    </div>
                    <div className='flex py-6 space-x-1'>

                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
            {/* Grid 4 */}
            <div className=" bg-green-300 rounded-[20px] mb-[60px] hover:bg-yellow-300 ">


                <div className="flex flex-col items-center pb-10  ">
                    <img
                        className="mb-3 h-24 w-24 rounded-full -mt-10"
                        src={testimonial4}
                        alt="Bonnie image" />

                    <h1 className='mb-2  text-[#111029] font-[Poppins] font-semibold text-2xl '> Robert Fox</h1>
                    <h2 className=" text-[#ABAFC7]  font-[Poppins] font-medium  text-base">Facebook inc.</h2>

                    <div className="mt-4 flex space-x-3 lg:mt-6">

                        <p className="cursor-pointer flex items-center rounded-lg   py-2 max-w-xs px-8 text-center text-[#70798B] font-[Poppins] font-normal text-[18px] leading-8 hover:bg-yellow-200"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod  tempor incididunt.
                        </p>
                    </div>
                    <div className='flex py-6 space-x-1'>

                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>


            {/* Grid 5 */}
            <div className=" bg-green-300 rounded-[20px] mb-[60px] hover:bg-blue-500">


                <div className="flex flex-col items-center pb-10  ">
                    <img
                        className="mb-3 h-24 w-24 rounded-full -mt-10"
                        src={testimonial5}
                        alt="Bonnie image" />

                    <h1 className='mb-2  text-[#111029] font-[Poppins] font-semibold text-2xl '> Savannah Nguyen</h1>
                    <h2 className=" text-[#ABAFC7]  font-[Poppins] font-medium  text-base">   Twitter inc.</h2>

                    <div className="mt-4 flex space-x-3 lg:mt-6">

                        <p className="cursor-pointer flex items-center rounded-lg   py-2 max-w-xs px-8 text-center text-[#70798B] font-[Poppins] font-normal text-[18px] leading-8 hover:bg-yellow-200"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod  tempor incididunt.
                        </p>
                    </div>
                    <div className='flex py-6 space-x-1'>

                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
            {/* Grid 6 */}
            <div className=" bg-green-300 rounded-[20px] mb-[60px] hover:bg-orange-400">


                <div className="flex flex-col items-center pb-10  ">
                    <img
                        className="mb-3 h-24 w-24 rounded-full -mt-10"
                        src={testimonial6}
                        alt="Bonnie image" />

                    <h1 className='mb-2  text-[#111029] font-[Poppins] font-semibold text-2xl '>  Courtney Henry </h1>
                    <h2 className=" text-[#ABAFC7]  font-[Poppins] font-medium  text-base">  Apple inc.</h2>

                    <div className="mt-4 flex space-x-3 lg:mt-6">

                        <p className="cursor-pointer flex items-center rounded-lg   py-2 max-w-xs px-8 text-center text-[#70798B] font-[Poppins] font-normal text-[18px] leading-8 hover:bg-yellow-200"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod  tempor incididunt.
                        </p>
                    </div>
                    <div className='flex py-6 space-x-1'>

                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>





        </div>

    );
};
