import React from 'react';

const StatsComponent = () => {
  return (
    <section className="py-[120px] bg-[#f5f3eb] relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#dcf335]/30 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1300px] mx-auto px-[24px] relative z-10">
        
        <div className="mb-[64px] text-center max-w-[700px] mx-auto">
          <h2 className="text-[42px] font-medium text-gray-900 leading-tight tracking-tight mb-[16px]">
            Trusted by the fastest growing restaurants
          </h2>
          <p className="text-[18px] text-black/50 leading-relaxed">
            Our platform scales with your business, delivering metrics that matter when you need them most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {/* Stat 1: Glassmorphism */}
          <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-[48px] rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.08)] hover:-translate-y-[6px] transition-all duration-500 ease-out group">
            <h4 className="text-[18px] font-medium text-black/50 mb-[16px] group-hover:text-black/80 transition-colors">Total Orders Processed</h4>
            <div className="text-[64px] font-bold text-gray-900 leading-none tracking-tighter mb-[20px]">2M+</div>
            <p className="text-[16px] text-black/50 leading-relaxed">
              Handling peak hours effortlessly across all our partner branches nationwide.
            </p>
          </div>
          
          {/* Stat 2: Glassmorphism */}
          <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-[48px] rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.08)] hover:-translate-y-[6px] transition-all duration-500 ease-out group">
            <h4 className="text-[18px] font-medium text-black/50 mb-[16px] group-hover:text-black/80 transition-colors">Average Prep Time</h4>
            <div className="text-[64px] font-bold text-gray-900 leading-none tracking-tighter mb-[20px]">
              12<span className="text-[32px] font-medium text-gray-500 ml-1">min</span>
            </div>
            <p className="text-[16px] text-black/50 leading-relaxed">
              Optimized kitchen syncing consistently reduces customer wait times.
            </p>
          </div>
          
          {/* Stat 3: Accent Card */}
          <div className="bg-[#dcf335] border border-[#cde42a] p-[48px] rounded-[32px] shadow-[0_8px_32px_rgba(220,243,53,0.15)] hover:shadow-[0_24px_64px_rgba(220,243,53,0.3)] hover:-translate-y-[6px] transition-all duration-500 ease-out group relative overflow-hidden">
            {/* Inner glow effect for accent card */}
            <div className="absolute -top-[100px] -right-[100px] w-[250px] h-[250px] bg-white/40 blur-[50px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>

            <h4 className="text-[18px] font-medium text-black/60 mb-[16px] group-hover:text-black/80 transition-colors relative z-10">Revenue Growth</h4>
            <div className="text-[64px] font-bold text-gray-900 leading-none tracking-tighter mb-[20px] relative z-10">45%</div>
            <p className="text-[16px] text-black/70 leading-relaxed relative z-10">
              Average increase in monthly revenue reported by our early adopters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsComponent;
