import type { GameState } from '@/types/game';
import {
	CANVAS_WIDTH,
	COMBO_BONUS,
	COMBO_WINDOW,
	GAME_DURATION,
	HIT_SCORE,
	INITIAL_SPAWN_INTERVAL,
	MAX_DUCKS_ON_SCREEN,
	MIN_SPAWN_INTERVAL,
} from './constants';
import { checkHit, createDuck, drawDuck, updateDucks } from './duck';
import { createHitEffect, drawEffect, updateEffects } from './effects';
import {
	clearCanvas,
	drawCrosshair,
	drawGround,
	drawMessage,
	drawScore,
	drawTimer,
} from './renderer';

export function createInitialState(): GameState {
	return {
		status: 'idle',
		score: 0,
		highScore: 0,
		timeRemaining: GAME_DURATION,
		ducks: [],
		effects: [],
		mouseX: CANVAS_WIDTH / 2,
		mouseY: 250,
		lastSpawnFrame: 0,
		frameCount: 0,
		difficulty: 0,
		lastHitFrame: 0,
	};
}

export function startGame(state: GameState): GameState {
	return {
		...state,
		status: 'playing',
		score: 0,
		timeRemaining: GAME_DURATION,
		ducks: [],
		effects: [],
		lastSpawnFrame: 0,
		frameCount: 0,
		difficulty: 0,
		lastHitFrame: 0,
	};
}

export function tick(state: GameState): GameState {
	if (state.status !== 'playing') {
		return state;
	}

	// Decrement timer (~60fps, so subtract 1/60 per frame)
	const timeRemaining = state.timeRemaining - 1 / 60;

	if (timeRemaining <= 0) {
		return {
			...state,
			status: 'gameOver',
			timeRemaining: 0,
			highScore: Math.max(state.highScore, state.score),
		};
	}

	// Update ducks
	const ducks = updateDucks(state.ducks);

	// Update effects
	const effects = updateEffects(state.effects);

	// Increase difficulty over time
	const difficulty = (GAME_DURATION - timeRemaining) / GAME_DURATION;

	// Maybe spawn a new duck
	const spawnInterval =
		INITIAL_SPAWN_INTERVAL -
		(INITIAL_SPAWN_INTERVAL - MIN_SPAWN_INTERVAL) * difficulty;
	const frameCount = state.frameCount + 1;

	let newDucks = ducks;
	let lastSpawnFrame = state.lastSpawnFrame;

	if (
		frameCount - lastSpawnFrame >= spawnInterval &&
		ducks.length < MAX_DUCKS_ON_SCREEN
	) {
		newDucks = [...ducks, createDuck(difficulty)];
		lastSpawnFrame = frameCount;
	}

	return {
		...state,
		timeRemaining,
		ducks: newDucks,
		effects,
		frameCount,
		lastSpawnFrame,
		difficulty,
	};
}

export function handleShot(state: GameState): GameState {
	if (state.status !== 'playing') {
		return state;
	}

	let score = state.score;
	let lastHitFrame = state.lastHitFrame;
	const newDucks = [...state.ducks];
	const newEffects = [...state.effects];

	// Check each duck for a hit (iterate in reverse so we hit the topmost/latest duck first)
	for (let i = newDucks.length - 1; i >= 0; i--) {
		const duck = newDucks[i];
		if (!duck) continue;
		if (checkHit(duck, state.mouseX, state.mouseY)) {
			// Remove the hit duck
			newDucks.splice(i, 1);

			// Calculate score — bonus for consecutive hits
			const isCombo =
				state.frameCount - lastHitFrame < COMBO_WINDOW && lastHitFrame > 0;
			score += HIT_SCORE + (isCombo ? COMBO_BONUS : 0);
			lastHitFrame = state.frameCount;

			// Create hit effect at duck center
			newEffects.push(
				createHitEffect(duck.x + duck.width / 2, duck.y + duck.height / 2),
			);

			// Only hit one duck per click
			break;
		}
	}

	return {
		...state,
		score,
		ducks: newDucks,
		effects: newEffects,
		lastHitFrame,
	};
}

export function render(ctx: CanvasRenderingContext2D, state: GameState): void {
	// Background
	clearCanvas(ctx);
	drawGround(ctx);

	// Ducks
	for (const duck of state.ducks) {
		drawDuck(ctx, duck);
	}

	// Effects
	for (const effect of state.effects) {
		drawEffect(ctx, effect);
	}

	// Crosshair (always visible)
	drawCrosshair(ctx, state.mouseX, state.mouseY);

	// HUD — only during gameplay or gameOver
	if (state.status === 'playing' || state.status === 'gameOver') {
		drawScore(ctx, state.score, state.highScore);
		drawTimer(ctx, state.timeRemaining);
	}

	// Messages
	if (state.status === 'idle') {
		drawMessage(ctx, 'Duck Shooter', 'Click to Start');
	} else if (state.status === 'gameOver') {
		drawMessage(
			ctx,
			'Game Over!',
			`Score: ${state.score} — Click to Play Again`,
		);
	}
}
