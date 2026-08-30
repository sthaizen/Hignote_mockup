import React from 'react';
import { Search, PenTool, Smartphone, Upload } from 'lucide-react';

const Card = ({ step, title, text, duration, pillBg, cardBg, icon: Icon, iconColor, iconBg }) => (
  <div className={`relative w-full flex p-3 md:p-4 rounded-[2rem] ${cardBg} shadow-sm border border-black/5 z-10 h-full`}>
    <div className={`w-10 md:w-12 shrink-0 rounded-[1.5rem] flex flex-col items-center justify-center py-4 ${pillBg}`}>
      <span className="text-white text-xs tracking-widest font-medium -rotate-90 whitespace-nowrap">
        {duration}
      </span>
    </div>
    <div className="p-4 md:p-6 flex-1">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-8 h-8 rounded-full ${iconBg} flex items-center justify-center ${iconColor}`}>
          <Icon size={16} />
        </div>
        <h3 className="text-lg md:text-xl font-medium text-gray-900">{step} {title}</h3>
      </div>
      <p className="text-gray-600 text-[15px] leading-relaxed">
        {text}
      </p>
    </div>
  </div>
);

const Installation = () => {
  const timelineData = [
    {
      step: '1',
      title: 'Research',
      text: 'We explored fitness challenges and user pain points to uncover what people truly need from a home workout app.',
      duration: '1 Week',
      pillBg: 'bg-[#0a5c42]',
      cardBg: 'bg-[#f7fce8]',
      iconBg: 'bg-white',
      iconColor: 'text-[#489a66]',
      icon: Search
    },
    {
      step: '2',
      title: 'Visual Design',
      text: 'We built a clean, energetic design with easy navigation, motivating visuals, and interactive features that keep workouts exciting.',
      duration: '2 Week',
      pillBg: 'bg-[#262626]',
      cardBg: 'bg-[#fafafa]',
      iconBg: 'bg-gray-100',
      iconColor: 'text-[#17171c]',
      icon: PenTool
    },
    {
      step: '3',
      title: 'Prototype & Test',
      text: 'We ran multiple test rounds to refine the experience, making sure the app feels smooth, secure, and enjoyable for every user.',
      duration: '1-2 Days',
      pillBg: 'bg-[#17171c]',
      cardBg: 'bg-[#fafafa]',
      iconBg: 'bg-gray-100',
      iconColor: 'text-[#17171c]',
      icon: Smartphone
    },
    {
      step: '4',
      title: 'Final Delivery',
      text: 'We wrapped it all up with a polished presentation that demonstrated the app\'s value—showing how it empowers users to train anytime, anywhere.',
      duration: '1-2 Days',
      pillBg: 'bg-[#125b39]',
      cardBg: 'bg-[#f4fbe7]',
      iconBg: 'bg-white',
      iconColor: 'text-[#125b39]',
      icon: Upload
    }
  ];

  return (
    <section className="w-full font-['DM_Sans',sans-serif] py-24">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 bg-[#cbf58c] text-[#125b39] text-sm font-semibold rounded-full mb-8">
            Project Details
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-[48px] font-medium text-[#17171c] leading-[1.15] mb-6 tracking-tight">
                Building a Seamless Fitness<br />Experience
              </h2>
              <p className="text-gray-600 text-[17px] leading-relaxed max-w-[500px]">
                Beyond just workout tracking, we crafted an app experience that motivates users at every step—from personalized training flows to clean visuals that make staying fit feel simple and rewarding.
              </p>
            </div>
            <div className="flex items-center">
              <div className="px-6 py-4 bg-gray-50 text-gray-600 text-sm font-medium">
                Jul 2025
              </div>
              <div className="px-6 py-4 bg-[#cbf58c] text-[#125b39] text-sm font-semibold">
                Aug 2025
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Grid (Desktop) */}
        <div className="hidden md:grid grid-cols-2 gap-16 relative mt-16 max-w-4xl mx-auto">
          {/* Item 1 */}
          <div className="relative">
            <Card {...timelineData[0]} />
            <div className="absolute top-[50%] left-[100%] w-[calc(50%+4rem)] h-[calc(50%+4rem)] border-t-[2px] border-r-[2px] border-dashed border-[#125b39]/40 rounded-tr-[2rem] z-0"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }}>
              <svg className="absolute bottom-[-6px] right-[-1px] translate-x-1/2 text-[#125b39]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="5 9 12 16 19 9"></polyline>
              </svg>
            </div>
          </div>
          <div />

          {/* Item 2 */}
          <div />
          <div className="relative">
            <Card {...timelineData[1]} />
            <div className="absolute top-[50%] right-[100%] w-[calc(50%+4rem)] h-[calc(50%+4rem)] border-t-[2px] border-l-[2px] border-dashed border-[#125b39]/40 rounded-tl-[2rem] z-0"
              style={{ maskImage: 'linear-gradient(to left, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to left, transparent, black 40%)' }}>
              <svg className="absolute bottom-[-6px] left-[-1px] -translate-x-1/2 text-[#125b39]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="5 9 12 16 19 9"></polyline>
              </svg>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative">
            <Card {...timelineData[2]} />
            <div className="absolute top-[50%] left-[100%] w-[calc(50%+4rem)] h-[calc(50%+4rem)] border-t-[2px] border-r-[2px] border-dashed border-[#125b39]/40 rounded-tr-[2rem] z-0"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }}>
              <svg className="absolute bottom-[-6px] right-[-1px] translate-x-1/2 text-[#125b39]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="5 9 12 16 19 9"></polyline>
              </svg>
            </div>
          </div>
          <div />

          {/* Item 4 */}
          <div />
          <div className="relative">
            <Card {...timelineData[3]} />
          </div>
        </div>

        {/* Timeline (Mobile) */}
        <div className="md:hidden flex flex-col gap-12 relative mt-12">
          {timelineData.map((data, idx) => (
            <div key={idx} className="relative">
              <Card {...data} />
              {idx < timelineData.length - 1 && (
                <div className="absolute left-8 top-[100%] h-12 border-l-[2px] border-dashed border-[#125b39]/40 z-0"
                  style={{ maskImage: 'linear-gradient(to bottom, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 40%)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Installation;
