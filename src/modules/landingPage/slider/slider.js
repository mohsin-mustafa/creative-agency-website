import React from 'react'
import { Carousel } from 'flowbite-react'
import slider from "../../../assests/slider.png";
import sliderImage1 from "../../../assests/slider-image1.jpg";
import sliderImage2 from "../../../assests/slider-image2.jpg";
import sliderImage3 from "../../../assests/slider-image3.jpg";

import sliderarrow1 from "../../../assests/sliderarrow1.svg";
import sliderarrow2 from "../../../assests/sliderarrow2.svg";

export default function Slider() {
    return (
        <div className=' bg-[#FE9602]'>
            <div className="max-w-[100%]  h-56 md:h-[500px] mt-[200px] ">
                {/* <Carousel> */}
                {/* <div className="flex h-full items-center justify-center ">


                        <img src={slider} alt="" />
                    </div>
                    <div className="flex h-full items-center justify-center ">


                        <img src={sliderImage1} alt="" />
                    </div>
                    <div className="flex h-full items-center justify-center ">
                        <img src={sliderImage2} alt="" />
                    </div>
                    <div className="flex h-full items-center justify-center ">
                        <img src={sliderImage3} alt="" />

                    </div>
                    <div className="flex h-full items-center justify-center ">


                        <img src={sliderImage1} alt="" />
                    </div>
                    <div className="flex h-full items-center justify-center ">
                        <img src={sliderImage2} alt="" />
                    </div>
                    <div className="flex h-full items-center justify-center ">
                        <img src={sliderImage3} alt="" />

                    </div> */}


                {/* </Carousel> */}











                <Carousel className=''
                    leftControl={<img src={sliderarrow1} alt="Left arrow" className='mx-auto md:mx-[180px]'  />}
                    rightControl={<img src={sliderarrow2} alt="Right arrow" className='mx-auto md:mx-[180px]' />}
                >
                     <div className="flex h-full items-center justify-center ">


                        <img src={slider} alt="" />
                    </div>

                    <div className="flex h-full items-center justify-center ">


                        <img src={sliderImage1} alt="" />
                    </div>
                    <div className="flex h-full items-center justify-center ">
                        <img src={sliderImage2} alt="" />
                    </div>
                    <div className="flex h-full items-center justify-center ">
                        <img src={sliderImage3} alt="" />

                    </div>
                    <div className="flex h-full items-center justify-center ">


                        <img src={sliderImage1} alt="" />
                    </div>
                    <div className="flex h-full items-center justify-center ">
                        <img src={sliderImage2} alt="" />
                    </div>
                    <div className="flex h-full items-center justify-center ">
                        <img src={sliderImage3} alt="" />

                    </div>
                    
                    
                </Carousel>

            </div>
        </div>
    );
};
