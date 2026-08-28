import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedDots = ({
  numDots = 450,
  minSize = 0.5,
  maxSize = 1.0,
  hoverRadius = 120,
  hoverForce = 40
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let dots = [];
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Initialize dots with offsetX and offsetY for GSAP animation
    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * (maxSize - minSize) + minSize,
        offsetX: 0,
        offsetY: 0
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#bfbfbf'; // Updated dot color

      dots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Wrap around edges
        if (dot.x < 0) dot.x = canvas.width;
        if (dot.x > canvas.width) dot.x = 0;
        if (dot.y < 0) dot.y = canvas.height;
        if (dot.y > canvas.height) dot.y = 0;

        ctx.beginPath();
        ctx.arc(dot.x + dot.offsetX, dot.y + dot.offsetY, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const parent = canvas.parentElement;

    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      dots.forEach(dot => {
        const dx = mx - dot.x;
        const dy = my - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < hoverRadius) {
          const force = (hoverRadius - dist) / hoverRadius;
          gsap.to(dot, {
            offsetX: -(dx / dist) * force * hoverForce,
            offsetY: -(dy / dist) * force * hoverForce,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto"
          });
        } else if (dot.offsetX !== 0 || dot.offsetY !== 0) {
          gsap.to(dot, {
            offsetX: 0,
            offsetY: 0,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto"
          });
        }
      });
    };

    const handleMouseLeave = () => {
      dots.forEach(dot => {
        if (dot.offsetX !== 0 || dot.offsetY !== 0) {
          gsap.to(dot, {
            offsetX: 0,
            offsetY: 0,
            duration: 0.8,
            ease: "power2.out",
            overwrite: "auto"
          });
        }
      });
    };

    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [numDots, minSize, maxSize, hoverRadius, hoverForce]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 rounded-[12px]"
    />
  );
};

export default AnimatedDots;
