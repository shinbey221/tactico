export type TeamSide = 'home' | 'away';
export type PossessionState = 'home' | 'away' | 'neutral';
export type ZoneState = 'defensive' | 'middle' | 'attacking';

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

export interface Dictionary {
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  ui: {
    appName: string;
    numbers: string;
    names: string;
    reset: string;
    adLabel: string;
    adPlaceholder: string;
    homeTeam: string;
    awayTeam: string;
    kitColor: string;
    playerNo: string;
    playerName: string;
    possession: string;
    zone: string;
    neutral: string;
    defensiveThird: string;
    middleThird: string;
    attackingThird: string;
  };
}