import React, { useEffect, useState, useRef, useMemo } from 'react';
import { fetchSimpleIcons } from 'react-icon-cloud';

const slugs = [
  'gmail', 'docker', 'signal', 'vimeo', 'wordpress', 'viber',
  'figma', 'notion', 'stripe', 'jira', 'trello', 'dropbox',
  'whatsapp', 'instagram', 'facebook', 'meta', 'messenger', 'linkedin', 'x',
  'youtube', 'tiktok', 'snapchat', 'pinterest', 'reddit', 'discord', 'telegram',
  'slack', 'zoom', 'skype', 'microsoftteams', 'wechat', 'line', 'salesforce', 'hubspot',
  'asana', 'box', 'cisco', 'aws', 'cloudflare', 'netlify', 'paypal',
  'shopify', 'medium', 'soundcloud', 'mailchimp', 'canva', 'invision', 'framer',
  'webflow', 'zendesk', 'intercom', 'miro', 'airtable', 'splunk',
  'datadog', 'twilio', 'okta', 'docusign', 'google', 'github'
];

const rings = [
  { radius: 110, count: 6, size: 58, iconScale: 1.0, opacity: 0.95 },
  { radius: 180, count: 12, size: 50, iconScale: 0.85, opacity: 0.75 },
  { radius: 260, count: 16, size: 44, iconScale: 0.7, opacity: 0.4 },
  { radius: 340, count: 20, size: 36, iconScale: 0.55, opacity: 0.15 },
  { radius: 430, count: 24, size: 30, iconScale: 0.45, opacity: 0.05 }
];

const IntegrationCloud = () => {
  const [data, setData] = useState(null);
  
  // Physics and interaction refs
  const wheelRef = useRef(null);
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastAngleRef = useRef(0);
  const rafRef = useRef(null);
  const autoRotateTimerRef = useRef(null);
  const isAutoRotatingRef = useRef(true);

  const FRICTION = 0.95;
  const AUTO_VELOCITY = 0.04;

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setData);
  }, []);

  // Pre-generate the static icon positions around the rings
  const generatedIcons = useMemo(() => {
    const items = [];
    let slugIndex = 0;

    rings.forEach((ring) => {
      for (let i = 0; i < ring.count; i++) {
        const baseAngle = (i / ring.count) * Math.PI * 2;
        const angleVariance = (Math.random() - 0.5) * 0.15;
        const finalAngle = baseAngle + angleVariance;
        
        const radiusVariance = (Math.random() - 0.5) * 15;
        const finalRadius = ring.radius + radiusVariance;

        const slug = slugs[slugIndex % slugs.length];
        slugIndex++;

        items.push({
          id: `icon-${ring.radius}-${i}`,
          slug,
          angle: finalAngle,
          radius: finalRadius,
          size: ring.size,
          iconScale: ring.iconScale,
          opacity: ring.opacity
        });
      }
    });
    return items;
  }, []);

  const getAngle = (x, y) => {
    if (!wheelRef.current) return 0;
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
  };

  useEffect(() => {
    const handleGlobalPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      
      const currentAngle = getAngle(e.clientX, e.clientY);
      let delta = currentAngle - lastAngleRef.current;
      
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;
      
      rotationRef.current += delta;
      velocityRef.current = delta;
      lastAngleRef.current = currentAngle;
    };

    const handleGlobalPointerUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        document.body.style.cursor = '';
        
        autoRotateTimerRef.current = setTimeout(() => {
          isAutoRotatingRef.current = true;
        }, 3000);
      }
    };

    window.addEventListener('pointermove', handleGlobalPointerMove, { passive: false });
    window.addEventListener('pointerup', handleGlobalPointerUp);
    
    return () => {
      window.removeEventListener('pointermove', handleGlobalPointerMove);
      window.removeEventListener('pointerup', handleGlobalPointerUp);
    };
  }, []);

  useEffect(() => {
    const update = () => {
      if (!isDraggingRef.current) {
        velocityRef.current *= FRICTION;
        
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion && isAutoRotatingRef.current && Math.abs(velocityRef.current) < 0.1) {
          velocityRef.current = AUTO_VELOCITY;
        }
        
        rotationRef.current += velocityRef.current;
      }
      
      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
        
        const children = wheelRef.current.querySelectorAll('.icon-counter-rotate');
        children.forEach(child => {
          child.style.transform = `rotate(${-rotationRef.current}deg)`;
        });
      }
      
      rafRef.current = requestAnimationFrame(update);
    };
    
    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    isAutoRotatingRef.current = false;
    clearTimeout(autoRotateTimerRef.current);
    velocityRef.current = 0;
    lastAngleRef.current = getAngle(e.clientX, e.clientY);
    document.body.style.cursor = 'grabbing';
  };

  return (
    <div 
      className="absolute top-[-20px] left-[50%] w-[125%] h-[600px] flex items-center justify-center cursor-grab"
      style={{ transform: 'translateX(-50%)' }}
      onPointerDown={handlePointerDown}
    >
      <div ref={wheelRef} className="relative w-full h-full flex items-center justify-center">
        {generatedIcons.map((item) => {
          const iconData = data?.simpleIcons ? data.simpleIcons[item.slug] : null;
          const fillHex = iconData && iconData.hex ? (iconData.hex.startsWith('#') ? iconData.hex : `#${iconData.hex}`) : '#000000';
          
          return (
            <div 
              key={item.id}
              className="absolute left-[50%] top-[50%]"
              style={{
                marginLeft: -item.size / 2,
                marginTop: -item.size / 2,
                transform: `translate(${Math.cos(item.angle) * item.radius}px, ${Math.sin(item.angle) * item.radius}px)`
              }}
            >
              <div 
                className="icon-counter-rotate flex items-center justify-center rounded-[16px] transition-transform duration-300 hover:scale-110"
                style={{ 
                  width: item.size, 
                  height: item.size, 
                  opacity: item.opacity,
                  backgroundColor: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(0,0,0,0.035)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                  // Initial counter rotation prevents FOUC flash
                  transform: `rotate(${-rotationRef.current}deg)`
                }}
              >
                {iconData && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24 * item.iconScale} height={24 * item.iconScale}>
                    <path d={iconData.path} fill={fillHex} />
                  </svg>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntegrationCloud;
