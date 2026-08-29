import React, { useState, useRef } from "react";
import { TestimonialsRow } from "../components/ui/testimonials-row";
import { motion } from "motion/react";
import testimonials from "../data/testimonials.json";

const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3, 6);
const thirdRow = testimonials.slice(6, 9);

const UserFeedback = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // --- Spotlight Controls ---
  const SPOTLIGHT_RADIUS = 500; // Size of the highlight circle (in px)
  const SPOTLIGHT_FADE_PERCENT = 1; // How sharply the highlight fades (0-100%)
  const OVERLAY_OPACITY = 70; // Darkness of the fade on non-highlighted cards (0-100%)

  // --- Edge Fade Controls (Left & Right) ---
  const EDGE_FADE_WIDTH = "35%"; // Distance of the fade from left/right edges (e.g., "15%", "150px")
  const EDGE_FADE_INTENSITY = 0; // Opacity at the very edges (0 = fully faded out, 100 = no fade)
  // --------------------------

  return (
    <section className="bg-[#f5f3eb] pt-[80px] pb-[100px] relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[960px] mx-auto mb-[64px]"
        >
          <div className="text-black/60 font-normal text-[16px] mb-[2px]">
            70,000 teams and counting
          </div>

          <h2 className="font-display text-[48px] text-black leading-tight font-medium tracking-tight text-center mb-[16px]">
            We've got the receipts.
          </h2>

          <div className="relative group/btn">
            <div className="absolute -inset-0.5 translate-y-0 translate-x-0 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 rounded-[8px] blur opacity-0 group-hover/btn:opacity-70 transition duration-500"></div>
            <button className="relative px-[17px] py-[8px] bg-black text-white font-medium rounded-[8px] text-[13px]  transition-colors  shadow-sm">
              View Demo
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative mt-[32px] w-full p-1"
        style={{
          WebkitMaskImage: `linear-gradient(to right, rgba(0,0,0,${EDGE_FADE_INTENSITY / 100}), black ${EDGE_FADE_WIDTH}, black calc(100% - ${EDGE_FADE_WIDTH}), rgba(0,0,0,${EDGE_FADE_INTENSITY / 100}))`,
          maskImage: `linear-gradient(to right, rgba(0,0,0,${EDGE_FADE_INTENSITY / 100}), black ${EDGE_FADE_WIDTH}, black calc(100% - ${EDGE_FADE_WIDTH}), rgba(0,0,0,${EDGE_FADE_INTENSITY / 100}))`,
        }}
      >
        <div className="flex flex-col gap-[10px]">
          <TestimonialsRow testimonials={firstRow} duration={40} delay={-15} direction="right" isPaused={isHovering} />
          <TestimonialsRow testimonials={secondRow} duration={45} delay={-25} direction="right" isPaused={isHovering} />
          <TestimonialsRow testimonials={thirdRow} duration={35} delay={-5} direction="right" isPaused={isHovering} />
        </div>

        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out"
          style={{
            backgroundColor: `rgba(245, 243, 235, ${OVERLAY_OPACITY / 100})`, /* Matches #f5f3eb background */
            opacity: isHovering ? 1 : 0,
            WebkitMaskImage: `radial-gradient(circle ${SPOTLIGHT_RADIUS}px at ${mousePosition.x}px ${mousePosition.y}px, transparent ${SPOTLIGHT_FADE_PERCENT}%, black 100%)`,
            maskImage: `radial-gradient(circle ${SPOTLIGHT_RADIUS}px at ${mousePosition.x}px ${mousePosition.y}px, transparent ${SPOTLIGHT_FADE_PERCENT}%, black 100%)`,
          }}
        />
      </div>
    </section>
  );
};

export default UserFeedback;
