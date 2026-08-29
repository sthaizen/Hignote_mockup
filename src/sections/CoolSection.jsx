import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CoolSection = () => {
  const containerRef = useRef(null);
  const bgImageRef = useRef(null);

  useGSAP(() => {
    // 1. Background image entrance animation
    const bgScrollTrigger = {
      trigger: containerRef.current,
      start: 'top 50%',
      toggleActions: 'play none none reverse'
    };

    // Scale animates slowly for 1s
    gsap.fromTo(bgImageRef.current,
      { scale: 1.1 },
      { scale: 1, duration: 1, ease: 'power2.out', scrollTrigger: bgScrollTrigger }
    );

    // Opacity fades in quickly (0.4s)
    gsap.fromTo(bgImageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power1.out', scrollTrigger: bgScrollTrigger }
    );

    // 2. Text Reveal animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 50%',
        toggleActions: 'play none none reverse'
      }
    });

    // All columns and content animate together (from down to up)
    tl.fromTo('.cool-col',
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' },
      0
    );

    // Content slides up from bottom (Left column)
    tl.fromTo('.cool-content',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      0
    );

    // Content slides in from left (Right columns)
    tl.fromTo('.cool-slide-left',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
      0
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#f5f3eb] font-['DM_Sans',sans-serif] px-4 md:px-8 py-20 md:py-32">
      <div className="w-full max-w-[1800px] mx-auto relative rounded-xl overflow-hidden min-h-[600px] flex items-center">

        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={bgImageRef}
            src="/assets/picss/coolman.png"
            alt="Cool Man Background"
            className="w-full h-full object-cover origin-center"
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full p-8 md:p-16 lg:p-10 flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between text-white">

          {/* Left Side (Column 1) */}
          <div className="cool-col w-full lg:w-[45%] flex flex-col justify-center">
            <div className="cool-content flex items-center gap-3 text-white/80 text-[12px] font-medium tracking-widest uppercase mb-6">
              <span className="dot-blink w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
              <span>THE NEXT STEP</span>
            </div>

            <h2 className="cool-content text-[50px] md:text-[64px] lg:text-[75px] leading-[0.95] font-medium tracking-tight mb-8">
              LET'S BUILD<br />MOMENTUM
            </h2>

            <p className="cool-content text-[15px] md:text-[16px] text-white/80  max-w-[380px] mb-3">
              A focused build process that turns ideas into momentum — without chaos, delays, or guesswork.
            </p>

            <div className="cool-content">
              <button className="flex items-center gap-10 bg-[#EEEEEE] text-black pl-[12px] pr-[2px] py-[2px] rounded-md hover:bg-gray-200 transition-colors w-max">
                <span className="text-[13px] font-semibold tracking-wide uppercase">
                  START HERE
                </span>
                <span className="flex items-center justify-center w-6 h-6 rounded-md border border-black/20 bg-transparent text-black">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[45%] flex flex-col md:flex-row gap-12 md:gap-8 pt-4 lg:pt-20">

            {/* Middle Column (Column 2) */}
            <div className="cool-col flex-1 flex flex-col relative md:pl-3">
              {/* Vertical line separator for middle column */}
              <div className="hidden md:block absolute left-0 top-2 bottom-1 w-[1px] bg-white/60"></div>

              <h3 className="cool-slide-left text-[32px] md:text-[42px] font-medium leading-[1.1] tracking-tight mb-0">
                Proven<br />Outcome
              </h3>
              <ul className="cool-slide-left flex flex-col gap-1 text-[16px] text-white/90 mt-12">
                <li>120+ product & brand launches</li>
                <li>97% on-time delivery rate</li>
                <li>+38% average lift in engagement</li>
              </ul>
            </div>

            {/* Right Column (Column 3) */}
            <div className="cool-col flex-1 flex flex-col relative md:pl-8">
              {/* Vertical line separator for right column */}
              <div className="hidden md:block absolute left-0 top-2 bottom-1 w-[1px] bg-white"></div>

              <h3 className="cool-slide-left text-[32px] md:text-[42px] font-medium leading-[1.1] tracking-tight mb-0">
                Engagement<br />Timeline
              </h3>
              <ul className="cool-slide-left flex flex-col gap-1 text-[16px] text-white/90 mt-12">
                <li>24-hour first response</li>
                <li>72-hour kickoff after intro call</li>
                <li>14-day first deliverable window</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CoolSection;
