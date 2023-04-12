import React from 'react'
import TestimonialCards from './testimonialCards'

export default function Testimonial() {
    return (
        <div class=" md:container md:mx-auto mt-[200px]">
            <div className='text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7'>
                Testimonials
            </div>

            <div className='text-[#111029] font-[Poppins] font-semibold  text-[42px] leading-[56px] tracking-[-0.1px]'>
                Some testimonials from our customers
            </div>
            <TestimonialCards />
        </div>
    );
};
