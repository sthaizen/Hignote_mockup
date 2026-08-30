import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectComp = () => {
  return (
    <section className="w-full bg-[#f5f3eb] font-['DM_Sans',sans-serif] px-4 md:px-8 py-20 md:py-0 flex justify-center">
      <div className="w-full max-w-[655px] flex flex-col items-start">

        <h3 className="text-[32px] md:text-[42px] font-medium leading-[1.2] text-[#000000] tracking-tight mb-6">
          Control over chaos. Systems over guesswork. Operations built to scale.
        </h3>

        <p className="text-[16px] md:text-[18px] text-[#000000] mb-8">
          Growth begins with a unified platform — let's transform your restaurant.
        </p>

        <a href="#" className="inline-flex items-center gap-12 bg-[#232324] text-white pl-[12px] pr-[4px] py-[4px] rounded-md hover:bg-black transition-colors w-max mb-16">
          <span className="text-[13px] font-normal tracking-wide uppercase">
            GET STARTED
          </span>
          <span className="flex items-center justify-center w-4 h-4 rounded-md border border-white/20 bg-transparent text-white">
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </span>
        </a>



      </div>
    </section>
  );
};

export default ProjectComp;
