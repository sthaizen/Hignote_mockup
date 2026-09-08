import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ReviewCard = ({ study }) => {
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        document.querySelectorAll('video').forEach(vid => {
          if (vid !== videoRef.current) {
            vid.pause();
          }
        });
        videoRef.current.play();
      }
    }
  };

  const isHovered = useRef(false);

  const onEnter = contextSafe(() => {
    isHovered.current = true;
    gsap.to('.bottom-content', { y: 20, opacity: 0, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
    gsap.to('.blur-overlay', { y: 20, opacity: 0, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
    gsap.to('.play-pill', { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)', overwrite: 'auto' });
  });

  const onLeave = contextSafe(() => {
    isHovered.current = false;
    gsap.to('.play-pill', { y: 20, scale: 0.9, opacity: 0, duration: 0.3, ease: 'power2.in', overwrite: 'auto' });

    if (!isPlaying) {
      gsap.to('.bottom-content', { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', overwrite: 'auto', delay: 0.1 });
      gsap.to('.blur-overlay', { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
    }
  });

  useEffect(() => {
    if (!isPlaying && !isHovered.current) {
      contextSafe(() => {
        gsap.to('.bottom-content', { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
        gsap.to('.blur-overlay', { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
      })();
    }
  }, [isPlaying, contextSafe]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative cursor-pointer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (study.video) togglePlay();
      }}
    >
      {study.video ? (
        <video
          ref={videoRef}
          src={study.video}
          poster={study.image}
          className="media-element w-full h-full object-cover"
          loop
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      ) : (
        <img
          src={study.image}
          alt={study.company}
          className="media-element w-full h-full object-cover"
        />
      )}

      <div
        className="blur-overlay absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none backdrop-blur-[4px]"
        style={{
          maskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 100%)'
        }}
      ></div>

      <div className="absolute top-5 left-5 right-5 flex items-center justify-end z-10 pointer-events-none">
        <span className="text-white font-bold text-[16px] tracking-tight drop-shadow-md">{study.company}</span>
      </div>

      <div className="bottom-content absolute bottom-6 left-5 right-5 z-10 pointer-events-none">
        <p className="text-[22px] md:text-[22px] leading-[1.2] font-medium text-white drop-shadow-md mb-3">
          {study.quote}
        </p>
        <div className="mt=0">
          <p className="text-[13px] font-semibold text-white/90">{study.author}</p>
          <p className="text-[12px] text-white/60 mt-0.5">{study.role}</p>
        </div>
      </div>

      <button
        className="play-pill absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-[#0A0B1A] text-[15px] font-medium px-2 py-1 rounded-[32px] flex items-center gap-2 shadow-lg z-20 opacity-0 translate-y-5 scale-90"
      >
        <div className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50">
          {isPlaying ? (
            <div className="flex gap-[3px] items-center h-2.5">
              <span className="w-[2.5px] h-full bg-black rounded-sm"></span>
              <span className="w-[2.5px] h-full bg-black rounded-sm"></span>
            </div>
          ) : (
            <Play className="w-3.5 h-3.5 translate-x-[1px]" fill="currentColor" />
          )}
        </div>
        {isPlaying ? 'Pause story' : 'Play story'}
      </button>
    </div>
  );
};

const ReviewsSection = () => {
  const scrollRef = useRef(null);
  const cardsRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0.5);

  const CAROUSEL_CONFIG = {
    centerScale: 1,
    centerOpacity: 1,
    middleScale: 0.9,
    middleOpacity: 0.9,
    edgeScale: 0.8,
    edgeOpacity: 0.7,
    scrollPixels: 350,
    edgeFadeWidth: "15%",
    edgeFadeColor: "#f5f3eb",
    edgeFadeStart: 0,
    edgeFadeEnd: 20,
  };

  const studies = [
    {
      id: 1,
      category: 'RESTAURANT OPERATIONS',
      company: 'Himalayan Java',
      quote: '"RestroHub keeps our daily operations organized and easy to manage."',
      author: 'Suman Shrestha',
      role: 'Restaurant Operations Manager',
      image: '/qq.png',
      video: '/lloo.mp4',
    },
    {
      id: 2,
      category: 'ORDER MANAGEMENT',
      company: 'Burger House',
      quote: '"Managing orders is faster, clearer, and much more reliable."',
      author: 'Aayush Karki',
      role: 'Branch Manager',
      image: '/asad.png',
      video: '/tsa.mp4',
    },
    {
      id: 3,
      category: 'INVENTORY CONTROL',
      company: 'Bajeko Sekuwa',
      quote: '"We always know what is in stock and what needs attention."',
      author: 'Prabin Thapa',
      role: 'Restaurant Manager',
      image: '/asdzc.png',
      video: '/lloo.mp4',
    },
    {
      id: 4,
      category: 'SALES INSIGHTS',
      company: 'Roadhouse Cafe',
      quote: '"RestroHub gives us a clear picture of sales every single day."',
      author: 'Nischal Maharjan',
      role: 'Operations Director',
      image: '/qq.png',
      video: '/tsa.mp4',
    },
    {
      id: 5,
      category: 'KITCHEN OPERATIONS',
      company: 'Thakali Kitchen',
      quote: '"Kitchen orders are clearer, helping our team serve customers faster."',
      author: 'Sujan Gurung',
      role: 'Kitchen Manager',
      image: '/asvvv.png',
      video: '/lloo.mp4',
    },
    {
      id: 6,
      category: 'STAFF MANAGEMENT',
      company: 'Newari Bhoj',
      quote: '"Managing staff roles and daily responsibilities is now much simpler."',
      author: 'Anisha Shrestha',
      role: 'Restaurant Supervisor',
      image: '/aacac.png',
      video: '/tsa.mp4',
    },
    {
      id: 7,
      category: 'MULTI-BRANCH MANAGEMENT',
      company: 'Kathmandu Grill',
      quote: '"We can monitor every branch from one place without the usual hassle."',
      author: 'Rohan Karki',
      role: 'Operations Manager',
      image: '/qq.png',
      video: '/lloo.mp4',
    },
    {
      id: 8,
      category: 'BUSINESS INSIGHTS',
      company: 'Momo House',
      quote: '"The reports help us understand performance and make better decisions."',
      author: 'Bikash Lama',
      role: 'Restaurant Owner',
      image: '/qq.png',
      video: '/tsa.mp4',
    }
  ];

  const infiniteStudies = [
    ...studies.map(s => ({ ...s, uniqueId: `prev-${s.id}` })),
    ...studies.map(s => ({ ...s, uniqueId: `curr-${s.id}` })),
    ...studies.map(s => ({ ...s, uniqueId: `next-${s.id}` }))
  ];

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    const middleIndex = studies.length;
    const middleCard = track.children[middleIndex];
    if (middleCard) {
      setTimeout(() => {
        middleCard.scrollIntoView({ behavior: 'instant', inline: 'center' });
      }, 10);
    }

    let rafId;

    const updateCards = () => {
      if (!track) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(track.scrollLeft / maxScroll);
      }

      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;

      cardsRef.current.forEach((card) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;

        const distance = Math.abs(trackCenter - cardCenter);

        const cardWidth = card.offsetWidth + 20;
        const normalizedDistance = distance / cardWidth;

        if (normalizedDistance > 0.8) {
          const video = card.querySelector('video');
          if (video && !video.paused) {
            video.pause();
          }
        }

        let scale, opacity;

        if (normalizedDistance <= 1) {
          const t = normalizedDistance;
          scale = CAROUSEL_CONFIG.centerScale - t * (CAROUSEL_CONFIG.centerScale - CAROUSEL_CONFIG.middleScale);
          opacity = CAROUSEL_CONFIG.centerOpacity - t * (CAROUSEL_CONFIG.centerOpacity - CAROUSEL_CONFIG.middleOpacity);
        } else {
          const t = Math.min(1, normalizedDistance - 1);
          scale = CAROUSEL_CONFIG.middleScale - t * (CAROUSEL_CONFIG.middleScale - CAROUSEL_CONFIG.edgeScale);
          opacity = CAROUSEL_CONFIG.middleOpacity - t * (CAROUSEL_CONFIG.middleOpacity - CAROUSEL_CONFIG.edgeOpacity);
        }

        card.style.transform = `scale(${scale})`;
        card.style.opacity = opacity;
        card.style.filter = 'none';
        card.style.zIndex = Math.round(100 - normalizedDistance * 10);
      });
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCards);
    };

    setTimeout(updateCards, 50);

    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [studies.length]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = CAROUSEL_CONFIG.scrollPixels;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="isolate z-0 w-full bg-[#f5f3eb] font-['DM_Sans',sans-serif] pt-4 pb-2 relative overflow-hidden pt-20 pb-2">
      <div className="w-full max-w-[1500px] mx-auto px-4 md:px-8">
        <div className="mb-22 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="font-display max-w-7xl text-[24px] lg:text-[54px] text-black leading-[1.1] font-normal tracking-tight">
              Built for restaurants that want to grow,
              <br className="hidden md:block" />
              <span className="opacity-40">trusted by teams that use it every day</span>
            </h2>

            <p className="max-w-lg pt-4 text-[18px] opacity-60 text-black">
              See how restaurants use RestroHub to simplify operations, stay in control, and make smarter decisions.
            </p>
          </div>
          <div className="flex flex-col items-end gap-6 mt-8 md:mt-0 md:mb-4 shrink-0">
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12  border-1 border-[#17171C]/40 flex items-center justify-center hover:bg-white transition-all bg-transparent"
                aria-label="Previous"
              >
                <ArrowLeft className="w-5 h-5 text-black" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12  border-1 border-[#17171C]/40 flex items-center justify-center hover:bg-white transition-all bg-transparent"
                aria-label="Next"
              >
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="w-[320px] h-1 bg-[#17171C]/20 rounded-full relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-1 w-[110px] rounded-full"
                style={{
                  transform: `translateX(${scrollProgress * (320 - 110)}px)`,
                  background: 'linear-gradient(to right, #FF7A59, #8A2BE2, #4169E1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full">

        {/* <div className="absolute top-0 -left-50 bottom-0 w-[15%] md:w-[30%] bg-gradient-to-r from-[#f5f3eb] via-[#f5f3eb] to-transparent z-[200] pointer-events-none"></div>

       
        <div className="absolute top-0 -right-50 bottom-0 w-[15%] md:w-[30%] bg-gradient-to-l from-[#f5f3eb] via-[#f5f3eb] to-transparent z-[200] pointer-events-none"></div> */}

        <div className="w-full">
          <div
            ref={scrollRef}
            className="flex gap-0 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {infiniteStudies.map((study, index) => (
              <div
                key={study.uniqueId}
                ref={el => cardsRef.current[index] = el}
                className="flex-shrink-0 w-[300px] md:w-[340px] h-[480px] snap-center rounded-2xl overflow-hidden relative shadow-sm origin-center"
              >
                <ReviewCard study={study} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
