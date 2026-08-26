import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextPOV = ({ text }) => {
  return text.split(' ').map((word, wIndex) => (
    <span key={wIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
      {word.split('').map((char, cIndex) => (
        <span key={`${wIndex}-${cIndex}`} className="pov-char text-white opacity-30">{char}</span>
      ))}
    </span>
  ));
};

const PointOfViewComp = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const bgImageRef = useRef(null);

  useGSAP(() => {
    gsap.to('.pov-char', {
      opacity: 1,
      duration: 0.2, // slightly longer fade per character for a smoother look
      stagger: 0.04, // slightly slower stagger
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
        end: 'center 50%', // extend the scroll distance to slow down the overall pacing
        scrub: true,
      }
    });

    // Background image entrance animation
    const bgScrollTrigger = {
      trigger: sectionRef.current,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    };

    // Scale animates slowly for 1.5s
    gsap.fromTo(bgImageRef.current,
      { scale: 1.3 },
      { scale: 1, duration: 1, ease: 'power2.out', scrollTrigger: bgScrollTrigger }
    );

    // Opacity fades in quickly (0.4s)
    gsap.fromTo(bgImageRef.current,
      { opacity: 0 },
      { opacity: 0.5, duration: 0.4, ease: 'power1.out', scrollTrigger: bgScrollTrigger }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full px-4 md:px-8 py-16 font-['DM_Sans',sans-serif] bg-[#f6f6f6]">
      <div className="w-full max-w-[1400px] mx-auto rounded-[14px] overflow-hidden relative min-h-[600px] lg:min-h-[650px] flex items-center justify-center p-8 md:p-16">

        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
          {/* Note: Save the image you provided as 'face.png' in the public folder */}
          <img
            ref={bgImageRef}
            src="/assets/backgrounds/face.png"
            alt="Design Built On Truth"
            className="w-full h-full object-cover opacity-50"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)';
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-fit max-w-[775px] mx-auto text-white">
          <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.1em] uppercase mb-6 md:mb-8 text-white/90">
            <span className="w-1 h-1 rounded-full bg-white shrink-0"></span>
            <span>POINT OF VIEW</span>
          </div>

          <h2 className="text-[50px] md:text-[70px] leading-[0.95] font-medium tracking-tight mb-8 md:mb-10">
            DESIGN BUILT ON <br />
            TRUTH
          </h2>

          <div className="border-l-[1px] border-white pl-[10px] mb-8">
            <p ref={textRef} className="text-[28px] md:text-[32px] leading-[1.2] font-medium text-white w-[450px]">
              <AnimatedTextPOV text="Aesthetics don't win markets, clarity and repeatability do. Design just expresses them." />
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="/avatar_faruk.png"
              alt="Faruk Seckin"
              className="w-10 h-10 rounded-[8px] object-cover bg-white/10"
            />
            <div>
              <h4 className="text-[15px] font-semibold text-white leading-tight">Faruk Seckin</h4>
              <p className="text-[13px] text-white/70 font-medium mt-0.5">Founder & Creative Director</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PointOfViewComp;
