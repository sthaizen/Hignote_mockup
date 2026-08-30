import React, { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import SkillPage from './components/SkillPage/SkillPage';
import FounderMessage from './sections/FounderMessage';
import HeroComp from './sections/HeroComp';
import PointOfViewComp from './sections/PointOfViewComp';
import BentoComponent from './sections/BentoComponent';
import TeamComp from './sections/TeamComp';
import PricingComp from './sections/PricingComp';
import InsightsComp from './sections/InsightsComp';
import PlaceholderComp from './sections/PlaceholderComp';
import ReviewsSection from './sections/ReviewsSection';
import CoolSection from './sections/CoolSection';
import ProjectComp from './sections/ProjectComp';
import NewsletterComp from './sections/NewsletterComp';
import OnePlatform from './sections/OnePlatform';
import PicturePoints from './sections/PicturePoints';
import UserFeedback from './sections/UserFeedback';
import ConnectCat from './sections/ConnectCat';
import Installation from './sections/installitation';
import Footer from './sections/Footer';

import NavBar from './components/NavBar';
import Main from './components/main';
import EmptyBento from './components/emptybento';
import TwoBentos from './components/2bentos';

const Home = () => {
  const location = useLocation();
  const lenisRef = useRef();

  useEffect(() => {
    let lenisInstance = null;
    let timer = null;

    const setupLenis = () => {
      lenisInstance = lenisRef.current?.lenis;
      if (lenisInstance) {
        lenisInstance.on('scroll', ScrollTrigger.update);
        ScrollTrigger.refresh();
      } else {
        timer = requestAnimationFrame(setupLenis);
      }
    };

    setupLenis();

    return () => {
      if (timer) cancelAnimationFrame(timer);
      if (lenisInstance) {
        lenisInstance.off('scroll', ScrollTrigger.update);
      }
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      const lenis = lenisRef.current?.lenis;

      if (el) {
        setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(el, { offset: 0, duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
          } else {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
    }
  }, [location.hash]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={true}
      options={{
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5
      }}
      className='relative w-full min-h-screen'
    >

      <div className="relative z-10 bg-transparent shadow-[0_-10px_50px_rgba(0,0,0,0.12)] ">
        <NavBar />
        {/* <FounderMessage /> */}
        <HeroComp />
        <EmptyBento />
        <ReviewsSection />
        <PicturePoints />

        <OnePlatform />
        {/* <CoolSection /> */}
        <UserFeedback />
        {/* <PointOfViewComp /> */}

        {/* <InsightsComp /> */}
        {/* <PlaceholderComp /> */}

        {/* <TeamComp /> */}
        {/* <PricingComp /> */}
        {/* <BentoComponent /> */}
        {/* <NewsletterComp /> */}
        {/* 
        <TwoBentos /> */}
        <ProjectComp />
        {/* <Footer /> */}

      </div>

    </ReactLenis>

  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skill" element={<SkillPage />} />
    </Routes>
  );
}

export default App;