import type { PlayerState } from '@/types/game';
import {
	DINO_COLOR,
	DINO_HEAD_COLOR,
	GRAVITY,
	GROUND_Y,
	JUMP_FORCE,
	PLAYER_HEIGHT,
	PLAYER_WIDTH,
	PLAYER_X,
} from './constants';

export function createPlayer(): PlayerState {
	return {
		x: PLAYER_X,
		y: GROUND_Y - PLAYER_HEIGHT,
		width: PLAYER_WIDTH,
		height: PLAYER_HEIGHT,
		velocityY: 0,
		isJumping: false,
	};
}

export function updatePlayer(
	player: PlayerState,
	jumpPressed: boolean,
): PlayerState {
	let { y, velocityY, isJumping } = player;

	// Start a jump if on the ground and jump is pressed
	if (jumpPressed && !isJumping) {
		velocityY = JUMP_FORCE;
		isJumping = true;
	}

	// Apply gravity
	velocityY += GRAVITY;
	y += velocityY;

	// Clamp to ground
	const groundLevel = GROUND_Y - PLAYER_HEIGHT;
	if (y >= groundLevel) {
		y = groundLevel;
		velocityY = 0;
		isJumping = false;
	}

	return { ...player, y, velocityY, isJumping };
}

export function drawPlayer(
	ctx: CanvasRenderingContext2D,
	player: PlayerState,
): void {
	const { x, y, width, height } = player;

	// Body (rectangle)
	ctx.fillStyle = DINO_COLOR;
	ctx.fillRect(x, y + 10, width, height - 10);

	// Head (slightly smaller rectangle on top-right)
	ctx.fillStyle = DINO_HEAD_COLOR;
	ctx.fillRect(x + 10, y, width - 10, 15);

	// Eye (small white circle with black pupil)
	ctx.fillStyle = '#ffffff';
	ctx.beginPath();
	ctx.arc(x + width - 8, y + 6, 3, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = '#000000';
	ctx.beginPath();
	ctx.arc(x + width - 7, y + 6, 1.5, 0, Math.PI * 2);
	ctx.fill();

	// Legs (two small rectangles at bottom)
	ctx.fillStyle = DINO_COLOR;
	ctx.fillRect(x + 8, y + height, 6, 8);
	ctx.fillRect(x + width - 14, y + height, 6, 8);

	// Tail (small triangle on left)
	ctx.fillStyle = DINO_HEAD_COLOR;
	ctx.beginPath();
	ctx.moveTo(x, y + 15);
	ctx.lineTo(x - 10, y + 10);
	ctx.lineTo(x, y + 25);
	ctx.closePath();
	ctx.fill();
}
