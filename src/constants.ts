import { Player, Ball } from './types';

const HOME_COLOR_DEFAULT = '#3b82f6'; // Blue-500
const AWAY_COLOR_DEFAULT = '#ef4444'; // Red-500

export const INITIAL_SETTINGS = {
  showNames: true,
  showNumbers: true,
  homeColor: HOME_COLOR_DEFAULT,
  awayColor: AWAY_COLOR_DEFAULT,
};

export const DEFAULT_ALL_PLAYERS: Player[] = [
  // ---------
  // Home Team
  // ---------
  { id: 'h-1', team: 'home', x: 5, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'h-3', team: 'home', x: 25, y: 15, number: '3', name: 'LB' },
  { id: 'h-4', team: 'home', x: 18, y: 38, number: '4', name: 'CB' },
  { id: 'h-5', team: 'home', x: 18, y: 62, number: '5', name: 'CB' },
  { id: 'h-2', team: 'home', x: 25, y: 85, number: '2', name: 'RB' },
  // Midfielders
  { id: 'h-11', team: 'home', x: 40, y: 15, number: '11', name: 'LM' },
  { id: 'h-8', team: 'home', x: 32, y: 38, number: '8', name: 'CM' },
  { id: 'h-6', team: 'home', x: 32, y: 62, number: '6', name: 'CM' },
  { id: 'h-7', team: 'home', x: 40, y: 85, number: '7', name: 'RM' },
  // Forwards
  { id: 'h-10', team: 'home', x: 44, y: 38, number: '10', name: 'FW' },
  { id: 'h-9', team: 'home', x: 44, y: 62, number: '9', name: 'FW' },
  // ---------
  // Away Team
  // ---------
  { id: 'a-1', team: 'away', x: 95, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'a-3', team: 'away', x: 75, y: 15, number: '3', name: 'LB' },
  { id: 'a-4', team: 'away', x: 82, y: 38, number: '4', name: 'CB' },
  { id: 'a-5', team: 'away', x: 82, y: 62, number: '5', name: 'CB' },
  { id: 'a-2', team: 'away', x: 75, y: 85, number: '2', name: 'RB' },
  // Midfielders
  { id: 'a-11', team: 'away', x: 60, y: 15, number: '11', name: 'LM' },
  { id: 'a-8', team: 'away', x: 68, y: 38, number: '8', name: 'CM' },
  { id: 'a-6', team: 'away', x: 68, y: 62, number: '6', name: 'CM' },
  { id: 'a-7', team: 'away', x: 60, y: 85, number: '7', name: 'RM' },
  // Forwards
  { id: 'a-10', team: 'away', x: 56, y: 38, number: '10', name: 'FW' },
  { id: 'a-9', team: 'away', x: 56, y: 62, number: '9', name: 'FW' },
];

