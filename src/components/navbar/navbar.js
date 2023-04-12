import React, { useState } from "react";
import Logo from "../../assests/logo.png";

import NavMenu from "./navMenu";
import { FcMenu } from "react-icons/fc";
import { CgClose } from "react-icons/cg";
// import {CiDark} from "react-icons/ci";
// import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    let Links = [
        { name1: "Home", link: "/" },
        { name: "Works", link: "/works" },
        { name: "About", link: "/about"  },
        // { name: "Contact me", link: "/" },
    ];


    
     


    return (
        <nav className="container relative my-7 ">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="logo ml-2 sm:ml-14  md:ml-[90px] lg:ml-[125px] scale-150 pt-2">
                    <img src={Logo} alt="" width={48} height={48} />
                </div>
                {/* Menu */}
                <div className="hidden space-x-16 md:flex">
                    {Links.map((link, i) => {
                        return (
                            <li className='md:ml-8  md:my-0 my-7 list-none'>
                                <a href={link.link} className=' text-[#6B6B6B] font-Poppins font-semibold text-[20px] leading-7 hover:text-[#FCE611] duration-500'>{link.name}</a>
                                <a href={link.link} className=' text-[#4C40F7] font-Poppins font-semibold text-[20px] leading-7  hover:text-[#FCE611] duration-500'>{link.name1}</a>

                            </li>

                        );



                    })}
                </div>
                <div>
                {/* <DarkMode  /> */}

                </div>

                {/* CTA Button Contact us*/}
                <div className="hidden lg:block ">
                    <button type="button" className="text-[#FFFFFF]  font-Poppins font-semibold text-[16px] leading-[26px] 
                    px-[35px]  py-[19px] rounded-xl mr-0 md:mr-[160px]
                    bg-[#4C40F7] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300   text-center inline-flex items-center ">
                        Contact us
                        {/* <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                    </button>
                </div>
                {/* Menu Button */}
                <div 
                    className=" cursor-pointer md:hidden "
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {!open ? <FcMenu /> : <CgClose />}
                </div>

                <NavMenu isOpen={open} />
            </div>
        </nav>
    );
};

export default Navbar;

