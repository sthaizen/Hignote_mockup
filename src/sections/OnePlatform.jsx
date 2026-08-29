import React from 'react';
import {
  CheckCircle2,
  Repeat,
  CircleDollarSign,
  ArrowLeftRight,
  Banknote,
  WalletCards,
  Wifi,
  Timer,
  Users,
  Wand2
} from 'lucide-react';
import data from '../data/oneplatform.json';
import AnimatedDots from '../components/AnimatedDots';

export const PATHWAY_CONFIG = {
  animationSpeed: '2s',
  particleColor: '#c8c5bc',
  particleWidth: 2,

  dotLength: 30,
  dotGap: 205,

  trackColor: '#e2e0d6',
  trackWidth: 1.5,

  logoImage: '/restro1.png',
  logoBgColor: 'logo-mesh-bg',
  logoGlowShadow: 'shadow-[0_8px_35px_rgba(162,44,219,0.45)]/20',
  logoBorderSize: 'border-2 border-white/10',

  enableFadeMask: true,
  fadeTopPercent: '35%',
  fadeBottomPercent: '65%'
};

const getDashPattern = () => `${PATHWAY_CONFIG.dotLength} ${PATHWAY_CONFIG.dotGap}`;
const getDashLoopOffset = () => PATHWAY_CONFIG.dotLength + PATHWAY_CONFIG.dotGap;

const getFadeMaskStyle = () => {
  if (!PATHWAY_CONFIG.enableFadeMask) return {};
  const style = `linear-gradient(to bottom, transparent 0%, black ${PATHWAY_CONFIG.fadeTopPercent}, black ${PATHWAY_CONFIG.fadeBottomPercent}, transparent 100%)`;
  return { maskImage: style, WebkitMaskImage: style };
};

const SimChip = () => (
  <div className="w-10 h-8 bg-gray-200/90 rounded border border-gray-300 flex flex-col justify-between overflow-hidden shadow-sm relative backdrop-blur-md">
    <div className="w-full h-[1px] bg-gray-400/50 absolute top-2"></div>
    <div className="w-full h-[1px] bg-gray-400/50 absolute bottom-2"></div>
    <div className="h-full w-[1px] bg-gray-400/50 absolute left-3"></div>
    <div className="h-full w-[1px] bg-gray-400/50 absolute right-3"></div>
    <div className="w-4 h-4 rounded-full border border-gray-400/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  </div>
);

const ContactlessIcon = () => (
  <div className="flex gap-[3px] items-center text-white/80 opacity-90 h-8">
    <Wifi className="w-6 h-6 rotate-90 stroke-[3]" />
  </div>
);


// EDIT THIS TO SET THE TEXT SIZE FOR ALL CARDS
const CARD_TEXT_SIZE = "text-[22px]";

// EDIT THESE TO CONTROL THE FADE BLEND SIZES FOR ALL CARDS
const CARD_FADE_WIDTH = "35%";
const CARD_FADE_HEIGHT = "25%";

const CARD_DIMENSIONS = "w-[320px] h-[420px]";

const CARD_WRAPPER_STYLE = "flex flex-wrap justify-center gap-8";

const CARD_CONTAINER_STYLE = `rounded-[12px] p-[32px] pb-0 overflow-hidden relative border border-[#dedcdb] flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all ${CARD_DIMENSIONS}`;

