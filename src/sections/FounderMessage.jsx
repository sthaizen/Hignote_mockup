import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text }) => {
  return text.split(' ').map((word, wIndex) => (
    <span key={wIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
      {word.split('').map((char, cIndex) => (
        <span key={`${wIndex}-${cIndex}`} className="char text-[#dddddd]">{char}</span>
      ))}
    </span>
  ));
};

const FounderMessage = () => {
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    // Removed GSAP blink dot since we are using CSS dot-blink class instead

    // Text character reveal animation
    gsap.to('.char', {
      color: '#000000',
      stagger: 0.05,
      ease: 'none',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
        end: 'bottom 50%',
        scrub: true,
      }
    });

    // Vertical line draw animation
    gsap.to(lineRef.current, {
      height: '0%',
      ease: 'none',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
        end: 'bottom 50%',
        scrub: true,
      }
    });
  }, { scope: textRef });

  return (
    <section
      className="w-full py-36 md:py-48 min-h-[80vh] px-6 bg-[#f6f6f6] flex flex-col items-center justify-center font-['DM_Sans',sans-serif]"
    >
      <div className="w-full max-w-[720px] mx-auto text-left relative">

        {/* Top Tag & Dot */}
        <div className="flex items-center gap-3 text-[#60646C] text-[13px] font-medium tracking-wide uppercase mb-4 leading-none relative z-10 ml-5">
          <span className="dot-blink w-1.5 h-1.5 rounded-full bg-[#60646C] shrink-0"></span>
          <span>POINT OF VIEW</span>
        </div>

        {/* Relative wrapper for the vertical line to span only the text height */}
        <div className="relative">
          <div className="absolute left-[17px] top-0 bottom-0 w-[1px] bg-[#cbd1d8]"></div>

          {/* Indented Content Section */}
          <div className="pl-8 md:pl-10 pb-2">
            {/* Paragraphs */}
            <div ref={textRef} className="space-y-12">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium leading-[1.2] tracking-[-0.02em]">
                <AnimatedText text="Design systems built to scale, interfaces refined to last, and motion used with purpose, not noise." />
              </h2>

              <p className="text-[28px] sm:text-[36px] md:text-[42px] font-medium leading-[1.2] tracking-[-0.02em]">
                <AnimatedText text="Spacer exists to help teams move faster without sacrificing clarity, craft, or performance." />
              </p>
            </div>
          </div>
        </div>

        {/* Founder Info Block - outside the line wrapper */}
        <div className="pl-4 mt-7  flex items-center gap-3.5">
          <img
            src="/founder_avatar.png"
            alt="Faruk Seckin - Founder & Creative Director"
            className="w-[40px] h-[40px] rounded-[8px] object-cover shadow-sm"
          />
          <div className="flex flex-col justify-center gap-1">
            <h3 className="text-[13px] font-medium text-[#0A0A0A] leading-none">
              Faruk Seckin
            </h3>
            <p className="text-[13px] text-[#60646C] leading-none">
              Founder & Creative Director
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
