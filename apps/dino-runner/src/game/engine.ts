import type { GameState } from '@/types/game';
import { INITIAL_SPEED, MAX_SPEED, SPEED_INCREMENT } from './constants';
import {
	checkCollision,
	createObstacle,
	drawObstacle,
	shouldSpawnObstacle,
	updateObstacles,
} from './obstacle';
import { createPlayer, drawPlayer, updatePlayer } from './player';
import { clearCanvas, drawGround, drawMessage, drawScore } from './renderer';

export function createInitialState(): GameState {
	return {
		status: 'idle',
		score: 0,
		highScore: 0,
		speed: INITIAL_SPEED,
		player: createPlayer(),
		obstacles: [],
		frameCount: 0,
	};
}

export function startGame(state: GameState): GameState {
	return {
		...state,
		status: 'playing',
		score: 0,
		speed: INITIAL_SPEED,
		player: createPlayer(),
		obstacles: [],
		frameCount: 0,
	};
}

export function tick(state: GameState, jumpPressed: boolean): GameState {
	if (state.status !== 'playing') {
		return state;
	}

	// Update player
	const player = updatePlayer(state.player, jumpPressed);

	// Update obstacles
	let obstacles = updateObstacles(state.obstacles, state.speed);

	// Spawn new obstacles
	if (shouldSpawnObstacle(obstacles)) {
		obstacles = [...obstacles, createObstacle()];
	}

	// Check collisions
	for (const obstacle of obstacles) {
		if (checkCollision(player, obstacle)) {
			return {
				...state,
				status: 'gameOver',
				player,
				obstacles,
				highScore: Math.max(state.highScore, Math.floor(state.score)),
			};
		}
	}

	// Increment score and speed
	const score = state.score + 0.15;
	const speed = Math.min(state.speed + SPEED_INCREMENT, MAX_SPEED);
	const frameCount = state.frameCount + 1;

	return { ...state, player, obstacles, score, speed, frameCount };
}

export function render(ctx: CanvasRenderingContext2D, state: GameState): void {
	clearCanvas(ctx);
	drawGround(ctx);

	// Draw obstacles
	for (const obstacle of state.obstacles) {
		drawObstacle(ctx, obstacle);
	}

	// Draw player
	drawPlayer(ctx, state.player);

	// Draw score
	drawScore(ctx, state.score, state.highScore);

	// Draw status messages
	if (state.status === 'idle') {
		drawMessage(ctx, 'Dino Runner', 'Press Space or Click to Start');
	} else if (state.status === 'gameOver') {
		drawMessage(
			ctx,
			'Game Over!',
			`Score: ${Math.floor(state.score)} — Press Space or Click to Restart`,
		);
	}
}
