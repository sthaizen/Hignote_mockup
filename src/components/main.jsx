import React from 'react';
import { ArrowRight, QrCode, Store, Sparkles, Plus } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Main = () => {
  const containerRef = React.useRef(null);

  useGSAP(() => {
    // Simple float animation for the cards to make them feel alive
    gsap.to('.float-card-1', {
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to('.float-card-2', {
      y: 15,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5,
    });
    gsap.to('.float-card-3', {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1,
    });
  }, { scope: containerRef });

  return (
    <>
      {/* Absolute Background */}
      <div 
        className="hero-background" 
        style={{ 
          width: '100%', 
          height: '130vh', 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          zIndex: -1,
          backgroundImage: "url('/Gradbg.png')",
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>

      <section ref={containerRef} className="relative w-full min-h-screen pt-[12vh] flex flex-col items-center font-['Inter',sans-serif] z-10 overflow-hidden">
        {/* Top Typography Section */}
        <div className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto mb-12">
          <p className="text-[11px] font-mono text-gray-400 tracking-wider mb-4 flex items-center gap-2">
            RestroHub makes ordering simple <ArrowRight size={12} />
          </p>

          <h1 className="text-[2.75rem] md:text-[3rem] leading-[1.1] font-semibold text-[#111111] tracking-tight mb-5">
            Smarter orders. Faster service.<br className="hidden md:block" /> Happier customers.
          </h1>

          <p className="text-base md:text-lg text-gray-500 max-w-xl mb-8 leading-relaxed">
            RestroHub helps restaurants take QR orders, manage sales,<br className="hidden md:block" /> and serve customers — all in one place.
          </p>

          <button className="bg-[#0f0f0f] text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-black hover:scale-105 transition-all duration-300 shadow-lg font-medium text-sm">
            Start your free trial <ArrowRight size={16} />
          </button>
        </div>

        {/* Phone and Floating Cards Section */}
        <div className="relative w-full max-w-[280px] md:max-w-[320px] mx-auto mt-8 flex-grow flex items-end">
          {/* The Phone Mockup */}
          <img
            src="/phn.png"
            alt="RestroHub App on Phone"
            className="w-full h-auto relative z-10 drop-shadow-2xl"
            onError={(e) => {
              // Fallback just in case Phone.png isn't loading properly
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          {/* Fallback frame if Phone.png is missing */}
          <div className="hidden w-full h-[700px] border-[12px] border-gray-900 rounded-[3rem] bg-gray-50 relative z-10 shadow-2xl overflow-hidden">
            {/* dynamic island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full"></div>
            <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>

          {/* --- Floating Cards --- */}

          {/* Card 1: Restaurant Goals (Left) */}
          <div className="float-card-1 absolute top-[15%] -left-[40%] md:-left-[70%] w-[280px] md:w-[320px] bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] p-5 z-20">
            <h3 className="text-sm font-medium text-gray-700 mb-4 ml-1">Restaurant goals</h3>

            <div className="bg-white/90 backdrop-blur-md rounded-[1.25rem] p-4 mb-3 shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-blue-500 text-[11px] font-medium mb-1">QR Ordering</p>
                <p className="text-2xl font-semibold text-gray-900 leading-none">549 <span className="text-sm font-normal text-gray-600">scans</span></p>
                <p className="text-[10px] text-gray-400 mt-1.5">by Nov, 2025</p>
              </div>
              <div className="w-12 h-12 rounded-full border-[3px] border-emerald-400 flex items-center justify-center">
                <QrCode size={20} className="text-gray-700" />
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-[1.25rem] p-4 mb-4 shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-blue-500 text-[11px] font-medium mb-1">New Branch</p>
                <p className="text-2xl font-semibold text-gray-900 leading-none">48,000 <span className="text-sm font-normal text-gray-600">orders</span></p>
                <p className="text-[10px] text-gray-400 mt-1.5">by June, 2026</p>
              </div>
              <div className="w-12 h-12 rounded-full border-[3px] border-orange-500 flex items-center justify-center">
                <Store size={20} className="text-gray-700" />
              </div>
            </div>

            <button className="w-full py-3 rounded-2xl border border-dashed border-gray-300 text-gray-500 text-xs font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center"><Plus size={14} className="text-gray-400" /></div>
              Add a new goal
            </button>
          </div>

          {/* Card 2: Daily Sales (Top Right) */}
          <div className="float-card-2 absolute top-[30%] -right-[30%] md:-right-[60%] w-[260px] md:w-[320px] bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-[1.5rem] p-6 z-20 flex flex-col justify-between">
            <h3 className="text-sm font-medium text-gray-700 mb-6">Daily Sales</h3>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[1.75rem] font-semibold text-gray-900 mb-1 leading-none">Rs 52,364</p>
                <div className="flex gap-3 mt-2">
                  <span className="text-[8px] font-bold text-blue-600 tracking-wider uppercase">Live Orders</span>
                  <span className="text-[8px] font-bold text-blue-600 tracking-wider uppercase">Weekly Sales</span>
                </div>
              </div>
              <div className="flex gap-2 items-end pl-2">
                <div className="w-[14px] h-8 bg-gray-200 rounded-[3px]"></div>
                <div className="w-[14px] h-12 bg-gray-200 rounded-[3px]"></div>
                <div className="w-[14px] h-16 bg-pink-600 rounded-[3px]"></div>
                <div className="w-[14px] h-7 bg-teal-600 rounded-[3px]"></div>
                <div className="w-[14px] h-10 bg-gray-200 rounded-[3px]"></div>
              </div>
            </div>
          </div>

          {/* Card 3: Ask RestroBuddy (Bottom Right) */}
          <div className="float-card-3 absolute bottom-[15%] -right-[20%] md:-right-[35%] w-[200px] md:w-[240px] bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-3xl p-5 z-20">
            <div className="flex items-center justify-center mb-5 mt-2">
              <div className="w-[52px] h-[52px] rounded-full border-[3px] border-emerald-400 flex items-center justify-center bg-white shadow-sm">
                <Sparkles size={24} className="text-gray-600" />
              </div>
            </div>
            <div className="bg-white rounded-full py-2.5 px-4 shadow-sm flex items-center justify-between border border-gray-100">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-blue-600" />
                <span className="text-[11px] font-medium text-gray-600">Ask RestroBuddy</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center shadow-md">
                <ArrowRight size={12} className="text-white" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Main;
