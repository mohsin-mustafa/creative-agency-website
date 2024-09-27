import React from 'react'
import logo from "../../assests/logo.png";
import footerMapImage from "../../assests/footerMapImage.png";
import footerLine from "../../assests/footerLine.png";
import Footer from '../footer/footer';
import emailIcon from "../../assests/emailIcon.svg";


export default function MohsinFooter() {
  return (

    <div className=' absolute bg-[#00113B] mt-[200px]'>


      <div class="container mx-auto   h-[340px]  bg-[#4C40F7] w-[90%] md:w-[77%] rounded-[20px] relative  -mt-36">
        <div className='text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 pt-16'>
          Get Notified About Project
        </div>

        <div className='text-[#FFFFFF] font-[Poppins] font-semibold  text-3xl md:text-[42px] leading-[56px] tracking-[-0.1px]  pt-4'>
          Subscribe Now
        </div>

        {/* CTA Button Start Now*/}
        <div className='flex justify-center items-center relative'>
          <input type="email" placeholder='Email' className='mt-8 mb-[84px] rounded-lg w-[40%]'></input>
          <div className='absolute '>


            <img src={emailIcon} alt="" className='flex mb-[50px]  py-[27px]  ml-[100px] sm:ml-[180px] md:ml-[210px] lg:ml-[274px]  xl:ml-[374px] ' />
          </div>
        </div>

      </div>


      <div className='grid grid-cols-1 md:grid-cols-3 mx-7 md:mx-[160px] '>

        <div className='flex flex-col justify-start text-center md:text-left '>


          {/* <div className='flex justify-start items-start'> */}
          <a href="/">
            <img src={logo} alt="" className='mt-[70px]' />
          </a>
          {/* </div> */}
          <p className="max-w-[360px] text-[#FFFFFF] text-left font-[Poppins] font-medium  text-[16px] leading-6 mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure  dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>


        </div>





        {/* <div className='justify-start text-left md:text-center mx-9'>
        <div className='justify-start  text-left ml-[123.45px]'>
                  <p className='text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7 mt-20'>Our Office</p>

          <img src={footerMapImage} alt="" className='mt-8 mx-4 md:mx-[100px]' />


          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7 mt-20'>Contact</p>

          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 mt-8'>
            Jl KH Samanhudi <br /> Metro Atom Plaza Bl <br /> AKS 1/11, Dki Jakarta
          </p>
          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 mt-5'>info@yourdomain.com</p>
          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 mt-5'>+62 (0) 000 0000 00</p>

        </div>
        </div> */}


        <div className='justify-start text-left'>

          <p className='text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7 mt-20'>Our Office</p>

          <img src={footerMapImage} alt="" className='sm:max-w-[388px] max-w-xs mt-8' />


        </div>


        {/* <div class="container  px-[100px]  ">
          <div class="justify-start text-left  md:text-right md:flex lg:items-center  ">
            <div class="order-last  mb-6  md:mb-0  max-w-md">
              <p className='text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7 mt-20'>Our Office</p>
              <img src={footerMapImage} alt="" className='mt-8 mx-4 md:mx-[100px]' />


            </div>

          </div>
        </div> */}



        {/* <div class="container      "> */}
        <div class="flex justify-start text-left  md:text-left md:flex items-start lg:items-center  mx-2 md:mx-[100px]">
          <div class="order-last  mb-6  md:mb-0  max-w-md">
            <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7 mt-20 md:mt-20 lg:mt-0 xl:mt-8'>Contact</p>
            <p class="text-[#EEEEEE] font-Poppins font-[Poppins] text-[16px] leading-[30px] tracking-[4%] mt-8">

              Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta

            </p>

            <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 mt-5'>info@yourdomain.com</p>
            <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 mt-5'>+62 (0) 000 0000 00</p>

          </div>

        </div>
        {/* </div> */}


      </div>





      {/* Custom Create but not working */}
      {/* <div className='flex flex-col md:flex-row  justify-between px-3 md:px-[160px]  text-left mt-20'>

        <div className=''>logo
          <a href="/">
            <img src={logo} alt="" className='scale-150' height={48} width={48} />
          </a>
          <p className=' text-[#FFFFFF] text-left font-[Poppins] font-medium  text-[16px] leading-6 mt-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eaque dignissimos, unde vitae animi explicabo ipsum quisquam rem numquam quasi quae neque consequuntur illo aspernatur quibusdam quis maiores, saepe mollitia.</p>
        </div>
        <div className='mt-8 mx-4 md:mx-[100px]'>Our Office
          <p className=' text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7 '>Our Office</p>
          <img src={footerMapImage} alt="" className='mt-8 mx-4 md:mx-[100px]' />


        </div>
        <div className='mx-2 md:mx-[100px]'>Contact
          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-semibold  text-[20px] leading-7  '>Contact</p>
          <p class="text-[#EEEEEE] font-Poppins font-[Poppins] text-[16px] leading-[30px] tracking-[4%] mt-8">

            Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta

          </p>

          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 mt-5'>info@yourdomain.com</p>
          <p className='max-w-sm text-[#FFFFFF] font-[Poppins] font-medium  text-[16px] leading-6 mt-5'>+62 (0) 000 0000 00</p>
        </div>

      </div> */}







      <div className='mx-[160px] mt-11'>

        <img src={footerLine} alt="" className=' w-screen' />
      </div>


      <Footer />
    </div>

  );
};
