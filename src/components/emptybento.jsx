import React from 'react';
import AnimatedDots from './AnimatedDots';
import IntegrationCloud from './IntegrationCloud';

// EmptyBento component displaying the main feature grid
const EmptyBento = () => {
  return (
    <section className="pt-[80px] bg-[#f5f3eb]">
      <div className="max-w-[1500px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px]">

        {/* Title Section */}
        <div className="mb-[64px]">
          <h2 className="font-display max-w-7xl text-4xl lg:text-[54px] text-black leading-[1.1] font-medium tracking-tight">
            One platform for your entire restaurant operations.<br />
            <span className="text-black/50">Automate orders, KOTs, and inventory in real-time.</span>
          </h2>

          <div className="flex flex-wrap gap-[12px] mt-[32px]">
            <button className="px-[20px] py-[12px] bg-[#dcf335] text-black font-medium rounded-[8px] text-[15px] hover:bg-[#cde42a] transition-colors shadow-sm">
              Launch Your Restro Today
            </button>
            <button className="px-[20px] py-[12px] bg-[#f4f2f0] text-black font-medium rounded-[8px] text-[15px] hover:bg-[#e8e6e3] transition-colors border border-[#e5e3e1]">
              View Demo
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[14px]">

          {/* Card 1 */}
          <div className="md:col-span-6 rounded-[12px] bg-[#f4f0ec] p-[32px] pb-0 overflow-hidden relative border border-[#dedcdb] flex flex-col justify-between">
            <AnimatedDots />
            <div className="flex justify-between items-start mb-[16px] relative z-30">
              <h3 className="text-[27px] font-medium text-gray-900 leading-tight tracking-tight">
                Inventory & Supply Chain <span className="text-black/60 text-[20px]  font-normal"> <br />track local suppliers and stock effortlessly</span>
              </h3>
              <div className="flex w-[37px] h-[37px] shrink-0 items-center justify-center rounded-[6px] bg-[#eae7e5] border border-[#dedcdb]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="relative w-full mt-[8px] flex items-end justify-center ml-[30px] z-10">
              <img src="/ll.png" alt="Inventory and Supply Chain" className="w-[110%] max-w-none object-cover rounded-t-[12px]" />
            </div>

            {/* Fade out overlays tied to the card edges */}
            <div className="absolute top-0 right-0 bottom-0 w-[20%] bg-gradient-to-l from-[#f4f0ec] from-10% to-transparent pointer-events-none z-20"></div>
            <div className="absolute left-0 right-0 bottom-0 h-[10%] bg-gradient-to-t from-[#f4f0ec] from-10% to-transparent pointer-events-none z-20"></div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-6 rounded-[12px] bg-[#f6f4f3] p-[32px] pb-0 overflow-hidden relative border border-[#dedcdb] flex flex-col justify-between">
            <AnimatedDots />
            <div className="flex justify-between items-start mb-[16px] relative z-30">
              <h3 className="text-[27px] font-medium text-gray-900 leading-tight tracking-tight">
                Table & Order Management <span className="text-black/60  text-[20px] font-normal"><br />  that handles peak hours flawlessly</span>
              </h3>
              <div className="flex w-[37px] h-[37px] shrink-0 items-center justify-center rounded-[6px] bg-[#e5e4da] border border-[#dedcdb]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="relative w-full mt-[8px] flex items-end justify-center ml-[40px] z-10">
              <img src="/NN.png" alt="Table & Order Management" className="w-[110%] max-w-none object-cover rounded-t-[12px]" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-4 rounded-[12px] bg-[#f6f4f3] p-[32px] pb-0 overflow-hidden relative border border-[#dedcdb] flex flex-col justify-between">
            <AnimatedDots />
            <div className="flex justify-between items-start mb-[16px] relative z-30">
              <h3 className="text-[24px] font-medium text-gray-900 leading-tight tracking-tight">
                Digital KOT & Kitchen Sync <span className="text-black/60 text-[20px] font-normal"> <br /> ensures zero delays between hall and kitchen</span>
              </h3>
              <div className="flex w-[37px] h-[37px] shrink-0 items-center justify-center rounded-[6px] bg-[#eae7e5] border border-[#dedcdb]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="relative w-full mt-[8px] flex items-end justify-center ml-[20px] z-10">
              <img src="/AA.png" alt="Digital KOT and Kitchen Sync" className="w-[110%] max-w-none object-contain rounded-t-[12px]" />
            </div>

            {/* Fade out overlays tied to the card edges */}
            <div className="absolute top-0 right-0 bottom-0 w-[20%] bg-gradient-to-l from-[#f4f2f0] from-10% to-transparent pointer-events-none z-20"></div>
            <div className="absolute left-0 right-0 bottom-0 h-[30%] bg-gradient-to-t from-[#f4f2f0] from-10% to-transparent pointer-events-none z-20"></div>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-4 rounded-[12px] bg-[#f5f3f1] p-[32px] pb-0 overflow-hidden relative border border-[#dedcdb] flex flex-col justify-between">
            <AnimatedDots />
            <div className="flex justify-between items-start mb-[16px] relative z-30">
              <h3 className="text-[24px] font-medium text-gray-900 leading-tight tracking-tight">
                Multi-branch Control <span className="text-black/60  text-[20px] font-normal"><br /> to manage outlets across Kathmandu and beyond</span>
              </h3>
              <div className="flex w-[37px] h-[37px] shrink-0 items-center justify-center rounded-[6px] bg-[#eae7e5] border border-[#dedcdb]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="relative w-full mt-[8px] flex items-end justify-center ml-[10px] z-10">
              <img src="/SS 1.png" alt="Multi-branch Control" className="w-[110%] max-w-none object-contain rounded-t-[12px]" />
            </div>

            {/* Fade out overlays tied to the card edges */}
            <div className="absolute top-0 right-0 bottom-0 w-[50%] bg-gradient-to-l from-[#f4f2f0] from-10% to-transparent pointer-events-none z-20"></div>
            <div className="absolute left-0 right-0 bottom-0 h-[40%] bg-gradient-to-t from-[#f4f2f0] from-10% to-transparent pointer-events-none z-20"></div>
          </div>

          {/* Card 5 */}
          <div className="md:col-span-4 rounded-[12px] bg-[#f4f1ed] p-[32px] pb-0 overflow-hidden relative border border-[#dedcdb] flex flex-col justify-between">
            <AnimatedDots />
            <div className="flex justify-between items-start mb-[16px] relative z-30">
              <h3 className="text-[24px] font-medium text-gray-900 leading-tight tracking-tight">
                Seamless POS & Payments <span className="text-black/60 text-[20px] font-normal"> <br /> like eSewa, Fonepay, and more</span>
              </h3>
              <div className="flex w-[37px] h-[37px] shrink-0 items-center justify-center rounded-[6px] bg-[#eae7e5] border border-[#dedcdb]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="relative w-full flex items-end justify-center ml-[10px] z-10">
              <img src="/lll.png" alt="Seamless POS and Payments" className="w-[110%] max-w-none object-contain rounded-t-[12px]" />
            </div>

            {/* Fade out overlays tied to the card edges */}
            <div className="absolute top-0 right-0 bottom-0 w-[40%] bg-gradient-to-l from-[#f4f1ed] from-10% to-transparent pointer-events-none z-20"></div>
            <div className="absolute left-0 right-0 bottom-0 h-[20%] bg-gradient-to-t from-[#f4f1ed] from-10% to-transparent pointer-events-none z-20"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmptyBento;
