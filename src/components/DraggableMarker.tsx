import React from 'react';

interface DraggableMarkerProps {
  x: number;
  y: number;
  color?: string;
  textColor?: string;
  borderColor?: string;
  label?: string;
  subLabel?: string;
  size?: number;
  shape?: 'circle' | 'square';
  isBall?: boolean;
  onMouseDown: (e: React.MouseEvent | React.TouchEvent) => void;
}

export const DraggableMarker: React.FC<DraggableMarkerProps> = ({
  x,
  y,
  color = 'white',
  textColor = 'white',
  borderColor = 'white',
  label,
  subLabel,
  size = 40,
  isBall = false,
  onMouseDown,
}) => {
  const style: React.CSSProperties = {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: isBall ? 'white' : color,
    transform: 'translate(-50%, -50%)',
    cursor: 'grab',
    border: isBall ? '2px solid black' : `2px solid ${borderColor}`,
  };

  return (
    <div
      className={`absolute flex flex-col items-center justify-center rounded-full shadow-lg transition-transform active:scale-110 active:cursor-grabbing z-10 hover:z-20 select-none`}
      style={style}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
    >
      {isBall ? (
        // Soccer ball graphic
        <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
           <div className="absolute top-0 left-1/3 w-1/3 h-full bg-black opacity-20 transform -skew-x-12"></div>
           <div className="absolute top-1/3 left-0 w-full h-1/3 bg-black opacity-20 transform -skew-y-12"></div>
           <svg viewBox="0 0 100 100" className="w-full h-full absolute top-0 left-0">
              <path d="M50 20 L70 35 L65 60 L35 60 L30 35 Z" fill="black" />
              <path d="M50 20 L50 0" stroke="black" strokeWidth="2"/>
              <path d="M70 35 L90 25" stroke="black" strokeWidth="2"/>
              <path d="M65 60 L85 80" stroke="black" strokeWidth="2"/>
              <path d="M35 60 L15 80" stroke="black" strokeWidth="2"/>
              <path d="M30 35 L10 25" stroke="black" strokeWidth="2"/>
           </svg>
        </div>
      ) : (
        // Player Jersey
        <div className="flex items-center justify-center w-full h-full relative">
           {/* Number */}
          <span
            className="font-bold text-lg leading-none"
            style={{ color: textColor, textShadow: '0px 1px 2px rgba(0,0,0,0.8)' }}
          >
            {label}
          </span>
        </div>
      )}

      {/* Name Label underneath */}
      {subLabel && (
        <div
          className="absolute top-full mt-1 px-2 py-0.5 bg-black/70 text-white text-xs rounded whitespace-nowrap pointer-events-none"
          style={{ textShadow: '0 1px 1px black' }}
        >
          {subLabel}
        </div>
      )}
    </div>
  );
};