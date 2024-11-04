import React from 'react'
import HeroSection from './components/HeroSection';

import VideoSection from './components/VideoSection';
import Promo from './components/Promo';
import HowToGetStarted from './components/HowToGetStarted';
import Features from './components/Feature';
import UseCases from './components/Usecase';
import Testimonials from './components/Testimonial';
import FAQ from './components/FAQ';
import Featured from './components/Featured';
import PromoSection from './components/PromoSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
   
         <HeroSection/>
         <VideoSection/>
         <Promo/>
         <HowToGetStarted/>
         <Features/>
         <UseCases/>
         <Testimonials/>
         <FAQ/>
         <Featured/>
         <PromoSection/>
         <Footer/>
    </>
  )
}

export default App;
