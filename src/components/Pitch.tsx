import React from 'react';

export const Pitch: React.FC = () => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 pointer-events-none select-none opacity-80">
      {/* Grass Textures could go here, but keeping it clean */}
      <defs>
         <pattern id="grassPattern" x="0" y="0" width="0.1" height="1" patternUnits="objectBoundingBox">
            <rect x="0" y="0" width="0.05" height="1" fill="rgba(255,255,255,0.03)" />
         </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grassPattern)" />

      {/* Outer Boundary */}
      <rect x="2%" y="2%" width="96%" height="96%" fill="none" stroke="white" strokeWidth="2" />

      {/* Center Line */}
      <line x1="50%" y1="2%" x2="50%" y2="98%" stroke="white" strokeWidth="2" />

      {/* Center Circle */}
      <circle cx="50%" cy="50%" r="9%" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="50%" cy="50%" r="0.5%" fill="white" />

      {/* Left Penalty Area */}
      <rect x="2%" y="25%" width="16%" height="50%" fill="none" stroke="white" strokeWidth="2" />
      <rect x="2%" y="38%" width="6%" height="24%" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="12%" cy="50%" r="0.5%" fill="white" />
      {/* Left Penalty Arc */}
      <path d="M 18 43 A 7 7 0 0 1 18 57" fill="none" stroke="white" strokeWidth="2" vectorEffect="non-scaling-stroke" transform="scale(1, 1)"/> 
      {/* Note: Arcs in responsive SVG without viewbox can be tricky, approximating with simple logic or relying on simple shapes */}
      
      {/* Right Penalty Area */}
      <rect x="82%" y="25%" width="16%" height="50%" fill="none" stroke="white" strokeWidth="2" />
      <rect x="92%" y="38%" width="6%" height="24%" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="88%" cy="50%" r="0.5%" fill="white" />

      {/* Corner Arcs */}
      <path d="M 2 4 Q 4 2 4 2" stroke="white" strokeWidth="2" fill="none" /> 
      {/* Simplified corners */}
    </svg>
  );
};