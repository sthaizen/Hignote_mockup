import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Plus } from 'lucide-react';
import pricingData from '../data/price.json';

gsap.registerPlugin(ScrollTrigger);

const AccordionItem = ({ plan, isOpen, toggleAccordion }) => {
  const contentRef = useRef(null);
  const innerContentRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        duration: 0.6,
        ease: 'expo.inOut'
      });
      gsap.to(innerContentRef.current, {
        opacity: 1,
        duration: 0.6,
        delay: 0.1,
        ease: 'power2.out'
      });
      gsap.to(iconRef.current, {
        rotation: 45,
        x: -10,
        y: 4,
        duration: 0.6,
        ease: 'expo.inOut'
      });
      gsap.to(textRef.current, {
        x: 10,
        y: 4,
        duration: 0.6,
        ease: 'expo.inOut'
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.6,
        ease: 'expo.inOut'
      });
      gsap.to(innerContentRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
      gsap.to(iconRef.current, {
        rotation: 0,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'expo.inOut'
      });
      gsap.to(textRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'expo.inOut'
      });
    }
  }, [isOpen]);

  return (
    <div className={`bg-[#ffffff] rounded-2xl overflow-hidden transition-all duration-500 border border-[#eeeeee] ${isOpen ? 'shadow-sm' : ''}`}>
      {/* Header (always visible) */}
      <div
        onClick={() => toggleAccordion(plan.id)}
        className="flex items-center justify-between p-[20px] cursor-pointer"
      >
        <div ref={textRef}>
          <h4 className="text-[25px] font-medium text-[#000000] leading-none mb-2 tracking-tight">
            {plan.title}
          </h4>
          <p className="text-[14px] md:text-[15px] text-[#60646C]">
            {plan.subtitle}
          </p>
        </div>

        {/* Plus morphing into X */}
        <div ref={iconRef} className="text-[#000000]">
          <Plus size={24} />
        </div>
      </div>

      {/* Expanded Content handled by GSAP */}
      <div ref={contentRef} className="h-0 overflow-hidden">
        <div ref={innerContentRef} className="p-6 md:p-8 pt-6 flex flex-col md:flex-row gap-8 items-stretch border-t border-[#e5e5e7] opacity-0">

          {/* Features List */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <h3 className="text-[50px] font-medium text-[#0A0A0A] leading-none tracking-tight">
                  {plan.price}
                </h3>
                <span className="text-[14px] text-[#60646C] font-medium">/per project</span>
              </div>

              <ul className="flex flex-col gap-1 mb-0 md:mb-0">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#000000] shrink-0 mt-2.5"></span>
                    <span className="text-[15px] text-[#000000]/80 font-semibold leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a href="#" className="relative group inline-block text-[16px] font-bold text-[#000000] mt-auto self-start pb-0.5">
              Request Strategy Call
              <span className="absolute left-0 bottom-0 h-[1.5px] bg-[#000000] w-[12px] group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          </div>

          {/* Image */}
          <div className="w-full md:w-[197px] h-auto md:h-[294px] shrink-0 rounded-md overflow-hidden">
            <img src={plan.image} alt={plan.title} className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </div>
  );
};

const PricingComp = () => {
  const [openIds, setOpenIds] = useState([]);
  const sectionRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  const toggleAccordion = (id) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 75%',
      onEnter: () => {
        if (!hasTriggeredRef.current && pricingData.length > 0) {
          setOpenIds(prev => {
            if (!prev.includes(pricingData[0].id)) {
              return [...prev, pricingData[0].id];
            }
            return prev;
          });
          hasTriggeredRef.current = true;
        }
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-[#f6f6f6] font-['DM_Sans',sans-serif] px-4 md:px-8 py-32">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 items-stretch">

        {/* Left Column */}
        <div className="w-full lg:w-[30%] flex flex-col justify-between relative">
          <div className="flex items-center gap-3 text-[#60646C] text-[13px] font-medium tracking-wide uppercase leading-none pt-4 mb-32 lg:mb-0">
            <span className="dot-blink w-1.5 h-1.5 rounded-full bg-[#60646C] shrink-0"></span>
            <span>INVESTMENT</span>
          </div>

          {/* Aligns to the bottom of the stretched container */}
          <div className="lg:pl-5 self-start w-full mt-12 lg:mt-0">
            <p className="text-[15px] text-[#60646C] leading-relaxed mb-6 max-w-[250px]">
              Not sure which plan fits? Let's define the perfect scope together.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#ebebeb] hover:bg-[#e0e0e0] transition-colors px-4 py-2.5 rounded-[12px] text-[13px] font-semibold text-[#000000]/70">
              CUSTOM PROJECT
              <span className="bg-eeeeee border-1 border-[#000000] rounded-[6px] p-0.5 ">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[90%] flex flex-col">
          <div className="mb-12">
            <h2 className="text-[80px] leading-[0.9] text-[#000000] tracking-[-0.03em] font-medium mb-6">
              PRICING
            </h2>
            <p className="max-w-[450px] text-[16px] text-[#60646C] leading-relaxed">
              Every project is custom, but clarity isn't optional. We price based on outcomes — not hours, trends, or guesswork.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {pricingData.map((plan) => (
              <AccordionItem
                key={plan.id}
                plan={plan}
                isOpen={openIds.includes(plan.id)}
                toggleAccordion={toggleAccordion}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingComp;
