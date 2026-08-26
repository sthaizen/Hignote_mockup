import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HeroComp = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Text moves up faster than normal scroll
    gsap.to('.hero-text-parallax', {
      y: -300,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Image moves slower than normal scroll (creates depth)
    gsap.to('.hero-img-parallax', {
      y: 150,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#f6f6f6] font-['DM_Sans',sans-serif] overflow-hidden">

      {/* Background Image (Vertical Strip) */}
      <div className="absolute left-[28%] top-0 w-[22%] h-full z-0 hero-img-parallax">
        <img
          src="/assets/picss/hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
          style={{ objectPosition: '55% 90%' }} // <-- Change these values (X% Y%) to pan/move the image inside its container
        />
        {/* Bottom fade gradient */}
        <div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#f6f6f6] to-transparent pointer-events-none"
          style={{ height: '33%', opacity: 1 }} // <-- Change height (distance of fade) and opacity here
        ></div>
      </div>

      {/* Difference Layer for Large Typography */}
      <div className="absolute inset-0 z-10 pointer-events-none mix-blend-difference text-white flex flex-col justify-start pt-[2vh] md:pt-[3vh] px-18 md:px-30 hero-text-parallax">
        <h1 className="text-[100px] md:text-[160px] lg:text-[190px] leading-[0.85] tracking-tighter font-medium -ml-2">
          SPACER<br />STUDIOS<span className="text-[60px] md:text-[150px] align-top relative top-[20px] md:top-[0px] ml-2">®</span>
        </h1>
        <h4 className="text-[20px] md:text-[25px] leading-[1.2] mt-12 max-w-[585px]">
          Every service built to connect identity,<br />
          visibility, and long-term growth.
        </h4>
      </div>

      {/* Standard Layer (Foreground Elements) */}
      <div className="absolute inset-0 z-20 pointer-events-none p-8 md:p-12 hero-text-parallax">

        {/* Bottom Left: Location/Time */}
        <div className="absolute bottom-10 left-10 pointer-events-auto px-15">
          <div className="text-[12px] text-gray-500 font-medium leading-[1.4]">
            Dubai, UAE<br />
            10:11:56 AM
          </div>
        </div>

        {/* Top Right: Menu Button */}
        <div className="absolute top-10 right-10 pointer-events-auto">

        </div>

        {/* Right Column: Text & CTA */}
        <div className="absolute right-[15%] top-[25%] bottom-10 flex flex-col justify-between pointer-events-auto mt-20 mr-15">

          <div className="text-[11px] md:text-[12px] text-gray-500 font-medium leading-[1.4]">
            Identity<br />engineered
          </div>

          <div className="text-[11px] md:text-[12px] text-gray-500 font-medium leading-[1.4]">
            Visual<br />performance
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[16px] text-[#0A0A0A] font-medium leading-[1.3] max-w-[195px]">
              Let's build something<br />that actually stands out.
            </p>
            <button className="flex items-center justify-between w-[195px] h-[28px] bg-[#232324] text-white pl-[12px] pr-[4px] rounded-[5px] hover:bg-black transition-colors group">
              <span className="text-[13px] font-normal tracking-wide uppercase mr-4">
                BOOK A CALL
              </span>
              <span className="flex items-center justify-center w-6 h-6 rounded-[8px] border border-white bg-transparent text-white/70 group-hover:bg-white/10 transition-colors">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroComp;
