"use client";

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Pitch } from './Pitch';
import { DraggableMarker } from './DraggableMarker';
import { TeamPanel } from './TeamPanel';

import { Player, Ball, TeamSide, PossessionState, ZoneState } from '../types';
import { DEFAULT_ALL_PLAYERS, DEFAULT_BALL, INITIAL_SETTINGS, PLAYERS_BY_CONFIG, BALL_BY_CONFIG } from '../constants';
import { RefreshCcw } from 'lucide-react';

import { Dictionary } from '../types';

interface TacticsBoardProps {
  dict: Dictionary['ui'];
}

export const TacticsBoard: React.FC<TacticsBoardProps> = ({ dict }) => {
  // --- State ---
  const [players, setPlayers] = useState<Player[]>(DEFAULT_ALL_PLAYERS);
  const [ball, setBall] = useState<Ball>(DEFAULT_BALL);
  const [settings, setSettings] = useState(INITIAL_SETTINGS);

  // Tactical State
  const [possession, setPossession] = useState<PossessionState>('neutral');
  const [zone, setZone] = useState<ZoneState>('middle');

  // Board Sizing State
  const [boardDimensions, setBoardDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLElement>(null);

  // Dragging State
  const [draggedItem, setDraggedItem] = useState<{ type: 'player' | 'ball'; id: string } | null>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  // --- Resize Observer for Strict Aspect Ratio ---
  useEffect(() => {
    const targetElement = containerRef.current;
    if (!targetElement) return;

    const calculateSize = () => {
      if (!targetElement) return;

      const padding = 16; // 8px * 2 for safety
      const TARGET_RATIO = 1.54;

      // Get container dimensions
      const containerWidth = targetElement.clientWidth;

      // Calculate available height in the viewport for the pitch
      // Header is approx 56px (h-14)
      // Ad is 60px (<md) or 90px (>=md)
      // We want to ensure the pitch fits within the initial view without scrolling the pitch itself out of view
      const isMd = window.innerWidth >= 768;
      const headerHeight = 56;
      const adHeight = isMd ? 90 : 60;
      const topOffset = headerHeight + adHeight;

      // Safety margin for padding/borders
      const verticalMargin = 12;

      const availableHeight = window.innerHeight - topOffset - verticalMargin;
      const availableWidth = containerWidth - padding;

      // 1. Calculate dimensions if we maximize width
      const widthBasedWidth = availableWidth;
      const widthBasedHeight = widthBasedWidth / TARGET_RATIO;

      // 2. Calculate dimensions if we maximize height (constrained by viewport)
      const heightBasedHeight = availableHeight;
      const heightBasedWidth = heightBasedHeight * TARGET_RATIO;

      let finalWidth, finalHeight;

      // We need to fit within BOTH constraints (width and height) to ensure it's fully visible
      // So we pick the smaller dimension set
      if (widthBasedHeight <= availableHeight) {
        // It fits vertically when using max width (e.g. Portrait Mobile)
        finalWidth = widthBasedWidth;
        finalHeight = widthBasedHeight;
      } else {
        // It's too tall when using max width, so constrain by height (e.g. Landscape Mobile)
        finalWidth = heightBasedWidth;
        finalHeight = heightBasedHeight;
      }

      // 3. Max Width Cap (for ultra-wide screens)
      const maxWidthLimit = 1600;
      if (finalWidth > maxWidthLimit) {
        finalWidth = maxWidthLimit;
        finalHeight = finalWidth / TARGET_RATIO;
      }

      // Ensure we don't go negative
      finalWidth = Math.max(0, finalWidth);
      finalHeight = Math.max(0, finalHeight);

      setBoardDimensions({ width: finalWidth, height: finalHeight });
    };

    const observer = new ResizeObserver(calculateSize);
    observer.observe(targetElement);

    // Also listen to window resize for breakpoint changes that affect layout logic
    window.addEventListener('resize', calculateSize);

    // Initial calculation
    calculateSize();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', calculateSize);
    };
  }, []);

  // --- Event Handlers ---

  // 1. Drag Logic
  const handleMouseDown = (type: 'player' | 'ball', id: string, e: React.MouseEvent | React.TouchEvent) => {
    if (e.cancelable && e.type !== 'touchstart') e.preventDefault();
    setDraggedItem({ type, id });
  };

  const moveItem = useCallback((clientX: number, clientY: number) => {
    if (!draggedItem || !fieldRef.current) return;

    const fieldRect = fieldRef.current.getBoundingClientRect();
    const fieldWidth = fieldRect.width;
    const fieldHeight = fieldRect.height;

    let newX = ((clientX - fieldRect.left) / fieldWidth) * 100;
    let newY = ((clientY - fieldRect.top) / fieldHeight) * 100;

    newX = Math.max(0, Math.min(100, newX));
    newY = Math.max(0, Math.min(100, newY));

    if (draggedItem.type === 'ball') {
      setBall({ x: newX, y: newY });
    } else {
      setPlayers((prev) =>
        prev.map((p) =>
          p.id === draggedItem.id ? { ...p, x: newX, y: newY } : p
        )
      );
    }
  }, [draggedItem]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggedItem) moveItem(e.clientX, e.clientY);
    };
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (draggedItem && touch !== undefined) {
        moveItem(touch.clientX, touch.clientY);
      }
    };
    const handleUp = () => setDraggedItem(null);

    if (draggedItem) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [draggedItem, moveItem]);


  // 2. Data Updates
  const updatePlayer = (id: string, field: keyof Player, value: string) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const resetBoard = () => {
    console.log('reset board')
    setPlayers(DEFAULT_ALL_PLAYERS);
    setBall(DEFAULT_BALL);
    setPossession('neutral');
    setZone('middle');
  }

  // 4. Tactical Updates
  const updateTactics = (newPossession: PossessionState, newZone: ZoneState) => {
    setPossession(newPossession);
    setZone(newZone);

    // Calculate new positions
    setPlayers(PLAYERS_BY_CONFIG[newPossession][newZone]);
    setBall(BALL_BY_CONFIG[newPossession][newZone]);
  };

  // 3. Render Helpers
  const getContrastingColor = (hexColor: string) => {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  };

  return (
    <div className="flex flex-col min-h-screen xl:h-screen xl:overflow-hidden bg-gray-900 overflow-x-hidden">

      {/* Fixed Header Container (includes Top Bar and Ad) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md flex flex-col">
        {/* Top Toolbar */}
        <div className="h-14 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4 sm:px-6 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold border border-green-400">
              T
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hidden sm:block">
              {dict.appName}
            </h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Possession Dropdown */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
              <label className="text-xs text-gray-400 hidden sm:block">{dict.possession}</label>
              <select
                className="bg-gray-700 text-white text-sm rounded border border-gray-600 px-2 py-1 focus:ring-green-500 focus:border-green-500"
                value={possession}
                onChange={(e) => updateTactics(e.target.value as PossessionState, zone)}
              >
                <option value="neutral">{dict.neutral}</option>
                <option value="home">{dict.homeTeam}</option>
                <option value="away">{dict.awayTeam}</option>
              </select>
            </div>

            {/* Zone Dropdown */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
              <label className={`text-xs hidden sm:block ${possession === 'neutral' ? 'text-gray-600' : 'text-gray-400'}`}>{dict.zone}</label>
              <select
                className={`bg-gray-700 text-white text-sm rounded border border-gray-600 px-2 py-1 focus:ring-green-500 focus:border-green-500 ${possession === 'neutral' ? 'opacity-50 cursor-not-allowed' : ''}`}
                value={zone}
                onChange={(e) => updateTactics(possession, e.target.value as ZoneState)}
                disabled={possession === 'neutral'}
              >
                <option value="defensive">{dict.defensiveThird}</option>
                <option value="middle">{dict.middleThird}</option>
                <option value="attacking">{dict.attackingThird}</option>
              </select>
            </div>

            <div className="w-px h-8 bg-gray-700 mx-2 hidden sm:block"></div>

            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-300 select-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-600 text-green-500 focus:ring-green-500 bg-gray-700"
                checked={settings.showNumbers}
                onChange={(e) => setSettings({ ...settings, showNumbers: e.target.checked })}
                aria-label="Toggle player numbers"
              />
              <span className="hidden lg:inline">{dict.numbers}</span>
              <span className="lg:hidden">#</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-300 select-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-600 text-green-500 focus:ring-green-500 bg-gray-700"
                checked={settings.showNames}
                onChange={(e) => setSettings({ ...settings, showNames: e.target.checked })}
                aria-label="Toggle player names"
              />
              <span className="hidden lg:inline">{dict.names}</span>
              <span className="lg:hidden">Az</span>
            </label>
          </div>

          <div className="flex gap-3">
            <button
              onClick={resetBoard}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 transition-colors"
              title={dict.reset}
              aria-label="Reset positions"
            >
              <RefreshCcw size={18} />
            </button>
          </div>
        </div>

        {/* Advertisement Banner Space - Now a direct child of header */}
        <div className="h-[60px] md:h-[90px] bg-gray-800 border-b border-gray-700 flex items-center justify-center shrink-0 p-2">
          <div className="w-full max-w-[728px] h-full bg-gray-700/50 border border-dashed border-gray-600 rounded flex flex-col items-center justify-center text-gray-500 hover:bg-gray-700/80 transition-colors cursor-pointer">
            <span className="text-xs font-semibold uppercase tracking-wider mb-0.5">{dict.adLabel}</span>
            <span className="text-[10px] md:text-xs opacity-70">{dict.adPlaceholder}</span>
          </div>
        </div>
      </header>

      {/* Main Content & Panels Wrapper */}
      {/* 
          Mobile: flex-wrap (Pitch 100%, Home 50%, Away 50%), Auto Height (Scrollable Body)
          Desktop (xl+): flex-nowrap (Home 320px, Pitch Flex, Away 320px), Screen Height (Fixed Body, Internal Scroll)
          Added pt-[116px] md:pt-[146px] to account for fixed header/ad height
      */}
      <div className="flex flex-wrap xl:flex-nowrap flex-1 relative pt-[116px] md:pt-[146px] xl:h-screen xl:overflow-hidden">

        {/* Left Panel (Home) */}
        {/* Mobile: Order 2, w-1/2 */}
        {/* Desktop: Order 1, w-80, h-full, scrollable */}
        <div className="order-2 xl:order-1 w-1/2 xl:w-80 border-r border-gray-700 bg-gray-800 z-20 xl:h-full xl:overflow-y-auto">
          <TeamPanel
            side="home"
            players={players}
            color={settings.homeColor}
            onColorChange={(c) => setSettings(s => ({ ...s, homeColor: c }))}
            onPlayerUpdate={updatePlayer}
            dict={dict}
          />
        </div>

        {/* Center: Pitch Area */}
        {/* Mobile: Order 1, w-full */}
        {/* Desktop: Order 2, Flex-1, h-full, no scroll */}
        <main
          ref={containerRef}
          className="order-1 xl:order-2 w-full xl:w-auto xl:flex-1 relative bg-gray-900 flex items-start xl:items-center justify-center p-1 md:p-2 border-b xl:border-b-0 border-gray-700 xl:h-full xl:overflow-hidden"
        >
          {/* The Green Pitch */}
          <div
            ref={fieldRef}
            className="relative bg-green-700 rounded-lg shadow-2xl border-4 border-white/20 select-none"
            style={{
              width: boardDimensions.width,
              height: boardDimensions.height,
              // Fallback while calculating
              minWidth: boardDimensions.width === 0 ? '50%' : 'auto',
              background: 'linear-gradient(to right, #15803d 0%, #15803d 10%, #166534 10%, #166534 20%, #15803d 20%, #15803d 30%, #166534 30%, #166534 40%, #15803d 40%, #15803d 50%, #166534 50%, #166534 60%, #15803d 60%, #15803d 70%, #166534 70%, #166534 80%, #15803d 80%, #15803d 90%, #166534 90%, #166534 100%)'
            }}
          >
            {boardDimensions.width > 0 && (
              <>
                <Pitch />

                {players.map((player) => {
                  const isHome = player.team === 'home';
                  const bgColor = isHome ? settings.homeColor : settings.awayColor;
                  const textColor = getContrastingColor(bgColor);

                  return (
                    <DraggableMarker
                      key={player.id}
                      x={player.x}
                      y={player.y}
                      label={settings.showNumbers ? player.number : ''}
                      subLabel={settings.showNames ? player.name : ''}
                      color={bgColor}
                      textColor={textColor}
                      borderColor={isHome ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.2)'}
                      onMouseDown={(e) => handleMouseDown('player', player.id, e)}
                    />
                  );
                })}

                <DraggableMarker
                  x={ball.x}
                  y={ball.y}
                  isBall={true}
                  size={25}
                  onMouseDown={(e) => handleMouseDown('ball', 'ball', e)}
                />
              </>
            )}
          </div>
        </main>

        {/* Right Panel (Away) */}
        {/* Mobile: Order 3, w-1/2 */}
        {/* Desktop: Order 3, w-80, h-full, scrollable */}
        <div className="order-3 xl:order-3 w-1/2 xl:w-80 border-t xl:border-t-0 border-l-0 xl:border-l border-gray-700 bg-gray-800 z-20 xl:h-full xl:overflow-y-auto">
          <TeamPanel
            side="away"
            players={players}
            color={settings.awayColor}
            onColorChange={(c) => setSettings(s => ({ ...s, awayColor: c }))}
            onPlayerUpdate={updatePlayer}
            dict={dict}
          />
        </div>

      </div>

    </div>
  );
};
