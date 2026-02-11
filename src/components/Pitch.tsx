import React from 'react';

export const Pitch: React.FC = () => {
  // Standard Pitch Dimensions (in meters)
  // Length: 105m, Width: 68m
  // We add padding to the viewBox to show the lines clearly within the board
  // ViewBox: min-x, min-y, width, height
  // Padding: ~3m horizontal, ~2m vertical
  
  return (
    <svg 
      viewBox="-3 -2 111 72" 
      width="100%" 
      height="100%" 
      xmlns="http://www.w3.org/2000/svg" 
      className="absolute inset-0 pointer-events-none select-none opacity-90"
    >
      {/* --- Main Field Outline (105m x 68m) --- */}
      <rect x="0" y="0" width="105" height="68" fill="none" stroke="white" strokeWidth="0.5" />

      {/* --- Center Line & Circle --- */}
      <line x1="52.5" y1="0" x2="52.5" y2="68" stroke="white" strokeWidth="0.5" />
      <circle cx="52.5" cy="34" r="9.15" fill="none" stroke="white" strokeWidth="0.5" />
      <circle cx="52.5" cy="34" r="0.6" fill="white" />

      {/* --- Left Side (Home) --- */}
      
      {/* Penalty Area (16.5m x 40.32m) */}
      {/* Top Y = (68 - 40.32)/2 = 13.84 */}
      <rect x="0" y="13.84" width="16.5" height="40.32" fill="none" stroke="white" strokeWidth="0.5" />
      
      {/* Goal Area (5.5m x 18.32m) */}
      {/* Top Y = (68 - 18.32)/2 = 24.84 */}
      <rect x="0" y="24.84" width="5.5" height="18.32" fill="none" stroke="white" strokeWidth="0.5" />
      
      {/* Penalty Spot (11m) */}
      <circle cx="11" cy="34" r="0.6" fill="white" />
      
      {/* Penalty Arc (R=9.15m from spot, clipped) */}
      {/* Using proper Arc calculation: Intersection of x=16.5 with Circle(11, 34, 9.15) */}
      {/* x = 16.5. dx = 5.5. y^2 = 9.15^2 - 5.5^2 = 83.72 - 30.25 = 53.47. y = +/- 7.31 */}
      {/* Arc points: (16.5, 34-7.31) to (16.5, 34+7.31) -> (16.5, 26.69) to (16.5, 41.31) */}
      <path d="M 16.5 26.69 A 9.15 9.15 0 0 1 16.5 41.31" fill="none" stroke="white" strokeWidth="0.5" />


      {/* --- Right Side (Away) --- */}
      
      {/* Penalty Area */}
      <rect x="88.5" y="13.84" width="16.5" height="40.32" fill="none" stroke="white" strokeWidth="0.5" />
      
      {/* Goal Area */}
      <rect x="99.5" y="24.84" width="5.5" height="18.32" fill="none" stroke="white" strokeWidth="0.5" />
      
      {/* Penalty Spot (105 - 11 = 94) */}
      <circle cx="94" cy="34" r="0.6" fill="white" />
      
      {/* Penalty Arc */}
      <path d="M 88.5 41.31 A 9.15 9.15 0 0 1 88.5 26.69" fill="none" stroke="white" strokeWidth="0.5" />


      {/* --- Corner Arcs (R=1m) --- */}
      
      {/* Top Left: (0,0) center, draw from (0,1) to (1,0) */}
      <path d="M 0 1 A 1 1 0 0 0 1 0" fill="none" stroke="white" strokeWidth="0.5" />
      
      {/* Top Right: (105,0) center, draw from (104,0) to (105,1) */}
      <path d="M 104 0 A 1 1 0 0 0 105 1" fill="none" stroke="white" strokeWidth="0.5" />
      
      {/* Bottom Right: (105,68) center, draw from (105,67) to (104,68) */}
      <path d="M 105 67 A 1 1 0 0 0 104 68" fill="none" stroke="white" strokeWidth="0.5" />
      
      {/* Bottom Left: (0,68) center, draw from (1,68) to (0,67) */}
      <path d="M 1 68 A 1 1 0 0 0 0 67" fill="none" stroke="white" strokeWidth="0.5" />

    </svg>
  );
};