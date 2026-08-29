import React, { useState, useRef } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

const VideoPlayer = ({ study }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <div
      className="w-full h-full relative cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        togglePlay();
      }}
    >
      <video
        ref={videoRef}
        src={study.video}
        poster={study.image}
        className="w-full h-full object-cover"
        loop
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <div className="absolute top-3 right-3 z-10">
          <Play className="w-5 h-5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" fill="currentColor" />
        </div>
      )}
    </div>
  );
};

const ReviewsSection = () => {
  const studies = [
    {
      id: 1,
      title: 'Flowbit Platform',
      year: '2025',
      image: '/qq.png',
      video: '/lloo.mp4',
    },
    {
      id: 2,
      title: 'CodeZen',
      year: '2025',
      image: '/qq.png',
      video: '/tsa.mp4',
    },
    {
      id: 3,
      title: 'Mindex AI',
      year: '2025',
      image: '/qq.png',
    }
  ];

  return (
    <section className="w-full bg-[#f5f3eb] font-['DM_Sans',sans-serif] px-4 md:px-8 pt-32">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 items-stretch">

        {/* Left Column */}
        <div className="w-full lg:w-[25%] flex flex-col justify-between relative">
          <div className="flex items-center gap-3 text-[#60646C] text-[13px] font-medium tracking-wide uppercase leading-none pt-4 mb-32 lg:mb-0">
            <span className="dot-blink w-1.5 h-1.5 rounded-full bg-[#60646C] shrink-0"></span>
            <span>MORE STUDIES</span>
          </div>

          <div className="lg:pl-5 self-start w-full mt-12 lg:mt-0">
            <p className="text-[15px] text-[#60646C] leading-relaxed mb-6 max-w-[250px]">
              More identities. More outcomes.<br />See what design can unlock.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#eae7e5]  transition-colors px-4 py-2.5 rounded-[8px] text-[13px] font-semibold text-[#000000]/90">
              READ ALL STUDIES
              <span className="bg-transparent border border-[#000000]/30 rounded-md p-0.5">
                <ArrowUpRight size={14} strokeWidth={2} />
              </span>
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[75%] grid grid-cols-1 md:grid-cols-3 gap-4">
          {studies.map((study) => (
            <div key={study.id} className="flex flex-col gap-3 group cursor-pointer">
              <div className="w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden bg-gray-200 relative">
                {study.video ? (
                  <VideoPlayer study={study} />
                ) : (
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="mt-1">
                <h3 className="text-[16px] font-medium text-[#000000] leading-none mb-1.5">{study.title}</h3>
                <p className="text-[13px] text-[#60646C]">{study.year}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