const POSSESSION_HOME_DEFENSIVE_PLAYERS: Player[] = [
  // ---------
  // Home Team (Build Up Deep)
  // ---------
  { id: 'h-1', team: 'home', x: 5, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'h-3', team: 'home', x: 15, y: 10, number: '3', name: 'LB' },
  { id: 'h-4', team: 'home', x: 12, y: 35, number: '4', name: 'CB' },
  { id: 'h-5', team: 'home', x: 12, y: 65, number: '5', name: 'CB' },
  { id: 'h-2', team: 'home', x: 15, y: 90, number: '2', name: 'RB' },
  // Midfielders
  { id: 'h-11', team: 'home', x: 30, y: 10, number: '11', name: 'LM' },
  { id: 'h-8', team: 'home', x: 25, y: 40, number: '8', name: 'CM' },
  { id: 'h-6', team: 'home', x: 25, y: 60, number: '6', name: 'CM' },
  { id: 'h-7', team: 'home', x: 30, y: 90, number: '7', name: 'RM' },
  // Forwards
  { id: 'h-10', team: 'home', x: 45, y: 40, number: '10', name: 'FW' },
  { id: 'h-9', team: 'home', x: 45, y: 60, number: '9', name: 'FW' },
  // ---------
  // Away Team (High Press)
  // ---------
  { id: 'a-1', team: 'away', x: 90, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'a-3', team: 'away', x: 50, y: 15, number: '3', name: 'LB' },
  { id: 'a-4', team: 'away', x: 50, y: 40, number: '4', name: 'CB' },
  { id: 'a-5', team: 'away', x: 50, y: 60, number: '5', name: 'CB' },
  { id: 'a-2', team: 'away', x: 50, y: 85, number: '2', name: 'RB' },
  // Midfielders
  { id: 'a-11', team: 'away', x: 35, y: 15, number: '11', name: 'LM' },
  { id: 'a-8', team: 'away', x: 35, y: 40, number: '8', name: 'CM' },
  { id: 'a-6', team: 'away', x: 35, y: 60, number: '6', name: 'CM' },
  { id: 'a-7', team: 'away', x: 35, y: 85, number: '7', name: 'RM' },
  // Forwards
  { id: 'a-10', team: 'away', x: 20, y: 40, number: '10', name: 'FW' },
  { id: 'a-9', team: 'away', x: 20, y: 60, number: '9', name: 'FW' },
];

const POSSESSION_HOME_MIDDLE_PLAYERS: Player[] = [
  // ---------
  // Home Team (Progression)
  // ---------
  { id: 'h-1', team: 'home', x: 15, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'h-3', team: 'home', x: 45, y: 10, number: '3', name: 'LB' },
  { id: 'h-4', team: 'home', x: 35, y: 30, number: '4', name: 'CB' },
  { id: 'h-5', team: 'home', x: 35, y: 70, number: '5', name: 'CB' },
  { id: 'h-2', team: 'home', x: 45, y: 90, number: '2', name: 'RB' },
  // Midfielders
  { id: 'h-11', team: 'home', x: 62, y: 12, number: '11', name: 'LM' },
  { id: 'h-8', team: 'home', x: 45, y: 40, number: '8', name: 'CM' },
  { id: 'h-6', team: 'home', x: 45, y: 60, number: '6', name: 'CM' },
  { id: 'h-7', team: 'home', x: 62, y: 88, number: '7', name: 'RM' },
  // Forwards
  { id: 'h-10', team: 'home', x: 65, y: 40, number: '10', name: 'FW' },
  { id: 'h-9', team: 'home', x: 65, y: 60, number: '9', name: 'FW' },
  // ---------
  // Away Team (Mid Block)
  // ---------
  { id: 'a-1', team: 'away', x: 95, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'a-3', team: 'away', x: 72, y: 20, number: '3', name: 'LB' },
  { id: 'a-4', team: 'away', x: 72, y: 40, number: '4', name: 'CB' },
  { id: 'a-5', team: 'away', x: 72, y: 60, number: '5', name: 'CB' },
  { id: 'a-2', team: 'away', x: 72, y: 80, number: '2', name: 'RB' },
  // Midfielders
  { id: 'a-11', team: 'away', x: 60, y: 20, number: '11', name: 'LM' },
  { id: 'a-8', team: 'away', x: 60, y: 40, number: '8', name: 'CM' },
  { id: 'a-6', team: 'away', x: 60, y: 60, number: '6', name: 'CM' },
  { id: 'a-7', team: 'away', x: 60, y: 80, number: '7', name: 'RM' },
  // Forwards
  { id: 'a-10', team: 'away', x: 50, y: 40, number: '10', name: 'FW' },
  { id: 'a-9', team: 'away', x: 50, y: 60, number: '9', name: 'FW' },
];

