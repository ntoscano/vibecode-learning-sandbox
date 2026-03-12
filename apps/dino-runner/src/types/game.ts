export type GameStatus = 'idle' | 'playing' | 'gameOver';

export interface PlayerState {
	x: number;
	y: number;
	width: number;
	height: number;
	velocityY: number;
	isJumping: boolean;
}

export interface Obstacle {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface GameState {
	status: GameStatus;
	score: number;
	highScore: number;
	speed: number;
	player: PlayerState;
	obstacles: Obstacle[];
	frameCount: number;
}