const OnePlatform = () => {
  return (
    <div className="relative z-20 w-full bg-[#f5f3eb] pt-32 pb-2 px-6 md:px-12 lg:px-24 -mt-24 md:-mt-32">
      <div className="max-w-[1500px] mx-auto">

        {/* Title Section */}
        <div className="mb-22">
          <h2 className="font-display max-w-7xl text-[24px] lg:text-[54px] text-black leading-[1.1] font-medium tracking-tight">
            Everything you need to launch fast,<br className="hidden md:block" /> differentiate, and keep innovating
          </h2>
          <p className="max-w-lg pt-4 text-[18px] opacity-60 text-black">
            Each product is powerful on its own.<br />
            Together, they unlock what legacy systems can't.
          </p>
        </div>

        <div className={CARD_WRAPPER_STYLE}>
          {[
            {
              data: data.cards[0],
              img: '/qsa.png',
              imgClass: 'w-[125%] max-w-none object-contain rounded-t-[12px] translate-x-4 translate-y-4',
              wrapperClass: 'ml-[10px]',
              bgColor: 'bg-[#f6f4f3]',
              fadeFrom: 'from-[#f6f4f3]'
            },
            {
              data: data.cards[1],
              img: '/qwe.png',
              imgClass: 'w-[125%] max-w-none object-contain rounded-t-[12px] translate-x-4 translate-y-4',
              wrapperClass: 'ml-[10px]',
              bgColor: 'bg-[#f5f3f1]',
              fadeFrom: 'from-[#f5f3f1]'
            },
            {
              data: data.cards[2],
              img: '/rfd.png',
              imgClass: 'w-[125%] max-w-none object-contain rounded-t-[12px] translate-x-4 translate-y-4',
              wrapperClass: 'ml-[10px]',
              bgColor: 'bg-[#f4f1ed]',
              fadeFrom: 'from-[#f4f1ed]'
            },
            {
              data: data.cards[3],
              img: '/rq.png',
              imgClass: 'w-[125%] max-w-none object-contain rounded-t-[12px] translate-x-4 translate-y-4',
              wrapperClass: 'ml-[10px]',
              bgColor: 'bg-[#f6f4f3]',
              fadeFrom: 'from-[#f6f4f3]'
            }
          ].map((card, index) => (
            <div key={index} className={`${CARD_CONTAINER_STYLE} ${card.bgColor}`}>
              <AnimatedDots />
              <div className="flex justify-between items-start mb-[16px] relative z-30">
                <h3 className={`${CARD_TEXT_SIZE} font-medium text-gray-900 leading-tight tracking-tight`}>
                  {card.data?.title} <span className="text-black/60 font-normal">{card.data?.description}</span>
                </h3>
              </div>
              <div className={`relative w-full mt-auto flex items-end justify-center z-10 ${card.wrapperClass}`}>
                <img src={card.img} alt={card.data?.title} className={card.imgClass} />
              </div>

              {/* Fade out overlays tied to the card edges */}
              <div className={`absolute top-0 right-0 bottom-0 pointer-events-none z-20 bg-gradient-to-l ${card.fadeFrom} from-10% to-transparent`} style={{ width: CARD_FADE_WIDTH }}></div>
              <div className={`absolute left-0 right-0 bottom-0 pointer-events-none z-20 bg-gradient-to-t ${card.fadeFrom} from-10% to-transparent`} style={{ height: CARD_FADE_HEIGHT }}></div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block w-full mt-6 mb-2 relative z-0">
          <svg
            viewBox="0 0 1000 80"
            className="w-full h-auto overflow-visible opacity-90"
            style={getFadeMaskStyle()}
          >
            <path d="M 77.5 40 L 922.5 40" fill="none" stroke={PATHWAY_CONFIG.trackColor} strokeWidth={PATHWAY_CONFIG.trackWidth} />
            <path
              d="M 77.5 40 L 922.5 40"
              fill="none"
              stroke={PATHWAY_CONFIG.particleColor}
              strokeWidth={PATHWAY_CONFIG.particleWidth}
              strokeDasharray={getDashPattern()}
              strokeLinecap="round"
              className="path-energy"
              style={{ animationDelay: '0.1s' }}
            />

            {[125, 375, 625, 875].map((cx, i) => {
              let dropPath = '';
              if (cx < 500) {
                // Left side cards: curve right to merge with rail
                dropPath = `M ${cx} 0 L ${cx} 25 Q ${cx} 40 ${cx + 15} 40`;
              } else {
                // Right side cards: curve left to merge with rail
                dropPath = `M ${cx} 0 L ${cx} 25 Q ${cx} 40 ${cx - 15} 40`;
              }
              return (
                <g key={'card-drop-' + i}>
                  <path d={dropPath} fill="none" stroke={PATHWAY_CONFIG.trackColor} strokeWidth={PATHWAY_CONFIG.trackWidth} />
                  <path
                    d={dropPath}
                    fill="none"
                    stroke={PATHWAY_CONFIG.particleColor}
                    strokeWidth={PATHWAY_CONFIG.particleWidth}
                    strokeDasharray={getDashPattern()}
                    strokeLinecap="round"
                    className="path-energy"
                    style={{ animationDelay: (i * 0.2 + 0.05) + 's' }}
                  />
                </g>
              );
            })}

            {[62.5, 187.5, 312.5, 437.5, 562.5, 687.5, 812.5, 937.5].map((bx, j) => {
              let dropPath = '';
              if (bx < 500) {
                // Left side boxes: start from rail and curve down left
                dropPath = `M ${bx + 15} 40 Q ${bx} 40 ${bx} 55 L ${bx} 80`;
              } else {
                // Right side boxes: start from rail and curve down right
                dropPath = `M ${bx - 15} 40 Q ${bx} 40 ${bx} 55 L ${bx} 80`;
              }

              return (
                <g key={'box-drop-' + j}>
                  <path d={dropPath} fill="none" stroke={PATHWAY_CONFIG.trackColor} strokeWidth={PATHWAY_CONFIG.trackWidth} />
                  <path
                    d={dropPath}
                    fill="none"
                    stroke={PATHWAY_CONFIG.particleColor}
                    strokeWidth={PATHWAY_CONFIG.particleWidth}
                    strokeDasharray={getDashPattern()}
                    strokeLinecap="round"
                    className="path-energy"
                    style={{ animationDelay: (j * 0.12 + 0.15) + 's' }}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 relative z-10">
          {[
            "Live Orders",
            "Table Management",
            "Kitchen Control",
            "Smart Inventory",
            "Staff Management",
            "Customer Insights",
            "Sales Analytics",
            "Branch Control"
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#e2e0d6]/80 rounded-xl flex flex-col items-center justify-center p-4 aspect-[4/2] text-center shadow-sm"
            >
              <span className="text-[14px] sm:text-sm font-normal text-gray-900 leading-snug">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex flex-col items-center w-full mt-[-5px] relative z-0">
          <style>
            {`
              @keyframes flowDown {
                from { stroke-dashoffset: ${getDashLoopOffset()}px; }
                to { stroke-dashoffset: 0; }
              }
              .path-energy {
                animation: flowDown ${PATHWAY_CONFIG.animationSpeed} linear infinite;
              }
              .logo-mesh-bg {
                background:
                  radial-gradient(
                    ellipse at 18% 52%,
                    rgba(254, 203, 191, 0.75) 0%,
                    rgba(254, 203, 191, 0.35) 28%,
                    transparent 55%
                  ),
                  radial-gradient(
                    ellipse at 40% 48%,
                    rgba(254, 175, 196, 0.70) 0%,
                    rgba(254, 175, 196, 0.30) 30%,
                    transparent 58%
                  ),
                  radial-gradient(
                    ellipse at 60% 48%,
                    rgba(246, 174, 222, 0.60) 0%,
                    rgba(246, 174, 222, 0.25) 32%,
                    transparent 60%
                  ),
                  radial-gradient(
                    ellipse at 84% 50%,
                    rgba(207, 197, 253, 0.70) 0%,
                    rgba(224, 183, 242, 0.30) 35%,
                    transparent 62%
                  ),
                  #ffffff;
              }
            `}
          </style>

          <svg
            viewBox="0 0 1000 200"
            className="w-full h-auto overflow-visible opacity-90"
            style={getFadeMaskStyle()}
          >
            {[62.5, 187.5, 312.5, 437.5, 562.5, 687.5, 812.5, 937.5].map((cx, i) => (
              <path
                key={'bg-' + i}
                d={'M ' + cx + ' 0 C ' + cx + ' 100, 500 150, 500 200'}
                fill="none"
                stroke={PATHWAY_CONFIG.trackColor}
                strokeWidth={PATHWAY_CONFIG.trackWidth}
              />
            ))}

            {[62.5, 187.5, 312.5, 437.5, 562.5, 687.5, 812.5, 937.5].map((cx, i) => (
              <path
                key={'flow-' + i}
                d={'M ' + cx + ' 0 C ' + cx + ' 100, 500 150, 500 200'}
                fill="none"
                stroke={PATHWAY_CONFIG.particleColor}
                strokeWidth={PATHWAY_CONFIG.particleWidth}
                strokeDasharray={getDashPattern()}
                strokeLinecap="round"
                className="path-energy"
                style={{ animationDelay: (i * 0.13 + 0.07) + 's' }}
              />
            ))}
          </svg>

          <div className={`w-24 h-24 mt-[-20px] ${PATHWAY_CONFIG.logoBgColor} rounded-full ${PATHWAY_CONFIG.logoGlowShadow} flex items-center justify-center relative z-20 p-4 ${PATHWAY_CONFIG.logoBorderSize} backdrop-blur-sm overflow-hidden`}>
            {/* Rotating gradient background layer */}
            <div
              className="absolute inset-[-50%] animate-[spin_4s_linear_infinite]"
              style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(162,44,219,0.15) 50%, transparent 100%)' }}
            />
            {/* <img src={PATHWAY_CONFIG.logoImage} alt="Restro Logo" className="w-full h-full object-contain filter relative z-10" /> */}
          </div>
        </div>

        {/* Unified Platform Header Section */}
        <div className="mt-16 text-center mb-8 relative z-10">
          <h2 className="font-display text-4xl md:text-5xl lg:text-[55px] text-black leading-tight font-medium tracking-tight mb-2">
            Built on a Unified Platform
          </h2>
          <p className="mx-auto max-w-lg text-sm opacity-60 md:text-base text-black font-medium">
            Most platforms were assembled. Highnote was built as one.
          </p>
        </div>

        {/* Value Props 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-13 mb-4 relative z-10">
          {/* Launch Faster */}
          <div className="flex flex-col items-center text-center">
            <Timer className="w-[30px] h-[30px] text-black mb-[16px] stroke-[1.5]" />
            <h3 className="text-[19px] font-medium text-black">Launch Faster</h3>
            <p className="mt-[8px] max-w-[235px] text-[14px]  opacity-60 text-black">
              Go live without coordinating multiple providers or waiting on fragmented systems.
            </p>
          </div>

          {/* Differentiate Easily */}
          <div className="flex flex-col items-center text-center">
            <Users className="w-[30px] h-[30px] text-black mb-[16px] stroke-[1.5]" />
            <h3 className="text-[19px] font-medium text-black">Differentiate Easily</h3>
            <p className="mt-[8px] max-w-[235px] text-[14px]  opacity-60 text-black">
              Design experiences around your customers, not platform constraints.
            </p>
          </div>

          {/* Keep Innovating */}
          <div className="flex flex-col items-center text-center">
            <Wand2 className="w-[30px] h-[30px] text-black mb-[16px] stroke-[1.5]" />
            <h3 className="text-[19px] font-medium text-black">Keep Innovating</h3>
            <p className="mt-[8px] max-w-[235px] text-[14px]  opacity-60 text-black">
              Add new capabilities and expand into new products without rebuilding your foundation.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OnePlatform;
