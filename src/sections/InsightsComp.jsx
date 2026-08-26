import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const InsightsComp = () => {
  const containerRef = useRef(null);

  const insights = [
    {
      id: 1,
      image: '/assets/picss/Man.png',
      date: 'Nov 4, 2025',
      title: 'How Mismatched Branding Silently Damages Trust',
      aspect: 'aspect-[2/1]'
    },
    {
      id: 2,
      image: '/assets/picss/Shoes.png',
      date: 'Oct 17, 2025',
      title: 'When Messaging Outperforms Design in Market Growth',
      aspect: 'aspect-[3/4]'
    },
    {
      id: 3,
      image: '/assets/picss/niga.png',
      date: 'Sep 19, 2025',
      title: 'The Hidden Reason Most Rebrands Collapse Internally',
      aspect: 'aspect-[2/3]'
    },
    {
      id: 4,
      image: '/assets/picss/lion.png',
      date: 'Aug 16, 2025',
      title: 'When A Beautiful Website Fails to Convert',
      aspect: 'aspect-[3/4]'
    }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate Header Elements
    tl.fromTo('.insight-header-anim', 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power3.out' }
    );

    // Animate Cards
    tl.fromTo('.insight-card-anim',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
      "-=0.2"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#f6f6f6] font-['DM_Sans',sans-serif] px-4 md:px-8 py-20 md:py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 md:mb-24">

          {/* Col 1: Label */}
          <div className="col-span-1 insight-header-anim">
            <div className="flex items-center gap-3 text-[#A3A3A3] text-[13px] font-medium tracking-wide uppercase mb-6 md:mb-0">
              <span className="dot-blink w-1.5 h-1.5 rounded-full bg-[#A3A3A3] shrink-0"></span>
              <span>INSIGHTS & NEWS</span>
            </div>
          </div>

          {/* Col 2, 3, 4: Content */}
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <h2 className="insight-header-anim text-[50px] md:text-[72px] leading-[0.95] font-medium text-[#111111] tracking-tight mb-6">
              IDEAS THAT DRIVE<br />GROWTH
            </h2>
            <p className="insight-header-anim text-[15px] text-[#60646C] leading-[1.4] max-w-[520px] font-normal mb-4 w-[500px]">
              We publish insights on identity, digital performance, and creative systems — for founders who want clarity, not noise.
            </p>

            <div className="insight-header-anim">
              <button className="flex items-center justify-between gap-4 bg-[#EBEBEB] pl-5 pr-1.5 py-1.5 rounded-xl hover:bg-[#E0E0E0] transition-colors w-max">
                <span className="text-[13px] font-normal text-[#111111] tracking-wide uppercase">
                  READ ALL ARTICLES
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-md border border-[#070707]/20 bg-transparent text-[#070707]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 items-start">
          {insights.map((item) => (
            <div key={item.id} className="insight-card-anim flex flex-col w-full group cursor-pointer">
              <div className={`w-full ${item.aspect} rounded-[8px] overflow-hidden mb-5 bg-[#E0E0E0]`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
              </div>
              <p className="text-[#828282] text-[13px] font-medium mb-1.5">{item.date}</p>
              <h3 className="text-[#1A1A1A] text-[15px] font-semibold leading-[1.3] pr-4 group-hover:text-[#4A4A4A] transition-colors w-[260px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsComp;
