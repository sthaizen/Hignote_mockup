import React from 'react';

const Mockup = () => {
  return (
    <section className="w-full font-['DM_Sans',sans-serif] relative flex flex-col md:block justify-center overflow-hidden bg-[#f5f3eb]">

      {/* 
        Responsive Text Block: 
        - MOBILE: Normal document flow, sits above the image, solid purple background to blend seamlessly.
        - DESKTOP: Absolute positioned over the image, transparent background. 
      */}
      <div className="w-full max-w-[1380px] mx-auto px-8 md:px-18 py-12 md:py-0 bg-[#bcabf9] md:bg-transparent md:absolute md:inset-0 z-10 flex flex-col justify-center pointer-events-none">
        <div className="pointer-events-auto md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-[36px] sm:text-[42px] md:text-[52px] lg:text-[48px] font-normal leading-[1.1] text-[#1a1a1a] tracking-tight mb-8 max-w-[850px] md:pt-40">
            Ready to take your<br className="hidden md:block" />business to the next level
          </h2>
          <div>
            <button className="bg-[#111111] text-white px-5 py-2 rounded-[100px] font-medium text-[16px] hover:bg-black transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* The image spans edge-to-edge across the entire screen. Sits below text on mobile. */}
      <img
        src="/la.png"
        alt=""
        className="w-full h-auto block pointer-events-none"
      />

    </section>
  );
};

export default Mockup;
