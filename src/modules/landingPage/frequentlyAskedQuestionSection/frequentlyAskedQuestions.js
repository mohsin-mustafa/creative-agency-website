import React from 'react'
import FrequentlyAskedQuestionsAccordion from './frequentlyAskedQuestionsAccordion';
import "./accordionBgImage.css";

export default function FrequentlyAskedQuestions() {
    return (
        <div className='accordionBgimage w-[100%] bg-no-repeat  bg-center bg-cover '>

        <div class=" md:container md:mx-auto mt-[200px]  ">
            <div className='text-[#FF2D59] font-[Poppins] font-semibold  text-[20px] leading-7'>
                Frequently Ask Question
            </div>

            <div className='text-[#111029] font-[Poppins] font-semibold  text-[42px] leading-[56px] tracking-[-0.1px]'>

                Some of our frequently asked questions
            </div>

            <FrequentlyAskedQuestionsAccordion />

        </div>
        </div>


    )
}
