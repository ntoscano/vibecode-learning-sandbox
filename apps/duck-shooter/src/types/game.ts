export type GameStatus = 'idle' | 'playing' | 'gameOver';

export type DuckDirection =
	| 'left'
	| 'right'
	| 'diagonal-left'
	| 'diagonal-right';

export interface Duck {
	id: number;
	x: number;
	y: number;
	width: number;
	height: number;
	velocityX: number;
	velocityY: number;
	direction: DuckDirection;
	wingUp: boolean;
	flapTimer: number;
}

export interface HitEffect {
	x: number;
	y: number;
	radius: number;
	opacity: number;
}

export interface GameState {
	status: GameStatus;
	score: number;
	highScore: number;
	timeRemaining: number;
	ducks: Duck[];
	effects: HitEffect[];
	mouseX: number;
	mouseY: number;
	lastSpawnFrame: number;
	frameCount: number;
	difficulty: number;
	lastHitFrame: number;
}
