import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const NewsletterComp = () => {
  return (
    <section className="w-full bg-[#f6f6f6] font-['DM_Sans',sans-serif] ">
      <div className="w-full max-w-[1400px] mx-auto bg-white rounded-[24px] pl-2 pr-10 pt-1 pb-1  shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col lg:flex-row gap-12 lg:gap-10 items-center">

        {/* Left: Image */}
        <div className="w-full lg:w-[30%] h-[300px] md:h-[400px] lg:h-[260px] shrink-0">
          <img
            src="/assets/picss/coolman.png"
            alt="Newsletter"
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>

        {/* Middle: Content */}
        <div className="w-full lg:w-[35%] flex flex-col">
          <div className="flex items-center gap-3 text-[#A3A3A3] text-[12px] font-medium tracking-wide uppercase mb-6">
            <span className="dot-blink w-1.5 h-1.5 rounded-full bg-[#A3A3A3] shrink-0"></span>
            <span>NEWSLETTER</span>
          </div>

          <h4 className="text-[30px] font-medium leading-[1.2] text-[#000000] mb-12 tracking-tight">
            Stay Ahead,<br />Build Smarter
          </h4>

          <p className="text-[15px] text-[#60646C] leading-relaxed max-w-[320px]">
            Get one high-impact idea each week to strengthen your identity, messaging, and momentum.
          </p>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-[30%] flex flex-col gap-4 lg:ml-auto max-w-[371px]">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-[#60646C] font-medium">Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full bg-[#f9f9fa] border border-[#e5e5e7] rounded-[10px] px-[16px] py-[10px] text-[15px] text-[#000000] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#d1d1d3] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] text-[#60646C] font-medium">Email</label>
            <input
              type="email"
              placeholder="jane@framer.com"
              className="w-full bg-[#f9f9fa] border border-[#e5e5e7] rounded-[10px] px-[16px] py-[10px] text-[15px] text-[#000000] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#d1d1d3] transition-colors"
            />
          </div>

          <button className="flex items-center justify-between w-full bg-[#232324] text-white pl-[12px] pr-[4px] py-[4px] rounded-[10px] hover:bg-black transition-colors mt-2 group">
            <span className="text-[13px] font-semibold tracking-wide uppercase">
              JOIN NEWSLETTER
            </span>
            <span className="flex items-center justify-center w-7 h-7 rounded-[8px] border border-white/20 bg-transparent text-white group-hover:bg-white/10 transition-colors">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default NewsletterComp;
