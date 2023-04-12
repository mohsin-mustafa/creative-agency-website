import React from 'react'
import WorkingGallery from './workingGallery'

export default function WorkingSpace() {
    return (
        <div>

            <div class=" md:container md:mx-auto mt-[200px]">
                <div className='text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7'>
                    Working space
                </div>

                <div className='text-[#111029] font-[Poppins] font-semibold  text-[42px] leading-[56px] tracking-[-0.1px]'>

                    Let’s meet our interior room decoration
                </div>
            </div>
            <WorkingGallery />


        </div>
    );
};
