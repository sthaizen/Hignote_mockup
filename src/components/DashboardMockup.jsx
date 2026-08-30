import React from 'react';

const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-[1500px] mx-auto mt-2 ">

      {/* <div className="hidden lg:block absolute -top-10 -left-16 w-[200px] h-[800px] pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="diagonal-hatch-left" width="8" height="8" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="white" strokeWidth="1" opacity="0.4" />
          </pattern>
          <path d="M 180 0 L 180 800" stroke="white" strokeWidth="1" opacity="0.3" />
          <path d="M 160 0 L 160 250 L 120 290 L 120 800" stroke="white" strokeWidth="1.5" opacity="0.6" />
          <path d="M 140 400 L 100 400 L 80 420 L 80 800" stroke="white" strokeWidth="1" opacity="0.4" />
          <path d="M 160 150 L 190 180" stroke="white" strokeWidth="1" opacity="0.5" />
          <path d="M 80 500 L 50 530 L 50 600" stroke="white" strokeWidth="1" opacity="0.4" />

          <circle cx="160" cy="150" r="3.5" fill="white" opacity="0.9" />
          <circle cx="160" cy="250" r="3.5" fill="white" opacity="0.9" />
          <circle cx="120" cy="290" r="3.5" fill="white" opacity="0.9" />
          <circle cx="140" cy="400" r="3.5" fill="white" opacity="0.9" />
          <circle cx="80" cy="500" r="3.5" fill="white" opacity="0.9" />

          <rect x="95" y="80" width="60" height="120" fill="url(#diagonal-hatch-left)" />
          <rect x="125" y="320" width="50" height="70" fill="url(#diagonal-hatch-left)" />
        </svg>
      </div>

   
      <div className="hidden lg:block absolute -top-10 -right-16 w-[200px] h-[800px] pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="diagonal-hatch-right" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="white" strokeWidth="1" opacity="0.4" />
          </pattern>
          <path d="M 20 0 L 20 800" stroke="white" strokeWidth="1" opacity="0.3" />
          <path d="M 40 0 L 40 300 L 80 340 L 80 800" stroke="white" strokeWidth="1.5" opacity="0.6" />
          <path d="M 60 100 L 100 100 L 120 120 L 120 800" stroke="white" strokeWidth="1" opacity="0.4" />
          <path d="M 40 200 L 10 230" stroke="white" strokeWidth="1" opacity="0.5" />
          <path d="M 120 400 L 150 430 L 150 500" stroke="white" strokeWidth="1" opacity="0.4" />

          <circle cx="40" cy="200" r="3.5" fill="white" opacity="0.9" />
          <circle cx="40" cy="300" r="3.5" fill="white" opacity="0.9" />
          <circle cx="80" cy="340" r="3.5" fill="white" opacity="0.9" />
          <circle cx="120" cy="400" r="3.5" fill="white" opacity="0.9" />
          <circle cx="60" cy="100" r="3.5" fill="white" opacity="0.9" />

          <rect x="45" y="150" width="60" height="100" fill="url(#diagonal-hatch-right)" />
          <rect x="5" y="450" width="70" height="80" fill="url(#diagonal-hatch-right)" />
        </svg>
      </div> */}

      <div className="w-full max-w-[1400px] mx-auto bg-black/2 rounded-2xl border border-white/80 p-2 font-['DM_Sans',sans-serif] text-[#111] relative z-10 backdrop-blur-[1px] shadow-md">
        {/* Glassmorphic Window Header */}
        <div className="h-8 flex items-center px-4 mb-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm" />
          </div>
        </div>

        {/* Screenshot Dashboard Body */}
        <img
          src="/Screenshot_3.png"
          alt="RestroHub Dashboard Screenshot"
          className="w-full h-auto rounded-[14px] border border-white/20"
        />
      </div>
    </div>
  );
};
export default DashboardMockup;
