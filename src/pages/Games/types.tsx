export interface Game {
  id: string;
  name: string;
  image: string;
  description?: string;
  category?: string;
  maxPlayers?: number;
  minPlayers?: number;
}

export interface GameInstance {
  id: string;
  gameId: string;
  name: string;
  creator: string;
  maxPlayers: number;
  currentPlayers: number;
  entryFee: number;
  isPrivate: boolean;
  status: 'waiting' | 'playing' | 'finished';
  createdAt: Date;
  startedAt?: Date;
  finishedAt?: Date;
}

export interface CreateGameData {
  game: Game;
  name: string;
  maxPlayers: number;
  entryFee: number;
  isPrivate: boolean;
  description?: string;
}