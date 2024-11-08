import React, { useEffect, Suspense, lazy } from 'react';
import styled, { keyframes } from 'styled-components';
const HeroSection = lazy(() => import('./components/HeroSection'));
const VideoSection = lazy(() => import('./components/VideoSection'));
const Promo = lazy(() => import('./components/Promo'));
const HowToGetStarted = lazy(() => import('./components/HowToGetStarted'));
const Features = lazy(() => import('./components/Feature'));
const UseCases = lazy(() => import('./components/Usecase'));
const Testimonials = lazy(() => import('./components/Testimonial'));
const FAQ = lazy(() => import('./components/FAQ'));
const Featured = lazy(() => import('./components/Featured'));
const PromoSection = lazy(() => import('./components/PromoSection'));
const OurPartners = lazy(() => import('./components/OurPartners'));
const Footer = lazy(() => import('./components/Footer'));

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 0 0.2rem;
  background-color: #003e8a;
  border-radius: 50%;
  animation: ${bounce} 0.6s infinite;
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const AppWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
`;

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        } else {
          entry.target.classList.remove('fade-in-visible');
        }
      });
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <AppWrapper>
      <Suspense
        fallback={
          <LoadingSpinner>
            <Dot />
            <Dot />
            <Dot />
          </LoadingSpinner>
        }
      >
        <div className="fade-in"> {/* Example of fade-in class */}
          <HeroSection />
        </div>
        <div className="fade-in">
          <VideoSection />
        </div>
        <div className="fade-in">
          <Promo />
        </div>
        <div className="fade-in">
          <HowToGetStarted />
        </div>
        <div className="fade-in">
          <Features />
        </div>
        <div className="fade-in">
          <UseCases />
        </div>
        <div className="fade-in">
          <Testimonials />
        </div>
        <div className="fade-in">
          <FAQ />
        </div>
        <div className="fade-in">
          <Featured />
        </div>
        <div className="fade-in">
          <PromoSection />
        </div>
        <div className="fade-in">
          <OurPartners />
        </div>
        <Footer />
      </Suspense>
    </AppWrapper>
  );
};

export default App;
