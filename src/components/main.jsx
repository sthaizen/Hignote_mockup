import React from 'react';
import DarkVeil from './DarkVeil';

const Main = () => {
  return (
    <div 
      className="hero-background" 
      style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: -1 
      }}
    >
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={2}
        speed={6}
        scanlineFrequency={0}
        warpAmount={0}
      />
    </div>
  );
};

export default Main;
