import React from 'react'

import Navbar from '../../components/navbar/navbar';
import NavMenu from '../../components/navbar/navMenu';
import HeroSection from './heroSection/heroSection';

import OurServices from './servicesSection/ourServices';
import OurDocumentation from './documenationSection/ourDocumentation';
import CustomerSatisfaction from './customerSection/CustomerSatisfaction';
import WorkingSpace from './workingSpaceSection/workingSpace';
import GreatCustomer from './companySection/greatCustomer';
import Slider from './slider/slider';
import FrequentlyAskedQuestions from './frequentlyAskedQuestionSection/frequentlyAskedQuestions';
import Testimonial from './testimonialSection/testimonial';
import StartNewProject from '../../components/startNewproject/startNewProject';
import MohsinFooter from '../../components/mohsinFooter/mohsinFooter';
import MohsinButton from '../../components/mohsinButton';




export default function LandingPage() {
  return (
    <div>

      {/* <MohsinButton /> */}

      <Navbar />
      <NavMenu />
      <HeroSection />
      <OurServices />
      <OurDocumentation />
      <CustomerSatisfaction />

      <WorkingSpace />

      <GreatCustomer />
      <Slider />
      <FrequentlyAskedQuestions />
      <Testimonial />
      <StartNewProject />

      <MohsinFooter />

    </div>
  );
};