const POSSESSION_HOME_ATTACKING_PLAYERS: Player[] = [
  // ---------
  // Home Team (Final Third)
  // ---------
  { id: 'h-1', team: 'home', x: 40, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'h-3', team: 'home', x: 68, y: 15, number: '3', name: 'LB' },
  { id: 'h-4', team: 'home', x: 60, y: 30, number: '4', name: 'CB' },
  { id: 'h-5', team: 'home', x: 60, y: 70, number: '5', name: 'CB' },
  { id: 'h-2', team: 'home', x: 68, y: 85, number: '2', name: 'RB' },
  // Midfielders
  { id: 'h-11', team: 'home', x: 85, y: 5, number: '11', name: 'LM' },
  { id: 'h-8', team: 'home', x: 72, y: 35, number: '8', name: 'CM' },
  { id: 'h-6', team: 'home', x: 72, y: 65, number: '6', name: 'CM' },
  { id: 'h-7', team: 'home', x: 85, y: 95, number: '7', name: 'RM' },
  // Forwards
  { id: 'h-10', team: 'home', x: 83, y: 40, number: '10', name: 'FW' },
  { id: 'h-9', team: 'home', x: 83, y: 60, number: '9', name: 'FW' },
  // ---------
  // Away Team (Low Block)
  // ---------
  { id: 'a-1', team: 'away', x: 98, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'a-3', team: 'away', x: 88, y: 20, number: '3', name: 'LB' },
  { id: 'a-4', team: 'away', x: 88, y: 38, number: '4', name: 'CB' },
  { id: 'a-5', team: 'away', x: 88, y: 62, number: '5', name: 'CB' },
  { id: 'a-2', team: 'away', x: 88, y: 80, number: '2', name: 'RB' },
  // Midfielders
  { id: 'a-11', team: 'away', x: 75, y: 20, number: '11', name: 'LM' },
  { id: 'a-8', team: 'away', x: 77, y: 40, number: '8', name: 'CM' },
  { id: 'a-6', team: 'away', x: 77, y: 60, number: '6', name: 'CM' },
  { id: 'a-7', team: 'away', x: 75, y: 80, number: '7', name: 'RM' },
  // Forwards
  { id: 'a-10', team: 'away', x: 66, y: 37, number: '10', name: 'FW' },
  { id: 'a-9', team: 'away', x: 66, y: 63, number: '9', name: 'FW' },
];

const POSSESSION_AWAY_DEFENSIVE_PLAYERS: Player[] = [
  // ---------
  // Home Team (High Press)
  // ---------
  { id: 'h-1', team: 'home', x: 10, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'h-3', team: 'home', x: 50, y: 15, number: '3', name: 'LB' },
  { id: 'h-4', team: 'home', x: 50, y: 40, number: '4', name: 'CB' },
  { id: 'h-5', team: 'home', x: 50, y: 60, number: '5', name: 'CB' },
  { id: 'h-2', team: 'home', x: 50, y: 85, number: '2', name: 'RB' },
  // Midfielders
  { id: 'h-11', team: 'home', x: 65, y: 15, number: '11', name: 'LM' },
  { id: 'h-8', team: 'home', x: 65, y: 40, number: '8', name: 'CM' },
  { id: 'h-6', team: 'home', x: 65, y: 60, number: '6', name: 'CM' },
  { id: 'h-7', team: 'home', x: 65, y: 85, number: '7', name: 'RM' },
  // Forwards
  { id: 'h-10', team: 'home', x: 80, y: 40, number: '10', name: 'FW' },
  { id: 'h-9', team: 'home', x: 80, y: 60, number: '9', name: 'FW' },
  // ---------
  // Away Team (Build Up Deep)
  // ---------
  { id: 'a-1', team: 'away', x: 95, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'a-3', team: 'away', x: 85, y: 10, number: '3', name: 'LB' },
  { id: 'a-4', team: 'away', x: 88, y: 35, number: '4', name: 'CB' },
  { id: 'a-5', team: 'away', x: 88, y: 65, number: '5', name: 'CB' },
  { id: 'a-2', team: 'away', x: 85, y: 90, number: '2', name: 'RB' },
  // Midfielders
  { id: 'a-11', team: 'away', x: 70, y: 10, number: '11', name: 'LM' },
  { id: 'a-8', team: 'away', x: 75, y: 40, number: '8', name: 'CM' },
  { id: 'a-6', team: 'away', x: 75, y: 60, number: '6', name: 'CM' },
  { id: 'a-7', team: 'away', x: 70, y: 90, number: '7', name: 'RM' },
  // Forwards
  { id: 'a-10', team: 'away', x: 55, y: 40, number: '10', name: 'FW' },
  { id: 'a-9', team: 'away', x: 55, y: 60, number: '9', name: 'FW' },
];

