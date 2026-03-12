import {
	CANVAS_HEIGHT,
	CANVAS_WIDTH,
	CROSSHAIR_COLOR,
	GRASS_COLOR,
	GRASS_DARK,
	GROUND_Y,
	SCORE_COLOR,
	SKY_BOTTOM,
	SKY_TOP,
	TIMER_COLOR,
	TIMER_WARNING_COLOR,
} from './constants';

export function clearCanvas(ctx: CanvasRenderingContext2D): void {
	// Sky gradient
	const gradient = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
	gradient.addColorStop(0, SKY_TOP);
	gradient.addColorStop(1, SKY_BOTTOM);
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, CANVAS_WIDTH, GROUND_Y);
}

export function drawGround(ctx: CanvasRenderingContext2D): void {
	// Main grass
	ctx.fillStyle = GRASS_COLOR;
	ctx.fillRect(0, GROUND_Y, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y);

	// Darker grass strip at top for depth
	ctx.fillStyle = GRASS_DARK;
	ctx.fillRect(0, GROUND_Y, CANVAS_WIDTH, 6);
}

export function drawCrosshair(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
): void {
	ctx.save();
	ctx.strokeStyle = CROSSHAIR_COLOR;
	ctx.lineWidth = 2;

	// Outer circle
	ctx.beginPath();
	ctx.arc(x, y, 15, 0, Math.PI * 2);
	ctx.stroke();

	// Cross lines
	const lineLen = 10;
	// Top
	ctx.beginPath();
	ctx.moveTo(x, y - 20);
	ctx.lineTo(x, y - lineLen);
	ctx.stroke();
	// Bottom
	ctx.beginPath();
	ctx.moveTo(x, y + lineLen);
	ctx.lineTo(x, y + 20);
	ctx.stroke();
	// Left
	ctx.beginPath();
	ctx.moveTo(x - 20, y);
	ctx.lineTo(x - lineLen, y);
	ctx.stroke();
	// Right
	ctx.beginPath();
	ctx.moveTo(x + lineLen, y);
	ctx.lineTo(x + 20, y);
	ctx.stroke();

	// Center dot
	ctx.fillStyle = CROSSHAIR_COLOR;
	ctx.beginPath();
	ctx.arc(x, y, 2, 0, Math.PI * 2);
	ctx.fill();

	ctx.restore();
}

export function drawScore(
	ctx: CanvasRenderingContext2D,
	score: number,
	highScore: number,
): void {
	ctx.save();

	// Score background for readability
	ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
	ctx.fillRect(CANVAS_WIDTH - 180, 8, 170, highScore > 0 ? 55 : 35);

	ctx.fillStyle = SCORE_COLOR;
	ctx.font = 'bold 20px monospace';
	ctx.textAlign = 'right';
	ctx.fillText(`Score: ${score}`, CANVAS_WIDTH - 20, 32);

	if (highScore > 0) {
		ctx.font = '14px monospace';
		ctx.fillStyle = '#CCCCCC';
		ctx.fillText(`Best: ${highScore}`, CANVAS_WIDTH - 20, 52);
	}

	ctx.restore();
}

export function drawTimer(
	ctx: CanvasRenderingContext2D,
	timeRemaining: number,
): void {
	ctx.save();

	const seconds = Math.ceil(timeRemaining);

	// Timer background
	ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
	ctx.fillRect(8, 8, 80, 35);

	// Timer text — turns red when under 10s
	ctx.fillStyle = seconds <= 10 ? TIMER_WARNING_COLOR : TIMER_COLOR;
	ctx.font = 'bold 24px monospace';
	ctx.textAlign = 'left';
	ctx.fillText(`${seconds}s`, 18, 34);

	ctx.restore();
}

export function drawMessage(
	ctx: CanvasRenderingContext2D,
	title: string,
	subtitle: string,
): void {
	ctx.save();

	// Semi-transparent overlay
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	// Title
	ctx.fillStyle = '#FFFFFF';
	ctx.font = 'bold 48px sans-serif';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(title, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 30);

	// Subtitle
	ctx.font = '20px sans-serif';
	ctx.fillStyle = '#CCCCCC';
	ctx.fillText(subtitle, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 20);

	ctx.restore();
}
