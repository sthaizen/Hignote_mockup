import React from 'react';
import DashboardMockup from '../components/DashboardMockup';

const HeroComp = () => {

    const BG_OFFSET_TOP = '370px';
    // ==========================================

    return (
        <section
            className="w-full min-h-[1000px] bg-[#f5f3eb] bg-contain bg-no-repeat relative flex flex-col justify-start font-['DM_Sans',sans-serif] pt-[80px] md:pt-[100px] pb-[120px]"
            style={{
                backgroundImage: "url('/aa (1).png')",
                backgroundPosition: `center ${BG_OFFSET_TOP}`
            }}
        >
            <div className="w-full max-w-[1580px] mx-auto px-8 md:px-1 flex flex-col items-start text-left">
                <div className="max-w-[850px] flex flex-col items-start">
                    {/* Announcement Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#f4f0ec] backdrop-blur-md border border-gray-200/80 rounded-full pr-3 p-2 mb-4 cursor-pointer hover:bg-white/90 transition-colors ">
                        <span className="bg-[#ff5a36] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                            New
                        </span>
                        <span className="text-[13px] font-medium text-gray-800 flex items-center gap-1">
                            RestroHub OS 2.0 <span className="text-gray-400 font-normal">→</span>
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-[44px] md:text-[56px] lg:text-[52px] font-medium leading-[1.05] tracking-[-0.03em] text-[#111111] mb-4">
                        Running a restaurant is hard.<br />Scaling it shouldn't be.
                    </h1>

                    {/* Subheading */}
                    <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6] max-w-[650px] mb-6">
                        Great food brings them in. Flawless operations keep them coming back.<br />
                        RestroHub is the all-in-one intelligent platform that delivers both.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-start gap-4">
                        <button className="bg-[#111111] text-white px-5 py-2 rounded-full font-medium text-[15px] hover:bg-black transition-colors flex items-center gap-2 shadow-md">
                            Start for free <span className="opacity-80 font-normal">→</span>
                        </button>
                        <button className="bg-white border border-gray-200/80 text-[#111111] px-5 py-2 rounded-full font-medium text-[15px] hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
                            {/* <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg> */}
                            See how it works
                        </button>
                    </div>
                </div>

                {/* Logo Cloud */}
                {/* <div className="w-full max-w-[1100px] mt-24 mb-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale">
                    <div className="text-[22px] font-bold text-gray-800 tracking-tight">amazon</div>
                    <div className="text-[22px] font-bold text-gray-800 flex items-center gap-1.5">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
                        xplor pay
                    </div>
                    <div className="text-[26px] font-bold text-gray-800 tracking-tighter lowercase">zoom</div>
                    <div className="text-[22px] font-bold text-gray-800">Mozilla.ai</div>
                    <div className="text-[22px] font-bold text-gray-800 tracking-widest uppercase flex items-center gap-2">
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                        NVIDIA
                    </div>
                    <div className="text-[20px] font-bold text-gray-800 tracking-[0.2em] uppercase">ERICSSON</div>
                </div> */}

                <div className="mt-8 w-full flex justify-center perspective-[1000px]">
                    <DashboardMockup />
                </div>
            </div>
        </section>
    );
};

export default HeroComp;
