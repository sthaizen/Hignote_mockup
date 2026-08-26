import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const PlaceholderComp = () => {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const overlayRef = useRef(null);
  const textMarqueeRef = useRef(null);

  useGSAP(() => {
    // Continuous marquee animation for background text
    gsap.to(textMarqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 35,
      repeat: -1,
    });

    // ScrollTrigger animation for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=70%", // Shorter scroll distance makes the animation faster
        pin: true,
        scrub: true, // true makes it perfectly snappy and locks to scroll without delay
      }
    });

    // 1. Scale up the image container
    tl.to(imageContainerRef.current, {
      width: "100%",
      height: "930px",
      borderRadius: "10px",
      duration: 1,
      ease: "power2.inOut"
    });

    // 2. Fade in the overlay with text details
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.2,
      ease: "power2.inOut"
    }, "-=0.15"); // Faster fade at the very end of the scaling

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-[#f6f6f6]">
      <div className="relative w-full max-w-[1450px] h-screen overflow-hidden flex items-center justify-center mx-auto">

        {/* Background Text Marquee with Fade Edges */}
        <div
          className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none z-0"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div
            ref={textMarqueeRef}
            className="whitespace-nowrap text-[80px] font-light tracking-tight text-[#1a1a1a] flex"
            style={{ width: "fit-content" }}
          >
            {/* Duplicate text for seamless loop */}
            <span className="pr-8">VISIONARY • VISIONARY • VISIONARY • VISIONARY • VISIONARY • </span>
            <span className="pr-8">VISIONARY • VISIONARY • VISIONARY • VISIONARY • VISIONARY • </span>
          </div>
        </div>

        {/* Center Image */}
        <div
          ref={imageContainerRef}
          className="relative z-10 w-[50vw] h-[60vh] rounded-xl overflow-hidden "
          style={{ willChange: "width, height, border-radius" }}
        >
          <img
            src="/assets/picss/neck.png"
            alt="Visionary"
            className="w-full h-full object-cover"
          />

          {/* Overlay (Appears on Scroll) */}
          <div
            ref={overlayRef}
            className="absolute inset-4 md:inset-5 lg:inset-4 bg-black/50 rounded-xl text-white p-8 md:p-12 lg:p-10 flex flex-col justify-between opacity-0 overflow-hidden"
          >
            {/* Top Content */}
            <div className="max-w-2xl mt-4">
              <p className="text-[10px] md:text-[12px] font-normal tracking-widest uppercase mb-4 text-white/80">Featured Case</p>
              <h2 className="text-[48px] md:text-[72px] lg:text-[75px] font-medium tracking-tighter mb-6 leading-none">VISIONARY</h2>
              <p className="text-[16px] md:text-[15px] font-light leading-snug max-w-xl text-white/90 w-[500px]">
                Project management platform for creative teams with an expressive and human-centered interface.
              </p>
            </div>

            {/* Bottom Content */}
            <div className="flex justify-end w-full mt-auto mb-4">
              <div className="flex flex-col gap-8 md:gap-0">
                {/* Columns */}
                <div className="flex gap-12 md:gap-54">
                  <div className="flex flex-col gap-0">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white/70">Client:</span>
                    <span className="text-[14px] md:text-[14px] font-normal">Visionary HQ</span>
                  </div>
                  <div className="flex flex-col gap-0">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white/70">Year:</span>
                    <span className="text-[14px] md:text-[14px] font-normal">2025</span>
                  </div>
                  <div className="flex flex-col gap-0">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white/70">Category:</span>
                    <span className="text-[14px] md:text-[14px] font-normal">Product Design</span>
                  </div>
                </div>

                {/* Button */}
                <div>
                  <button className="bg-white text-black px-2 py-1 rounded-md flex items-center gap-9 font-semibold hover:bg-gray-200 transition-colors w-fit mt-5">
                    <span className="text-[11px] tracking-wide uppercase font-semibold">View Case Study</span>
                    <span className="w-6 h-6 rounded-md border border-black flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7"></path>
                        <path d="M7 7h10v10"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderComp;
