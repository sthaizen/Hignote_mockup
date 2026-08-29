import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const tabs = [
  {
    id: 0,
    title: 'Restaurant Management',
    image: '/Resmmgt.png',
    description: 'Complete control over your restaurant operations from a single, unified dashboard.',
    features: [
      'Real-time tracking of sales, inventory, and staff performance',
      'Automated daily reporting and insights to optimize your workflows',
      'Seamless integration with third-party delivery services'
    ]
  },
  {
    id: 1,
    title: 'RestroBuddy',
    image: '/ww.png',
    description: 'Your intelligent assistant for managing orders, answering queries, and automating tasks.',
    features: [
      'Conversational AI for quick menu navigation and customer support',
      'Automated recommendations to boost upselling and average order value',
      'Voice-activated commands for hands-free kitchen and floor management'
    ]
  },
  {
    id: 2,
    title: 'KOT & Order Processing',
    image: '/kopt.png',
    description: 'Streamline communication between the front of house and the kitchen instantly.',
    features: [
      'Digital Kitchen Order Tickets (KOT) directly routed to specific prep stations',
      'Live status tracking for reduced wait times and improved accuracy',
      "Customizable display modes tailored to your kitchen's workflow"
    ]
  },
  {
    id: 3,
    title: 'Multi-branch Support',
    image: '/Multibranch support.png',
    description: 'Scale your operations effortlessly across multiple locations with centralized control.',
    features: [
      'Unified analytics and comparative reporting for all your branches',
      'Centralized menu management with branch-specific pricing overrides',
      'Global inventory tracking and transfer management between outlets'
    ]
  }
];

const PicturePoints = () => {
  const [activeTab, setActiveTab] = useState(1);
  const contentRefs = useRef([]);
  const containerRef = useRef(null);

  useGSAP(() => {
    tabs.forEach((_, idx) => {
      const el = contentRefs.current[idx];
      if (!el) return;

      if (idx === activeTab) {
        gsap.to(el, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    });
  }, { dependencies: [activeTab], scope: containerRef });

  return (
    <div ref={containerRef} className="w-full bg-[#f5f3eb] py-24 px-6 md:px-12 lg:px-24 font-['Inter',sans-serif] border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <h3 className="text-center text-[28px] lg:text-[48px] text-[#212121] font-normal mb-10">
          Our models. Your business.
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-start">

          {/* Left Side: Image container */}
          <div className="relative w-full aspect-square bg-[#f2efe9] rounded-xl overflow-hidden flex items-center justify-center shadow-sm border border-black/5">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>

            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="rounded-xl object-cover p-0 w-full h-full relative z-10"
            />
          </div>

          {/* Right Side: Accordion */}
          <div className="flex flex-col w-full pt-0 lg:pt-0 pb-20">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              const initialStyles = {
                height: idx === 1 ? 'auto' : 0,
                opacity: idx === 1 ? 1 : 0,
              };

              return (
                <div
                  key={tab.id}
                  className={`flex flex-col relative cursor-pointer group ${isActive ? '' : 'border-t border-gray-300/80'}`}
                  onClick={() => setActiveTab(idx)}
                >
                  {/* Gradient Border for Active State */}
                  {isActive && (
                    <div
                      className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF7A59] via-[#8A2BE2] to-[#4169E1]"
                    />
                  )}

                  {/* Title */}
                  <h5 className={`py-6 text-[20px] lg:text-[24px] transition-colors duration-300 ${isActive ? 'text-[#17171C]' : 'text-gray-500 group-hover:text-gray-800'}`}>
                    {tab.title}
                  </h5>

                  {/* Expanded Content */}
                  <div
                    ref={(el) => (contentRefs.current[idx] = el)}
                    className="overflow-hidden"
                    style={initialStyles}
                  >
                    <div className="pb-8 flex flex-col gap-6">
                      <p className="text-[#17171C] text-[16px] lg:text-[18px] leading-relaxed pr-4">
                        {tab.description}
                      </p>

                      <ul className="flex flex-col gap-4">
                        {tab.features.map((feature, i) => {
                          const splitFeature = feature.split(':');
                          return (
                            <li key={i} className="flex gap-3 items-start text-[16px] lg:text-[18px] text-[#17171C] leading-snug">
                              <CheckCircle2 className="w-4 h-4 text-gray-500 shrink-0 mt-1" strokeWidth={2} />
                              <span className="opacity-90">
                                {splitFeature.length > 1 ? (
                                  <>
                                    <strong>{splitFeature[0]}:</strong>{splitFeature.slice(1).join(':')}
                                  </>
                                ) : (
                                  feature
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      <div className="mt-4">
                        <button className="flex items-center gap-2 text-[16px] font-medium text-[#17171C] hover:text-gray-500 transition-colors group/btn">
                          Learn more
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PicturePoints;