const POSSESSION_AWAY_MIDDLE_PLAYERS: Player[] = [
  // ---------
  // Home Team (Mid Block)
  // ---------
  { id: 'h-1', team: 'home', x: 5, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'h-3', team: 'home', x: 28, y: 20, number: '3', name: 'LB' },
  { id: 'h-4', team: 'home', x: 28, y: 40, number: '4', name: 'CB' },
  { id: 'h-5', team: 'home', x: 28, y: 60, number: '5', name: 'CB' },
  { id: 'h-2', team: 'home', x: 28, y: 80, number: '2', name: 'RB' },
  // Midfielders
  { id: 'h-11', team: 'home', x: 40, y: 20, number: '11', name: 'LM' },
  { id: 'h-8', team: 'home', x: 40, y: 40, number: '8', name: 'CM' },
  { id: 'h-6', team: 'home', x: 40, y: 60, number: '6', name: 'CM' },
  { id: 'h-7', team: 'home', x: 40, y: 80, number: '7', name: 'RM' },
  // Forwards
  { id: 'h-10', team: 'home', x: 50, y: 40, number: '10', name: 'FW' },
  { id: 'h-9', team: 'home', x: 50, y: 60, number: '9', name: 'FW' },
  // ---------
  // Away Team (Progression)
  // ---------
  { id: 'a-1', team: 'away', x: 85, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'a-3', team: 'away', x: 55, y: 10, number: '3', name: 'LB' },
  { id: 'a-4', team: 'away', x: 65, y: 30, number: '4', name: 'CB' },
  { id: 'a-5', team: 'away', x: 65, y: 70, number: '5', name: 'CB' },
  { id: 'a-2', team: 'away', x: 55, y: 90, number: '2', name: 'RB' },
  // Midfielders
  { id: 'a-11', team: 'away', x: 38, y: 12, number: '11', name: 'LM' },
  { id: 'a-8', team: 'away', x: 55, y: 40, number: '8', name: 'CM' },
  { id: 'a-6', team: 'away', x: 55, y: 60, number: '6', name: 'CM' },
  { id: 'a-7', team: 'away', x: 38, y: 88, number: '7', name: 'RM' },
  // Forwards
  { id: 'a-10', team: 'away', x: 35, y: 40, number: '10', name: 'FW' },
  { id: 'a-9', team: 'away', x: 35, y: 60, number: '9', name: 'FW' },
];

