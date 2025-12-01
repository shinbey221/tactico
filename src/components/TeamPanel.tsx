import React from 'react';
import { Player, TeamSide } from '../types';

interface TeamPanelProps {
  side: TeamSide;
  players: Player[];
  color: string;
  onColorChange: (color: string) => void;
  onPlayerUpdate: (id: string, field: keyof Player, value: string) => void;
}

export const TeamPanel: React.FC<TeamPanelProps> = ({
  side,
  players,
  color,
  onColorChange,
  onPlayerUpdate,
}) => {
  const teamPlayers = players.filter((p) => p.team === side);
  const title = side === 'home' ? 'Home Team' : 'Away Team';
  const alignClass = side === 'home' ? 'items-start' : 'items-end';

  return (
    <div className="flex flex-col bg-gray-800 p-2 md:p-4 w-full">
      <div className={`flex flex-col mb-4 w-full ${alignClass}`}>
        <h2 className="text-xl font-bold text-gray-100 mb-2 uppercase tracking-wider">{title}</h2>
        
        <div className="flex items-center gap-3 bg-gray-700 p-2 rounded-lg w-full">
            <label className="text-sm text-gray-300 font-medium whitespace-nowrap">Kit Color:</label>
            <div className="relative w-full h-8 rounded cursor-pointer overflow-hidden border border-gray-500">
              <input
                type="color"
                value={color}
                onChange={(e) => onColorChange(e.target.value)}
                className="absolute -top-2 -left-2 w-[200%] h-[200%] cursor-pointer border-none p-0"
              />
            </div>
        </div>
      </div>

      <div className="space-y-2">
        {teamPlayers.map((player) => (
          <div key={player.id} className="flex gap-2 bg-gray-700/50 p-2 rounded hover:bg-gray-700 transition-colors items-center">
            <div className="w-10 md:w-12 shrink-0">
               <label className="text-[10px] text-gray-400 block mb-0.5">No.</label>
               <input
                type="text"
                value={player.number}
                onChange={(e) => onPlayerUpdate(player.id, 'number', e.target.value)}
                className="w-full bg-gray-900 border border-gray-600 rounded px-1 py-1 text-center text-sm text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex-1 min-w-0">
               <label className="text-[10px] text-gray-400 block mb-0.5">Name</label>
               <input
                type="text"
                value={player.name}
                onChange={(e) => onPlayerUpdate(player.id, 'name', e.target.value)}
                className="w-full bg-gray-900 border border-gray-600 rounded px-2 py-1 text-sm text-white focus:border-blue-500 focus:outline-none truncate"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};