import React from 'react';

const FourCardSection = () => {
  return (
    <section className="w-full bg-[#f5f3eb] font-['DM_Sans',sans-serif] px-4 md:px-8 py-24 flex flex-col items-center">
      <div className="max-w-[640px] mx-auto text-center mb-16">
        <h2 className="text-[32px] md:text-[40px] font-medium leading-[1.1] text-[#1a1a1a] tracking-tight mb-4">
          Clarity across every operation.
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#1a1a1a]/70 font-normal">
          RestroHub keeps the details handled before they become problems.
        </p>
      </div>

      <div className="w-full max-w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Card 1 */}
        <div className="bg-[#f2efed] rounded-[24px] pt-8 flex flex-col overflow-hidden ">
          <div className="px-6 flex flex-col flex-grow">
            <h3 className="text-[22px] font-medium text-[#1a1a1a] leading-snug mb-3">
              Smart billing and expense management
            </h3>
            <p className="text-[15px] leading-relaxed text-[#1a1a1a]/70 mb-8 flex-grow">
              Seamlessly handle transactions, daily limits, and track all restaurant expenses in one place.
            </p>
          </div>
          <div className="w-full mt-auto flex justify-center items-end relative z-10 translate-y-[0px] bg-[#f5f3eb] pt-10 px-6 rounded-t-[16px] pb-10">
            <img
              src="/bla2.png"
              alt="Smart billing and expense management"
              className="w-full h-auto object-contain object-bottom"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f4f1ef] rounded-[24px] pt-8 flex flex-col overflow-hidden border border-[#e6e4de]">
          <div className="px-6 flex flex-col flex-grow">
            <h3 className="text-[22px] font-medium text-[#1a1a1a] leading-snug mb-3">
              Smart workflows and staff approvals
            </h3>
            <p className="text-[16px] leading-relaxed text-[#1a1a1a]/70 mb-8 flex-grow">
              Automate kitchen tickets and streamline operations with intelligent staff approval workflows.
            </p>
          </div>
          <div className="w-full px-0 mt-auto flex justify-center items-end relative z-10 translate-y-2">
            <img
              src="/asd (2).png"
              alt="Smart workflows and staff approvals"
              className="w-full h-auto object-contain object-bottom"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f2efed] rounded-[24px] pt-8 flex flex-col overflow-hidden border border-[#e6e4de]">
          <div className="px-6 flex flex-col flex-grow">
            <h3 className="text-[22px] font-medium text-[#1a1a1a] leading-snug mb-3">
              Simplified alerts and exception handling
            </h3>
            <p className="text-[16px] leading-relaxed text-[#1a1a1a]/70 mb-8 flex-grow">
              Auto-track exceptions, receive low stock alerts, and streamline daily restaurant management.
            </p>
          </div>
          <div className="w-full px-0 mt-auto flex justify-center items-center relative z-10 mb-20">
            <img
              src="/asd (4).png"
              alt="Simplified alerts and exception handling"
              className="w-full h-auto object-contain object-center scale-[1.35]"
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#f3f0ed] rounded-[24px] pt-8 flex flex-col overflow-hidden border border-[#e6e4de]">
          <div className="px-6 flex flex-col flex-grow">
            <h3 className="text-[22px] font-medium text-[#1a1a1a] leading-snug mb-3">
              Real-time sales visibility and insights
            </h3>
            <p className="text-[16px] leading-relaxed text-[#1a1a1a]/70 mb-1 flex-grow">
              Monitor every branch's menu performance, daily sales, and financial health instantly.
            </p>
          </div>
          <div className="w-full px-0 mt-auto flex justify-end items-end relative z-10 translate-y-2">
            <img
              src="/asd (1).png"
              alt="Real-time sales visibility and insights"
              className="w-[90%] h-auto object-contain object-right-bottom"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FourCardSection;
