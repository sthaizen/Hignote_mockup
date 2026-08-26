import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StatsComp = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%', // Changed to top 60% so it starts only when user actually reaches it
        toggleActions: 'play none none reverse'
      }
    });

    // Removed GSAP blink dot since we are using CSS dot-blink class instead

    // Header elements fade up
    tl.fromTo('.stat-header-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', stagger: 0.05 },
      0
    );

    // Fade in the columns
    tl.fromTo('.stat-col',
      { opacity: 0 },
      { opacity: 1, duration: 0.3, stagger: 0.07, ease: 'power2.out' },
      0.1
    );

    // Content slides out
    tl.fromTo('.stat-content',
      { opacity: 0, x: -25 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.07, ease: 'power3.out' },
      0.15
    );

    // Circle progress
    tl.fromTo('.circle-progress',
      { strokeDashoffset: 314 },
      { strokeDashoffset: 34.5, duration: 1, ease: 'power3.out' },
      0.25
    );

    // Dot graph dots (color fill)
    tl.from('.dot-fill-anim', {
      fill: '#e5e5e7',
      duration: 0.05,
      stagger: 0.02,
      ease: 'none'
    }, 0.25);

    // Checkmark appears
    tl.from('.dot-check-anim', {
      opacity: 0,
      duration: 0.1
    }, 1.3);

    // Dot graph lines
    tl.to('.dot-line-anim',
      { strokeDashoffset: 0, duration: 0.4, stagger: 0.2, ease: 'none' },
      0.5
    );

    // Line graph path & axes
    const path = document.querySelector('.line-graph-path');
    if (path) {
      const length = path.getTotalLength();
      tl.fromTo(path,
        { strokeDasharray: length, strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 2, ease: 'power3.out' },
        0.5
      );
    }

    const axes = document.querySelectorAll('.axis-line');
    axes.forEach(axis => {
      const len = axis.getTotalLength();
      tl.fromTo(axis,
        { strokeDasharray: len, strokeDashoffset: len },
        { strokeDashoffset: 0, duration: 1.5, ease: 'power2.out' },
        0.5
      );
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-32 px-6 bg-[#f6f6f6] font-['DM_Sans',sans-serif] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 md:gap-12">

        {/* Left Sidebar: Tag */}
        <div className="w-full md:w-[25%] lg:w-[20%] shrink-0">
          <div className="flex items-center gap-3 text-[#60646C] text-[13px] font-medium tracking-wide uppercase leading-none md:ml-5 pt-4 stat-header-anim">
            <span className="dot-blink w-1.5 h-1.5 rounded-full bg-[#60646C] shrink-0"></span>
            <span>WHY CHOOSE SPACER?</span>
          </div>
        </div>

        {/* Right Content Area: Title + Stats */}
        <div className="w-full md:w-[75%] lg:w-[80%] flex flex-col">

          {/* Header Section */}
          <div className="flex flex-col max-w-[800px] mb-15">
            <h2 className="text-[60px] md:text-[80px] leading-[0.9] text-[#000000] tracking-[-0.03em] font-medium mb-6 flex flex-col">
              <span className="stat-header-anim block">PROOF OF</span>
              <span className="stat-header-anim block">OUTCOME</span>
            </h2>

            <p className="max-w-[550px] text-[16px] text-[#60646C] leading-relaxed mb-8 stat-header-anim">
              We combine identity, clarity, and execution into a structured partnership that removes guesswork and builds momentum from day one.
            </p>

            <div className="stat-header-anim">
              <button className="inline-flex items-center gap-3 bg-[#eeeeee] hover:bg-[#eeeeee] transition-colors px-4 py-2.5 rounded-[12px] text-[13px] font-semibold text-[#000000]">
                START YOUR PROJECT
                <span className="bg-white border border-[#d5d5d8] rounded-[6px] p-0.5 shadow-sm">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>

          {/* Stats Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap- lg:gap-10 items-start w-full pr-4 md:pr-0 ml-20">

            {/* Column 1: Client Satisfaction */}
            <div className="relative pl-0 md:pl-7 border-l border-[#d5d5d8] stat-col mt-0">
              <div className="stat-content">
                <div className="w-[140px] h-[140px] mb-10">
                  <svg width="140" height="140" viewBox="0 0 120 120" className="-rotate-90">
                    <circle cx="60" cy="60" r="50" stroke="#e5e5e7" strokeWidth="14" fill="none" />
                    <circle cx="60" cy="60" r="50" stroke="#000000" strokeWidth="14" fill="none"
                      strokeDasharray="314" strokeDashoffset="314" strokeLinecap="round"
                      className="circle-progress" />
                  </svg>
                </div>

                <h3 className="text-[54px] text-[#0A0A0A] font-medium leading-none tracking-tight mt-12 mb-2">
                  <span className="counter-89">89</span>%
                </h3>
                <h4 className="text-[30px] text-[#000000] font-medium leading-tight mb-4">
                  Client Satisfaction
                </h4>
                <p className="text-[#60646C] text-[15px] leading-relaxed max-w-[280px]">
                  Measured through clear post-launch feedback and adoption.
                </p>
              </div>
            </div>

            {/* Column 2: Delivery Time */}
            <div className="relative pl-8 md:pl-5 border-l border-[#d5d5d8] stat-col mt-16 md:mt-28">
              <div className="stat-content">
                <div className="w-[150px] h-[150px] mb-2 relative">
                  <svg width="150" height="150" viewBox="0 0 150 150" className="overflow-visible">
                    {/* Background lines */}
                    {[0, 1, 2, 3].map(row => {
                      const y = 25.5 + row * 33;
                      return <line key={`bg-${row}`} x1="9" y1={y} x2="141" y2={y} stroke="#e5e5e7" strokeWidth="2.5" />
                    })}

                    {/* Animated foreground lines */}
                    {[0, 1, 2].map(row => {
                      const y = 25.5 + row * 33;
                      const x2 = row < 2 ? 141 : 108;
                      const length = x2 - 9;
                      return (
                        <line
                          key={`fg-${row}`}
                          x1="9" y1={y} x2={x2} y2={y}
                          stroke="#4a4c52" strokeWidth="2.5"
                          strokeDasharray={length}
                          strokeDashoffset={length}
                          className="dot-line-anim"
                        />
                      );
                    })}

                    {/* Dots */}
                    {[0, 1, 2, 3].map(row => {
                      return [0, 1, 2, 3, 4].map(col => {
                        const index = row * 5 + col;
                        const isDark = index < 14;
                        const isCheck = index === 13;
                        const cx = 9 + col * 33;
                        const cy = 25.5 + row * 33;

                        return (
                          <g key={`dot-${index}`}>
                            <circle
                              cx={cx} cy={cy}
                              r={isCheck ? 9.5 : 7.5}
                              fill={isCheck ? "#000000" : (isDark ? "#4a4c52" : "#e5e5e7")}
                              className={(isDark || isCheck) ? "dot-fill-anim" : ""}
                            />
                            {isCheck && (
                              <path
                                d={`M ${cx - 3.5} ${cy} L ${cx - 1} ${cy + 3} L ${cx + 4} ${cy - 3}`}
                                stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                className="dot-check-anim"
                              />
                            )}
                          </g>
                        )
                      })
                    })}
                  </svg>
                </div>

                <h3 className="text-[54px] text-[#0A0A0A] font-medium leading-none tracking-tight mt-12 mb-2">
                  <span className="counter-2">2</span>-Week
                </h3>
                <h4 className="text-[30px] text-[#000000] font-medium leading-tight mb-4">
                  Delivery Time
                </h4>
                <p className="text-[#60646C] text-[15px] leading-relaxed max-w-[280px]">
                  From kickoff to launch in two weeks, consistently.
                </p>
              </div>
            </div>

            {/* Column 3: More Growth */}
            <div className="relative pl-8 md:pl-5 border-l border-[#d5d5d8] stat-col mt-24 md:mt-56">
              <div className="stat-content">
                <div className="w-[140px] h-[140px] mb-10 relative flex items-center">
                  <svg width="140" height="140" viewBox="0 0 140 140" className="overflow-visible">
                    {/* Axis Background Lines */}
                    <line x1="0" y1="140" x2="0" y2="0" stroke="#e5e5e7" strokeWidth="2.5" className="axis-line" />
                    <line x1="0" y1="140" x2="140" y2="140" stroke="#e5e5e7" strokeWidth="2.5" className="axis-line" />

                    {/* Animated Curve */}
                    <path
                      d="M 0 140 C 15 50, 50 20, 130 20"
                      stroke="#000000"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="round"
                      className="line-graph-path"
                    />
                  </svg>
                </div>

                <h3 className="text-[54px] text-[#0A0A0A] font-medium leading-none tracking-tight mt-12 mb-2">
                  <span className="counter-34">3.4</span>x
                </h3>
                <h4 className="text-[30px] text-[#000000] font-medium leading-tight mb-4">
                  More Growth
                </h4>
                <p className="text-[#60646C] text-[15px] leading-relaxed max-w-[280px]">
                  Average 3.4x increase in inbound inquiries post-launch.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsComp;
