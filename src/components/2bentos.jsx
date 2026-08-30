import React from 'react';

const TwoBentos = () => {
  return (
    <section className="pt-[80px] pb-[80px] w-full bg-[#f5f3eb]">
      <div className="max-w-[1400px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px]">

        <div className="mb-[64px] flex flex-col items-start text-left">
          <h2 className="font-display max-w-7xl text-4xl lg:text-[54px] text-black leading-[1.1] font-medium tracking-tight">
            Cultivate Optimal Returns <br className="hidden md:block" />
            <span className="text-black/50">from Your Investments</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-[64px]">
          {/* Left Bento */}
          <div className="bg-[#f6f6f6] rounded-[12px] p-[32px] pb-0 overflow-hidden relative border border-[#dedcdb] flex flex-col justify-between min-h-[50px]">
            <div className="z-10 relative mb-[16px]">
              <h3 className="text-[27px] font-medium text-gray-900 leading-tight tracking-tight max-w-[400px]">
                Continuous Monitoring <span className="text-black/60 font-normal">and Adjustment to ensure optimal returns</span>
              </h3>
            </div>
            <div className="mt-auto -mx-[0px] -mb-[0px] relative flex justify-center items-end h-[200px]">
              <img
                src="/vuablhsd.png"
                alt="Monitoring Data"
                className="w-[110%] max-w-none object-cover object-top translate-y-4"
              />
            </div>
          </div>

          {/* Right Bento */}
          <div className="bg-[#f3f4f3] rounded-[12px] p-[32px] pb-0 overflow-hidden relative border border-[#dedcdb] flex flex-col justify-between min-h-[10px]">
            <div className="z-10 relative mb-[16px]">
              <h3 className="text-[27px] font-medium text-gray-900 leading-tight tracking-tight max-w-[400px]">
                Diversify Your Portfolio <span className="text-black/60 font-normal">to strategically enhance your investments</span>
              </h3>
            </div>
            <div className="mt-auto -mx-[0px] -mb-[0px] relative flex justify-center items-end h-[230px]">
              <img
                src="/qwsa.png"
                alt="Portfolio Graph"
                className="w-[110%] max-w-none object-cover object-top translate-y-4"
              />
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-black mb-[16px]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="10" y1="2" x2="14" y2="2"></line>
                <line x1="12" y1="14" x2="12" y2="9"></line>
                <circle cx="12" cy="14" r="8"></circle>
              </svg>
            </div>
            <div>
              <h4 className="text-[20px] font-medium text-gray-900 leading-tight tracking-tight mb-2">Launch Faster</h4>
              <p className="text-black/60 font-normal text-[15px] leading-relaxed">
                Go live without waiting on complex, fragmented restaurant management systems.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-black mb-[16px]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-[20px] font-medium text-gray-900 leading-tight tracking-tight mb-2">Differentiate Easily</h4>
              <p className="text-black/60 font-normal text-[15px] leading-relaxed">
                Design dining experiences around your guests, not platform constraints.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="text-black mb-[16px]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.21 1.21 0 0 0 0-1.72Z"></path>
                <path d="m14 7 3 3"></path>
                <path d="M5 6v4"></path>
                <path d="M19 14v4"></path>
                <path d="M10 2v2"></path>
                <path d="M7 8H3"></path>
                <path d="M21 16h-4"></path>
                <path d="M11 3H9"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-[20px] font-medium text-gray-900 leading-tight tracking-tight mb-2">Keep Innovating</h4>
              <p className="text-black/60 font-normal text-[15px] leading-relaxed">
                Expand into new branches and menus without ever rebuilding your foundation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoBentos;
