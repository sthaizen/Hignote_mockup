import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextTestimonial = ({ text }) => {
  return text.split(' ').map((word, wIndex) => (
    <span key={wIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
      {word.split('').map((char, cIndex) => (
        <span key={`${wIndex}-${cIndex}`} className="testim-char text-white opacity-30">{char}</span>
      ))}
    </span>
  ));
};

const TestimonialSection = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);

  useGSAP(() => {
    gsap.to('.testim-char', {
      opacity: 1,
      duration: 0.2,
      stagger: 0.04,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
        end: 'center 50%',
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
      { scale: 1.1 },
      { scale: 1, duration: 1, ease: 'power2.out', scrollTrigger: bgScrollTrigger }
    );

    // Opacity fades in quickly (0.4s)
    gsap.fromTo(bgImageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power1.out', scrollTrigger: bgScrollTrigger }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-[#f6f6f6] font-['DM_Sans',sans-serif] px-4 md:px-8 ">
      <div className="w-full mx-auto bg-[#0a0a0a] rounded-[20px] py-[80px] md:py-[100px] px-5 md:px-12 max-w-[1450px] relative overflow-hidden">

        {/* Background Image with Fade */}
        <div className="absolute top-0 left-0 w-full lg:w-[60%] h-full z-0">
          <img
            ref={bgImageRef}
            src="/googles.png"
            alt="Testimonial Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Desktop right fade */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/0 from-60% to-[#0a0a0a]"></div>
          {/* Mobile bottom fade */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#0a0a0a] from-10% to-[#0a0a0a]/0 to-60%"></div>
        </div>

        {/* Content Container */}
        <div className="w-full max-w-[1350px] mx-auto flex flex-col lg:flex-row relative z-10">

          {/* Spacer for Left Image Area */}
          <div className="hidden lg:block lg:w-[65%]"></div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-[55%] flex flex-col pt-[280px] lg:pt-0">
            <div className="flex items-center text-[#A3A3A3] text-[13px] font-medium tracking-wide uppercase leading-none mb-8">
              <span className="dot-blink w-1.5 h-1.5 rounded-full bg-[#A3A3A3] shrink-0 mr-[14px]"></span>
              <span>TESTIMONIAL</span>
            </div>

            <h2 ref={textRef} className="text-[32px] md:text-[42px] font-normal text-[#FFFFFF] leading-[1.2] mb-8 max-w-[760px] border-l border-[#A3A3A3]/50 pl-5 py-1">
              <AnimatedTextTestimonial text="The redesign gave our product a personality — people finally enjoy using project management." />
            </h2>

            <div className="flex flex-col mb-12 pl-5">
              <p className="text-[16px] font-normal text-[#FFFFFF] leading-[1.4]">
                Visionary HQ
              </p>
              <p className="text-[16px] font-normal text-[#FFFFFF] leading-[1.4]">
                2025
              </p>
            </div>

            <button className="flex items-center justify-between gap-10 bg-[#1A1A1A] pl-1.5 pr-1 py-1 rounded-[7px] hover:bg-[#262626] transition-colors w-max border border-white/5">
              <span className="text-[13px] font-semibold text-white tracking-wide uppercase">
                READ FULL STORY
              </span>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" />
                <path d="M8 16L16 8" />
                <path d="M10 8H16V14" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

const TeamComp = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Faruk Seckin",
      role: "Creative Director",
      description: "Builds brands by removing noise and amplifying truth.",
      image: "/avatar_faruk.png"
    },
    {
      id: 2,
      name: "Elena Markova",
      role: "Product Designer",
      description: "Solves complexity with structure, usability, and motion.",
      image: "/avatar_elena.png"
    },
    {
      id: 3,
      name: "Marco Reyes",
      role: "UX Strategist",
      description: "Converts direction into measurable user behavior.",
      image: "/avatar_marco.png"
    },
    {
      id: 4,
      name: "Adonis Kova",
      role: "Brand Strategist",
      description: "Aligns identity through language, psychology, and narrative.",
      image: "/avatar_adonis.png"
    }
  ];

  return (
    <>
      <section className="w-full bg-[#f6f6f6] font-['DM_Sans',sans-serif] px-4 md:px-8 ">
        <div className="w-full mx-auto bg-[#FAFAFA] rounded-[20px] py-[100px] md:py-[140px] px-5 md:px-6  max-w-[1450px]">
          <div className="w-full max-w-[1350px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12 items-start">

            {/* Left Column: Header */}
            <div className="w-full lg:w-[45%] flex flex-col pt-4">
              <div className="flex items-center gap-3 text-[#60646C] text-[13px] font-medium tracking-wide uppercase leading-none mb-6">
                <span className="dot-blink w-1.5 h-1.5 rounded-full bg-[#60646C] shrink-0"></span>
                <span>MEET THE TEAM</span>
              </div>

              <h2 className="text-[60px] md:text-[80px] leading-[0.9] text-[#000000] tracking-[-0.03em] font-medium mb-6 flex flex-col">
                <span className="block">BUILDERS OF</span>
                <span className="block">SPACER®</span>
              </h2>

              <p className="max-w-[370px] text-[16px] text-[#60646C] leading-relaxed">
                Behind every project is a team obsessed with clarity, system thinking, and long-term growth.
              </p>
            </div>

            {/* Right Column: Grid */}
            <div className="w-full lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-19 pt-4 ml-20 p">
              {teamMembers.map((member) => (
                <figure key={member.id} className="flex flex-col border-l border-black/20 pl-6 md:pl-0 relative">
                  <div className="w-[88px] h-[88px] rounded-md overflow-hidden mb-6 ml-5">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <figcaption className="px-[20px] flex flex-col pt-5">
                    <h3 className="text-[25px] font-normal text-[#000000] leading-[1.2]">
                      {member.name}
                    </h3>
                    <p className="text-[14px] font-semibold text-[#60646C] leading-[1.4]">
                      {member.role}
                    </p>
                    <p className="text-[14px] font-medium text-[#60646C] leading-[1.4] max-w-[200px] mt-3">
                      {member.description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>

          </div>
        </div>
      </section>
      <TestimonialSection />
    </>
  );
};

export default TeamComp;
