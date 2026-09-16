import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TrendingUp, Clock, Utensils, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StatsComponent = () => {
  const sectionRef = useRef(null);
  
  // Refs for numbers to animate them
  const ordersRef = useRef(null);
  const timeRef = useRef(null);
  const revenueRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate header
    tl.fromTo('.stat-header', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    // Animate cards staggering
    tl.fromTo('.stat-card',
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.2)' },
      '-=0.4'
    );

    // Counter animations
    // We animate a dummy object and update the text on each tick
    
    // Total Orders (2M+)
    const ordersObj = { val: 0 };
    tl.to(ordersObj, {
      val: 2,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => {
        if(ordersRef.current) ordersRef.current.innerText = `${Math.floor(ordersObj.val)}M+`;
      }
    }, '-=0.5');

    // Average Prep Time (12min)
    const timeObj = { val: 0 };
    tl.to(timeObj, {
      val: 12,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => {
        if(timeRef.current) timeRef.current.innerText = Math.floor(timeObj.val);
      }
    }, '<');

    // Revenue Growth (45%)
    const revenueObj = { val: 0 };
    tl.to(revenueObj, {
      val: 45,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => {
        if(revenueRef.current) revenueRef.current.innerText = `${Math.floor(revenueObj.val)}%`;
      }
    }, '<');

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-[120px] bg-[#fdfcfa] relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#dcf335]/20 via-emerald-100/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-amber-400/10 via-orange-100/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1300px] mx-auto px-[24px] relative z-10">
        
        <div className="stat-header mb-[80px] text-center max-w-[700px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-black/5 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#dcf335] animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-black/70 uppercase">Platform Scale</span>
          </div>
          <h2 className="text-[48px] md:text-[56px] font-semibold text-gray-900 leading-[1.1] tracking-tight mb-[24px]">
            Trusted by the fastest growing restaurants
          </h2>
          <p className="text-[20px] text-black/60 leading-relaxed font-medium">
            Our platform scales with your business, delivering metrics that matter when you need them most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          {/* Stat 1: Glassmorphism */}
          <div className="stat-card bg-white/70 backdrop-blur-xl border border-white/80 p-[48px] rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-[8px] transition-all duration-500 ease-out group relative">
            <div className="absolute top-[48px] right-[48px] w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-gray-900 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
              <Utensils size={24} strokeWidth={1.5} />
            </div>
            
            <h4 className="text-[18px] font-semibold text-black/40 mb-[16px] group-hover:text-black/60 transition-colors uppercase tracking-wider">Total Orders</h4>
            <div className="text-[72px] font-bold text-gray-900 leading-none tracking-tighter mb-[24px]">
              <span ref={ordersRef}>0M+</span>
            </div>
            <p className="text-[17px] text-black/50 leading-relaxed font-medium">
              Handling peak hours effortlessly across all our partner branches nationwide.
            </p>
          </div>
          
          {/* Stat 2: Glassmorphism */}
          <div className="stat-card bg-white/70 backdrop-blur-xl border border-white/80 p-[48px] rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-[8px] transition-all duration-500 ease-out group relative">
            <div className="absolute top-[48px] right-[48px] w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-gray-900 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
              <Clock size={24} strokeWidth={1.5} />
            </div>

            <h4 className="text-[18px] font-semibold text-black/40 mb-[16px] group-hover:text-black/60 transition-colors uppercase tracking-wider">Prep Time</h4>
            <div className="text-[72px] font-bold text-gray-900 leading-none tracking-tighter mb-[24px] flex items-baseline">
              <span ref={timeRef}>0</span>
              <span className="text-[32px] font-semibold text-gray-400 ml-2">min</span>
            </div>
            <p className="text-[17px] text-black/50 leading-relaxed font-medium">
              Optimized kitchen syncing consistently reduces customer wait times.
            </p>
          </div>
          
          {/* Stat 3: Accent Card */}
          <div className="stat-card bg-[#dcf335] border border-[#cde42a] p-[48px] rounded-[40px] shadow-[0_20px_40px_rgba(220,243,53,0.15)] hover:shadow-[0_30px_60px_rgba(220,243,53,0.25)] hover:-translate-y-[8px] transition-all duration-500 ease-out group relative overflow-hidden flex flex-col justify-between">
            <div>
              {/* Inner glow effect for accent card */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/30 blur-[60px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
              
              <div className="absolute top-[48px] right-[48px] w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-black/60 group-hover:text-black group-hover:bg-black/10 transition-all duration-300">
                <TrendingUp size={24} strokeWidth={1.5} />
              </div>

              <h4 className="text-[18px] font-semibold text-black/60 mb-[16px] group-hover:text-black/80 transition-colors uppercase tracking-wider relative z-10">Revenue Growth</h4>
              <div className="text-[72px] font-bold text-gray-900 leading-none tracking-tighter mb-[24px] relative z-10">
                <span ref={revenueRef}>0%</span>
              </div>
              <p className="text-[17px] text-black/70 leading-relaxed font-medium relative z-10">
                Average increase in monthly revenue reported by our early adopters.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between cursor-pointer group/link relative z-10">
              <span className="text-black/80 font-semibold group-hover/link:text-black transition-colors">View case study</span>
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover/link:scale-110 transition-transform">
                <ArrowUpRight size={20} className="text-[#dcf335]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsComponent;
