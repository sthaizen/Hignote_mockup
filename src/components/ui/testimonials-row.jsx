"use client";
import React from "react";

export const TestimonialsRow = (props) => {
  const isRight = props.direction === 'right';
  const duration = props.duration || 10;

  return (
    <div className={`flex ${props.className || ''}`}>
      <style>{`
        @keyframes scroll-row-${isRight ? 'right' : 'left'} {
          0% { transform: translateX(${isRight ? '-25%' : '0'}); }
          100% { transform: translateX(${isRight ? '0' : '-25%'}); }
        }
      `}</style>
      <div
        className="flex gap-[16px] pr-[16px] w-max shrink-0"
        style={{
          animationName: `scroll-row-${isRight ? 'right' : 'left'}`,
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: props.isPaused ? 'paused' : 'running',
          animationDelay: props.delay ? `${props.delay}s` : '0s'
        }}
      >
        {[
          ...new Array(4).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="w-[320px] h-[192px] p-[20px] rounded-[16px] border border-[#dedcdb] bg-[#f5f3eb] shrink-0 flex flex-col justify-start cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,0,0,0.12)] hover:bg-[#f5f3eb] relative hover:z-10 overflow-hidden" key={i}>
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-[40px] w-[40px] shrink-0 rounded-lg object-cover"
                    />
                    <div className="flex flex-col overflow-hidden">
                      <div className="font-normal text-[14px] text-gray-900 truncate">{name}</div>
                      <div className="text-[13px] text-black/60 font-normal truncate">{role}</div>
                    </div>
                  </div>
                  <div className="text-gray-700 text-[14px] leading-[1.5] font-normal">{text}</div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </div>
    </div>
  );
};
