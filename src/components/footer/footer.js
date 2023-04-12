import React from 'react'
import BsFacebook from "../../assests/BsFacebook.svg";
import BsInstagram from "../../assests/BsInstagram.svg";
import BsLinkdin from "../../assests/BsLinkdin.svg";
import BsTwitter from "../../assests/BsTwitter.svg";

export default function Footer() {
    return (

        <div className='flex flex-col md:flex-row justify-between mx-5 lg:mx-[160px] '>
            <div className='flex justify-center items-start mt-11 mb-[60px]'>
                <span class="text-sm  sm:text-center dark:text-gray-400
                       text-[#ABAFC7] font-[Poppins] font-medium  text-[16px] leading-6 ">©2023
                    <a href="#" className="hover:underline"> Creative Agency™</a>
                </span>
            </div>

            <div className='flex justify-center items-start  mt-11 mb-[60px] '>
                <ul className=" flex    text-[#ABAFC7] font-[Poppins] font-medium  text-[16px] leading-6   ">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Works</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">About</a>
                    </li>
                </ul>
            </div>
            <div className='flex   items-start space-x-7 md:space-x-4 mx-auto md:mx-0   mt-0 md:mt-11  mb-[60px]'>
                <a href=""> <img src={BsFacebook} alt="" height={30} width={30} /></a>

                <a href=""><img src={BsInstagram} alt="" height={30} width={30} /></a>

                <a href=""><img src={BsLinkdin} alt="" height={30} width={30} /></a>

                <a href=""><img src={BsTwitter} alt="" height={30} width={30} /> </a>
            </div>
        </div>



    )
}
