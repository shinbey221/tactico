export type TeamSide = 'home' | 'away';

export interface Position {
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
}

export interface Player {
  id: string;
  team: TeamSide;
  number: string;
  name: string;
  x: number;
  y: number;
}

export interface Ball {
  x: number;
  y: number;
}

export interface AppState {
  players: Player[];
  ball: Ball;
  settings: {
    showNames: boolean;
    showNumbers: boolean;
    homeColor: string;
    awayColor: string;
  };
}