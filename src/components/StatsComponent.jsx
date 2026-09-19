import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TrendingUp, Clock, Utensils, ArrowUpRight, Star, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StatsComponent = () => {
  const sectionRef = useRef(null);
  
  // Refs for numbers to animate them
  const ordersRef = useRef(null);
  const timeRef = useRef(null);
  const revenueRef = useRef(null);
  const satisfactionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate header with a sleek reveal
    tl.fromTo('.stat-badge', 
      { y: 20, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' }
    )
    .fromTo('.stat-title', 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo('.stat-desc', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );

    // Bento cards stagger animation with 3D feel
    tl.fromTo('.bento-card',
      { y: 80, opacity: 0, scale: 0.95, rotateX: 10 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        rotateX: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power3.out',
        transformPerspective: 1000
      },
      '-=0.4'
    );

    // Counter animations
    const counters = [
      { obj: { val: 0 }, target: 45, ref: revenueRef, suffix: '%', duration: 2 },
      { obj: { val: 0 }, target: 2.4, ref: ordersRef, suffix: 'M+', duration: 2 },
      { obj: { val: 0 }, target: 12, ref: timeRef, suffix: ' min', duration: 1.5 },
      { obj: { val: 0 }, target: 99, ref: satisfactionRef, suffix: '%', duration: 1.8 },
    ];

    counters.forEach((counter) => {
      tl.to(counter.obj, {
        val: counter.target,
        duration: counter.duration,
        ease: 'power2.out',
        onUpdate: () => {
          if (counter.ref.current) {
            const isFloat = counter.target % 1 !== 0;
            const value = isFloat ? counter.obj.val.toFixed(1) : Math.floor(counter.obj.val);
            counter.ref.current.innerText = `${value}${counter.suffix}`;
          }
        }
      }, '-=1.2');
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-[120px] bg-[#fdfcfa] relative overflow-hidden font-sans">
      {/* Refined Background Glows */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#dcf335]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-400/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-[1300px] mx-auto px-[24px] relative z-10">
        
        {/* Header Section */}
        <div className="mb-[80px] max-w-[700px]">
          <div className="stat-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-[#dcf335] animate-pulse"></div>
            <span className="text-sm font-semibold tracking-wide text-gray-800 uppercase">Platform Scale</span>
          </div>
          <h2 className="stat-title text-[48px] md:text-[64px] font-bold text-gray-900 leading-[1.05] tracking-tight mb-[24px]">
            Numbers that <br/><span className="text-gray-400">speak for themselves</span>
          </h2>
          <p className="stat-desc text-[20px] text-gray-600 leading-relaxed font-medium max-w-[500px]">
            Our platform scales with your business, delivering metrics that matter when you need them most.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-[24px] md:h-[600px] auto-rows-[280px] md:auto-rows-auto">
          
          {/* Card 1: Revenue Growth (Large Accent) */}
          <div className="bento-card md:col-span-2 md:row-span-2 bg-[#dcf335] rounded-[32px] p-[48px] flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_32px_64px_rgba(220,243,53,0.25)] transition-all duration-500 ease-out hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/40 blur-[80px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center text-black/80 mb-8 group-hover:bg-black group-hover:text-[#dcf335] transition-colors duration-300">
                <TrendingUp size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[20px] font-semibold text-black/70 mb-4 uppercase tracking-wider">Revenue Growth</h4>
              <div className="text-[100px] md:text-[120px] font-bold text-black leading-none tracking-tighter mb-4">
                <span ref={revenueRef}>0%</span>
              </div>
              <p className="text-[18px] text-black/70 font-medium max-w-[300px] leading-relaxed">
                Average increase in monthly revenue reported by our early adopters within 6 months.
              </p>
            </div>

            <div className="relative z-10 mt-12 flex items-center justify-between border-t border-black/10 pt-6 cursor-pointer group/btn">
              <span className="text-[18px] font-semibold text-black group-hover/btn:underline underline-offset-4 decoration-2">Read Case Study</span>
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300">
                <ArrowUpRight size={24} className="text-[#dcf335]" />
              </div>
            </div>
          </div>

          {/* Card 2: Total Orders (Dark Wide) */}
          <div className="bento-card md:col-span-2 md:row-span-1 bg-[#111111] rounded-[32px] p-[40px] flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <h4 className="text-[18px] font-semibold text-white/50 mb-2 uppercase tracking-wider">Total Orders</h4>
                <div className="text-[64px] font-bold text-white leading-none tracking-tighter">
                  <span ref={ordersRef}>0M+</span>
                </div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-[#dcf335] group-hover:text-black transition-colors duration-300">
                <Activity size={28} strokeWidth={1.5} />
              </div>
            </div>
            <p className="relative z-10 text-[16px] text-white/60 font-medium max-w-[350px]">
              Handling peak hours effortlessly across all our partner branches nationwide.
            </p>
          </div>

          {/* Card 3: Prep Time (Small Light) */}
          <div className="bento-card md:col-span-1 md:row-span-1 bg-white border border-gray-100 rounded-[32px] p-[32px] flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out hover:-translate-y-2">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors duration-300">
                <Clock size={24} strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <div className="text-[48px] font-bold text-gray-900 leading-none tracking-tighter mb-2">
                <span ref={timeRef}>0 min</span>
              </div>
              <h4 className="text-[16px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Avg Prep Time</h4>
              <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
                Optimized kitchen syncing reduces wait times.
              </p>
            </div>
          </div>

          {/* Card 4: Satisfaction (Small Light) */}
          <div className="bento-card md:col-span-1 md:row-span-1 bg-white border border-gray-100 rounded-[32px] p-[32px] flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out hover:-translate-y-2">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors duration-300">
                <Star size={24} strokeWidth={1.5} fill="currentColor" className="text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </div>
            <div>
              <div className="text-[48px] font-bold text-gray-900 leading-none tracking-tighter mb-2">
                <span ref={satisfactionRef}>0%</span>
              </div>
              <h4 className="text-[16px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Satisfaction</h4>
              <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
                Consistently high ratings from happy diners.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsComponent;
