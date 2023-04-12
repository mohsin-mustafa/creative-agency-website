import React from 'react'
// import "./StartNewProject.css";





export default function StartNewProject() {
    return (

        <div className='footerBgImg max-w-[100%] bg-no-repeat  bg-right-top bg-contain  '>
            <div class="container  mx-auto   mt-[200px] mb-[200px] h-[340px]  bg-[#FFCC00] w-[90%] md:w-[77%] rounded-[20px] ">
                <div className='text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 pt-16'>
                    Are You Ready mm
                </div>

                <div className='text-[#FFFFFF] font-[Poppins] font-semibold  text-3xl md:text-[42px] leading-[56px] tracking-[-0.1px]  pt-4'>
                    Start a New Project
                </div>

                {/* CTA Button Start Now*/}
                <div className=" ">
                    <button type="button" className="text-[#FFFFFF] bg-[#4C40F7] mt-8 mb-[84px] hover:bg-[#4C40F7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-xl text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Start Now
                        <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

            </div>























        </div>


    )
}
