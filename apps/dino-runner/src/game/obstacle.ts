import type { Obstacle, PlayerState } from '@/types/game';
import {
	CACTUS_COLOR,
	CANVAS_WIDTH,
	GROUND_Y,
	MAX_OBSTACLE_HEIGHT,
	MAX_OBSTACLE_WIDTH,
	MAX_SPAWN_DISTANCE,
	MIN_OBSTACLE_HEIGHT,
	MIN_OBSTACLE_WIDTH,
	MIN_SPAWN_DISTANCE,
} from './constants';

function randomBetween(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createObstacle(): Obstacle {
	const width = randomBetween(MIN_OBSTACLE_WIDTH, MAX_OBSTACLE_WIDTH);
	const height = randomBetween(MIN_OBSTACLE_HEIGHT, MAX_OBSTACLE_HEIGHT);

	return {
		x: CANVAS_WIDTH + randomBetween(0, 50),
		y: GROUND_Y - height,
		width,
		height,
	};
}

export function updateObstacles(
	obstacles: Obstacle[],
	speed: number,
): Obstacle[] {
	return obstacles
		.map((obs) => ({ ...obs, x: obs.x - speed }))
		.filter((obs) => obs.x + obs.width > -50);
}

export function shouldSpawnObstacle(obstacles: Obstacle[]): boolean {
	if (obstacles.length === 0) return true;

	const rightmost = obstacles.reduce((max, obs) => (obs.x > max.x ? obs : max));

	const spawnDistance = randomBetween(MIN_SPAWN_DISTANCE, MAX_SPAWN_DISTANCE);
	return CANVAS_WIDTH - rightmost.x > spawnDistance;
}

export function checkCollision(
	player: PlayerState,
	obstacle: Obstacle,
): boolean {
	// AABB collision with a small margin for fairness
	const margin = 5;

	return (
		player.x + margin < obstacle.x + obstacle.width &&
		player.x + player.width - margin > obstacle.x &&
		player.y + margin < obstacle.y + obstacle.height &&
		player.y + player.height - margin > obstacle.y
	);
}

export function drawObstacle(
	ctx: CanvasRenderingContext2D,
	obstacle: Obstacle,
): void {
	const { x, y, width, height } = obstacle;

	// Main cactus body
	ctx.fillStyle = CACTUS_COLOR;
	ctx.fillRect(x, y, width, height);

	// Cactus details — small arms
	if (height > 40) {
		// Left arm
		ctx.fillRect(x - 6, y + 10, 8, 4);
		ctx.fillRect(x - 6, y + 6, 4, 8);

		// Right arm
		ctx.fillRect(x + width - 2, y + 18, 8, 4);
		ctx.fillRect(x + width + 2, y + 14, 4, 8);
	}

	// Slightly lighter top
	ctx.fillStyle = '#3a7a28';
	ctx.fillRect(x + 2, y, width - 4, 4);
}
