import { Player, Ball } from './types';

export const INITIAL_BALL_POS: Ball = { x: 50, y: 50 };

const HOME_COLOR_DEFAULT = '#3b82f6'; // Blue-500
const AWAY_COLOR_DEFAULT = '#ef4444'; // Red-500

// Helper to create initial team formation (4-4-4: 1 GK + 12 Outfield)
export const generateInitialPlayers = (): Player[] => {
  const players: Player[] = [];

  // Home Team (Left side, attacking Right)
  const homePositions = [
    { x: 5, y: 50, n: '1', name: 'GK' },
    // Defenders
    { x: 20, y: 15, n: '3', name: 'LB' },
    { x: 18, y: 38, n: '4', name: 'CB' },
    { x: 18, y: 62, n: '5', name: 'CB' },
    { x: 20, y: 85, n: '2', name: 'RB' },
    // Midfielders
    { x: 35, y: 15, n: '11', name: 'LM' },
    { x: 32, y: 38, n: '8', name: 'CM' },
    { x: 32, y: 62, n: '6', name: 'CM' },
    { x: 35, y: 85, n: '7', name: 'RM' },
    // Forwards
    { x: 44, y: 38, n: '10', name: 'FW' },
    { x: 44, y: 62, n: '9', name: 'FW' },
  ];

  // Away Team (Right side, attacking Left)
  const awayPositions = [
    { x: 95, y: 50, n: '1', name: 'GK' },
    // Defenders
    { x: 80, y: 15, n: '3', name: 'LB' },
    { x: 82, y: 38, n: '4', name: 'CB' },
    { x: 82, y: 62, n: '5', name: 'CB' },
    { x: 80, y: 85, n: '2', name: 'RB' },
    // Midfielders
    { x: 65, y: 15, n: '11', name: 'LM' },
    { x: 68, y: 38, n: '8', name: 'CM' },
    { x: 68, y: 62, n: '6', name: 'CM' },
    { x: 65, y: 85, n: '7', name: 'RM' },
    // Forwards
    { x: 56, y: 38, n: '10', name: 'FW' },
    { x: 56, y: 62, n: '9', name: 'FW' },
  ];

  homePositions.forEach((p, i) => {
    players.push({
      id: `h-${i}`,
      team: 'home',
      number: p.n,
      name: p.name,
      x: p.x,
      y: p.y,
    });
  });

  awayPositions.forEach((p, i) => {
    players.push({
      id: `a-${i}`,
      team: 'away',
      number: p.n,
      name: p.name,
      x: p.x,
      y: p.y,
    });
  });

  return players;
};

export const INITIAL_SETTINGS = {
  showNames: true,
  showNumbers: true,
  homeColor: HOME_COLOR_DEFAULT,
  awayColor: AWAY_COLOR_DEFAULT,
};