import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BentoComponent = () => {
  const containerRef = useRef(null);

  // --- PARALLAX CONTROLS ---
  // Tweak these values to adjust the scroll effect perfectly to your liking!
  const PARALLAX_SMOOTHNESS = 1; // Higher = more "lag" and smoother. Lower = snaps tightly to scroll.
  const PARALLAX_DISTANCE = 5;    // How far the cards move (in %). e.g., 15 = moves 15% of its height.

  useGSAP(() => {
    // Buttery smooth header reveal
    gsap.fromTo('.bento-header-anim',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1.5, stagger: 0.1, ease: 'expo.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Buttery smooth cards reveal
    gsap.fromTo('.bento-card-anim',
      { opacity: 0, y: 80 },
      {
        opacity: 1, y: 0, duration: 1.8, ease: 'expo.out',
        scrollTrigger: {
          trigger: '.bento-grid-container',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Parallax effect synced with scroll
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      // Cards that start high, move down
      gsap.to('.bento-card-up', {
        yPercent: PARALLAX_DISTANCE,
        ease: 'none',
        scrollTrigger: {
          trigger: '.bento-grid-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: PARALLAX_SMOOTHNESS
        }
      });
      // Cards that start low, move up
      gsap.to('.bento-card-down', {
        yPercent: -PARALLAX_DISTANCE,
        ease: 'none',
        scrollTrigger: {
          trigger: '.bento-grid-container',
          start: 'top bottom',
          end: 'bottom top',
          scrub: PARALLAX_SMOOTHNESS
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-32 px-6 bg-[#f6f6f6] font-['DM_Sans',sans-serif]">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-12">

        {/* Header Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {/* Tag */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 text-[#60646C] text-[13px] font-medium tracking-wide uppercase leading-none md:ml-5 pt-4 bento-header-anim">
              <span className="dot-blink w-1.5 h-1.5 rounded-full bg-[#60646C] shrink-0"></span>
              <span>PROCESS</span>
            </div>
          </div>

          {/* Title and Subtitle */}
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <h2 className="text-[60px] md:text-[80px] leading-[0.9] text-[#000000] tracking-[-0.03em] font-medium mb-6 bento-header-anim">
              SCALABLE DELIVERY
            </h2>
            <p className="max-w-[550px] text-[16px] text-[#60646C] leading-relaxed bento-header-anim">
              We combine identity, clarity, and execution into a structured partnership that removes guesswork and builds momentum from day one.
            </p>
          </div>
        </div>

        {/* Bento Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-20 bento-grid-container">

          {/* Card 01 */}
          <div className="bg-[#0A0A0A] text-white p-6 md:p-7 rounded-xl h-[450px] flex flex-col justify-between mt-0 bento-card-anim bento-card-up">
            <div className="text-left">
              <span className="text-[24px] md:text-[30px] font-medium leading-none opacity mb-2 block">01</span>
              <h4 className="text-[24px] md:text-[30px] font-medium leading-tight">Discovery &amp; Insights</h4>
            </div>
            <p className="text-[#EEEEEE] text-[15px] md:text-[16px] leading-relaxed max-w-[280px] text-left w-full">
              We define direction from psychology, constraints, and business goals — not assumptions
            </p>
          </div>

          {/* Card 02 */}
          <div className="bg-[#ffffff] border border-[#e5e5e7] text-black p-6 md:p-7 rounded-xl h-[450px] flex flex-col justify-between lg:mt-24 bento-card-anim bento-card-down">
            <div className="text-left">
              <span className="text-[24px] md:text-[30px] font-medium leading-none text-[#0a0a0a] mb-2 block">02</span>
              <h4 className="text-[24px] md:text-[30px] font-medium leading-tight">Identity Framework</h4>
            </div>
            <p className="text-[#60646C] text-[15px] md:text-[16px] leading-relaxed max-w-[280px] text-left w-full">
              Strategy becomes a scalable system — naming, messaging, components, narrative, and brand behavior.
            </p>
          </div>

          {/* Card 03 */}
          <div
            className="bg-[#0A0A0A] text-white p-6 md:p-7 rounded-xl h-[450px] flex flex-col justify-between mt-0 relative overflow-hidden bento-card-anim bento-card-up"
          >
            <div className="absolute inset-0 z-0">
              <img src="/card_03_motion_blur.png" alt="Build & Execution" className="w-full h-full object-cover opacity-60 mix-blend-screen" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="text-left">
                <span className="text-[24px] md:text-[30px] font-medium leading-none opacity mb-2 block">03</span>
                <h4 className="text-[24px] md:text-[30px] font-medium leading-tight">Build &amp; Execution</h4>
              </div>
              <p className="text-[#EEEEEE] text-[15px] md:text-[16px] leading-relaxed max-w-[280px] text-left w-full">
                Pages, layouts, interactions, and assets are executed with intentionality — no improvisation mid-project.
              </p>
            </div>
          </div>

          {/* Card 04 */}
          <div className="bg-[#ffffff] border border-[#e5e5e7] text-black p-6 md:p-7 rounded-xl h-[450px] flex flex-col justify-between lg:mt-24 bento-card-anim bento-card-down">
            <div className="text-left">
              <span className="text-[24px] md:text-[30px] font-medium leading-none text-[#0a0a0a] mb-2 block">04</span>
              <h4 className="text-[24px] md:text-[30px] font-medium leading-tight">Optimization &amp; Growth</h4>
            </div>
            <p className="text-[#60646C] text-[15px] md:text-[16px] leading-relaxed max-w-[280px] text-left w-full">
              We refine, extend, and scale — the brand becomes a compounding growth engine rather than a moment in time.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BentoComponent;
