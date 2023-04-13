import React from 'react'
import image1 from "../../../assests/Image1.png";
import image2 from "../../../assests/Image2.png";
import image3 from "../../../assests/Image3.png";
import image4 from "../../../assests/Image4.png";
import image5 from "../../../assests/Image5.png";
import image6 from "../../../assests/Image6.png";


export default function WorkingGallery() {
    return (
        <div className='mx-7 md:mx-[60px] mt-[54px]'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
                <div className='relative'>
                    <img className="h-auto md:h-[523px] w-full md:w-auto rounded-lg" src={image1} alt="" />
                    <h1 className='absolute  sm:text-xs md:text-xl text-[#FFFFFF]  md:top-[450px] left-0 md:left-5'>Front working space</h1>

                </div>
                <div className='relative'>
                    <img className="h-auto md:h-[605px] w-full md:w-auto rounded-lg" src={image2} alt="" />
                    <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF] md:top-[550px]  md:left-5'>Meeting corner</h1>
                </div>


                <div className='relative'>
                    <img className="h-auto md:h-[579px] w-full md:w-auto rounded-lg" src={image3} alt="" />
                    <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF]  md:top-[530px]  md:left-5'>Guest meeting room</h1>
                </div>
                <div className='relative'>
                    <img className="h-auto md:h-[718px] w-full md:w-auto rounded-lg" src={image4} alt="" />
                    <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF] md:top-[660px] md:left-5'>Guest rest room</h1>
                </div>


                <div className='relative'>
                    <img className="h-auto md:h-[718px] w-full md:w-auto rounded-lg " src={image5} alt="" />
                    <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF]    md:top-[660px]  md:left-5'>Single working space</h1>
                </div>
                <div className='relative'>
                    <img className="h-auto md:h-[718px] w-full md:w-auto rounded-lg " src={image6} alt="" />
                    <h1 className='absolute sm:text-xs md:text-xl text-[#FFFFFF]  md:top-[660px]  md:left-5'>Kitchen room</h1>
                </div>





            </div>


        </div>
    );
};