const POSSESSION_AWAY_ATTACKING_PLAYERS: Player[] = [
  // ---------
  // Home Team (Low Block)
  // ---------
  { id: 'h-1', team: 'home', x: 2, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'h-3', team: 'home', x: 12, y: 20, number: '3', name: 'LB' },
  { id: 'h-4', team: 'home', x: 12, y: 38, number: '4', name: 'CB' },
  { id: 'h-5', team: 'home', x: 12, y: 62, number: '5', name: 'CB' },
  { id: 'h-2', team: 'home', x: 12, y: 80, number: '2', name: 'RB' },
  // Midfielders
  { id: 'h-11', team: 'home', x: 25, y: 20, number: '11', name: 'LM' },
  { id: 'h-8', team: 'home', x: 23, y: 40, number: '8', name: 'CM' },
  { id: 'h-6', team: 'home', x: 23, y: 60, number: '6', name: 'CM' },
  { id: 'h-7', team: 'home', x: 25, y: 80, number: '7', name: 'RM' },
  // Forwards
  { id: 'h-10', team: 'home', x: 34, y: 37, number: '10', name: 'FW' },
  { id: 'h-9', team: 'home', x: 34, y: 63, number: '9', name: 'FW' },
  // ---------
  // Away Team (Final Third)
  // ---------
  { id: 'a-1', team: 'away', x: 60, y: 50, number: '1', name: 'GK' },
  // Defenders
  { id: 'a-3', team: 'away', x: 32, y: 15, number: '3', name: 'LB' },
  { id: 'a-4', team: 'away', x: 42, y: 30, number: '4', name: 'CB' },
  { id: 'a-5', team: 'away', x: 42, y: 70, number: '5', name: 'CB' },
  { id: 'a-2', team: 'away', x: 32, y: 85, number: '2', name: 'RB' },
  // Midfielders
  { id: 'a-11', team: 'away', x: 15, y: 5, number: '11', name: 'LM' },
  { id: 'a-8', team: 'away', x: 28, y: 35, number: '8', name: 'CM' },
  { id: 'a-6', team: 'away', x: 28, y: 65, number: '6', name: 'CM' },
  { id: 'a-7', team: 'away', x: 15, y: 95, number: '7', name: 'RM' },
  // Forwards
  { id: 'a-10', team: 'away', x: 17, y: 40, number: '10', name: 'FW' },
  { id: 'a-9', team: 'away', x: 17, y: 60, number: '9', name: 'FW' },
];

export const PLAYERS_BY_CONFIG = {
  neutral: {
    defensive: DEFAULT_ALL_PLAYERS,
    middle: DEFAULT_ALL_PLAYERS,
    attacking: DEFAULT_ALL_PLAYERS,
  },
  home: {
    defensive: POSSESSION_HOME_DEFENSIVE_PLAYERS,
    middle: POSSESSION_HOME_MIDDLE_PLAYERS,
    attacking: POSSESSION_HOME_ATTACKING_PLAYERS,
  },
  away: {
    defensive: POSSESSION_AWAY_DEFENSIVE_PLAYERS,
    middle: POSSESSION_AWAY_MIDDLE_PLAYERS,
    attacking: POSSESSION_AWAY_ATTACKING_PLAYERS,
  },
}

export const DEFAULT_BALL: Ball = { x: 50, y: 50 };

const POSSESSION_HOME_DEFENSIVE_BALL: Ball = { x: 14, y: 37 };
const POSSESSION_HOME_MIDDLE_BALL: Ball = { x: 37, y: 32 };
const POSSESSION_HOME_ATTACKING_BALL: Ball = { x: 62, y: 32 };
const POSSESSION_AWAY_DEFENSIVE_BALL: Ball = { x: 86, y: 37 };
const POSSESSION_AWAY_MIDDLE_BALL: Ball = { x: 63, y: 32 };
const POSSESSION_AWAY_ATTACKING_BALL: Ball = { x: 40, y: 32 };

export const BALL_BY_CONFIG = {
  neutral: {
    defensive: DEFAULT_BALL,
    middle: DEFAULT_BALL,
    attacking: DEFAULT_BALL,
  },
  home: {
    defensive: POSSESSION_HOME_DEFENSIVE_BALL,
    middle: POSSESSION_HOME_MIDDLE_BALL,
    attacking: POSSESSION_HOME_ATTACKING_BALL,
  },
  away: {
    defensive: POSSESSION_AWAY_DEFENSIVE_BALL,
    middle: POSSESSION_AWAY_MIDDLE_BALL,
    attacking: POSSESSION_AWAY_ATTACKING_BALL,
  },
}