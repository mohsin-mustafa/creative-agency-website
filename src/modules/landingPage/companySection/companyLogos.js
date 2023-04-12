import React from 'react'
import icon1 from "../../../assests/icon1.svg";
import icon2 from "../../../assests/icon2.svg";
import icon3 from "../../../assests/icon3.svg";
import icon4 from "../../../assests/icon4.svg";
import icon5 from "../../../assests/icon5.svg";
import icon6 from "../../../assests/icon6.svg";
import icon7 from "../../../assests/icon7.svg";
import icon8 from "../../../assests/icon8.svg";
import icon9 from "../../../assests/icon9.svg";
import icon10 from "../../../assests/icon10.svg";

export default function CompanyLogos() {
    return (
        <div className='grid place-items-center grid-cols-1 md:grid-cols-5 lg:grid-cols-5 w-[90%] space-x-4 space-y-5 mt-[80px]'>

            <div>    <img src={icon1} alt="" className='mt-5 '/> </div>
            <div>    <img src={icon2} alt="" /></div>
            <div>    <img src={icon3} alt="" /></div>
            <div>    <img src={icon4} alt="" /></div>
            <div>    <img src={icon5} alt="" /></div>
            <div>    <img src={icon6} alt="" /> </div>
            <div>    <img src={icon7} alt="" /></div>
            <div>    <img src={icon8} alt="" /></div>
            <div>    <img src={icon9} alt="" /></div>
            <div>    <img src={icon10} alt="" /></div>
            </div>

    );
};
