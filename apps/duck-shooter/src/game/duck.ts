import type { Duck, DuckDirection } from '@/types/game';
import {
	CANVAS_HEIGHT,
	CANVAS_WIDTH,
	DUCK_BEAK_COLOR,
	DUCK_BODY_COLOR,
	DUCK_BODY_LIGHT,
	DUCK_EYE_COLOR,
	DUCK_FLAP_INTERVAL,
	DUCK_HEIGHT,
	DUCK_MAX_SPEED,
	DUCK_MIN_SPEED,
	DUCK_WIDTH,
	DUCK_WING_COLOR,
	GROUND_Y,
	HIT_RADIUS,
} from './constants';

let nextDuckId = 0;

export function createDuck(difficulty: number): Duck {
	const directions: DuckDirection[] = [
		'left',
		'right',
		'diagonal-left',
		'diagonal-right',
	];
	const direction =
		directions[Math.floor(Math.random() * directions.length)] ?? 'right';

	const speedMultiplier = 1 + difficulty * 0.3;
	const baseSpeed =
		DUCK_MIN_SPEED + Math.random() * (DUCK_MAX_SPEED - DUCK_MIN_SPEED);
	const speed = baseSpeed * speedMultiplier;

	let x: number;
	let y: number;
	let velocityX: number;
	let velocityY: number;

	// Spawn from edges based on direction
	switch (direction) {
		case 'right':
			// Flies left to right — spawn on the left edge
			x = -DUCK_WIDTH;
			y = 60 + Math.random() * (GROUND_Y - 160);
			velocityX = speed;
			velocityY = 0;
			break;
		case 'left':
			// Flies right to left — spawn on the right edge
			x = CANVAS_WIDTH + DUCK_WIDTH;
			y = 60 + Math.random() * (GROUND_Y - 160);
			velocityX = -speed;
			velocityY = 0;
			break;
		case 'diagonal-right':
			// Flies left-to-right going upward
			x = -DUCK_WIDTH;
			y = 200 + Math.random() * (GROUND_Y - 250);
			velocityX = speed;
			velocityY = -speed * 0.4;
			break;
		case 'diagonal-left':
			// Flies right-to-left going upward
			x = CANVAS_WIDTH + DUCK_WIDTH;
			y = 200 + Math.random() * (GROUND_Y - 250);
			velocityX = -speed;
			velocityY = -speed * 0.4;
			break;
	}

	return {
		id: nextDuckId++,
		x,
		y,
		width: DUCK_WIDTH,
		height: DUCK_HEIGHT,
		velocityX,
		velocityY,
		direction,
		wingUp: false,
		flapTimer: DUCK_FLAP_INTERVAL,
	};
}

export function updateDucks(ducks: Duck[]): Duck[] {
	return ducks
		.map((duck) => {
			const newFlapTimer = duck.flapTimer - 1;
			const shouldToggle = newFlapTimer <= 0;

			return {
				...duck,
				x: duck.x + duck.velocityX,
				y: duck.y + duck.velocityY,
				wingUp: shouldToggle ? !duck.wingUp : duck.wingUp,
				flapTimer: shouldToggle ? DUCK_FLAP_INTERVAL : newFlapTimer,
			};
		})
		.filter((duck) => {
			// Remove ducks that have flown off-screen
			const margin = 100;
			return (
				duck.x > -margin &&
				duck.x < CANVAS_WIDTH + margin &&
				duck.y > -margin &&
				duck.y < CANVAS_HEIGHT + margin
			);
		});
}

export function checkHit(duck: Duck, mouseX: number, mouseY: number): boolean {
	const centerX = duck.x + duck.width / 2;
	const centerY = duck.y + duck.height / 2;
	const dx = centerX - mouseX;
	const dy = centerY - mouseY;
	const distance = Math.sqrt(dx * dx + dy * dy);
	return distance < HIT_RADIUS;
}

export function drawDuck(ctx: CanvasRenderingContext2D, duck: Duck): void {
	const cx = duck.x + duck.width / 2;
	const cy = duck.y + duck.height / 2;

	const facingLeft = duck.velocityX < 0;

	ctx.save();

	if (facingLeft) {
		// Flip horizontally around the duck center
		ctx.translate(cx, cy);
		ctx.scale(-1, 1);
		ctx.translate(-cx, -cy);
	}

	// Body (oval)
	ctx.fillStyle = DUCK_BODY_COLOR;
	ctx.beginPath();
	ctx.ellipse(cx, cy, duck.width / 2, duck.height / 2, 0, 0, Math.PI * 2);
	ctx.fill();

	// Body highlight
	ctx.fillStyle = DUCK_BODY_LIGHT;
	ctx.beginPath();
	ctx.ellipse(
		cx + 2,
		cy - 3,
		duck.width / 2.8,
		duck.height / 3,
		0,
		0,
		Math.PI * 2,
	);
	ctx.fill();

	// Wing
	ctx.fillStyle = DUCK_WING_COLOR;
	const wingOffsetY = duck.wingUp ? -8 : 4;
	ctx.beginPath();
	ctx.ellipse(
		cx - 5,
		cy + wingOffsetY,
		14,
		6,
		duck.wingUp ? -0.3 : 0.3,
		0,
		Math.PI * 2,
	);
	ctx.fill();

	// Beak (triangle pointing right)
	ctx.fillStyle = DUCK_BEAK_COLOR;
	ctx.beginPath();
	ctx.moveTo(cx + duck.width / 2, cy - 2);
	ctx.lineTo(cx + duck.width / 2 + 12, cy + 2);
	ctx.lineTo(cx + duck.width / 2, cy + 6);
	ctx.closePath();
	ctx.fill();

	// Eye
	ctx.fillStyle = DUCK_EYE_COLOR;
	ctx.beginPath();
	ctx.arc(cx + duck.width / 4, cy - 5, 3, 0, Math.PI * 2);
	ctx.fill();

	// Pupil
	ctx.fillStyle = '#000000';
	ctx.beginPath();
	ctx.arc(cx + duck.width / 4 + 1, cy - 5, 1.5, 0, Math.PI * 2);
	ctx.fill();

	ctx.restore();
}
