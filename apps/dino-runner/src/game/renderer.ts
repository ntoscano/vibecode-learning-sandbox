import {
	CANVAS_HEIGHT,
	CANVAS_WIDTH,
	GROUND_COLOR,
	GROUND_HEIGHT,
	GROUND_Y,
	OVERLAY_COLOR,
	SKY_COLOR,
	TEXT_COLOR,
} from './constants';

export function clearCanvas(ctx: CanvasRenderingContext2D): void {
	ctx.fillStyle = SKY_COLOR;
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

export function drawGround(ctx: CanvasRenderingContext2D): void {
	ctx.fillStyle = GROUND_COLOR;
	ctx.fillRect(0, GROUND_Y, CANVAS_WIDTH, GROUND_HEIGHT);

	// Ground texture — small dashes
	ctx.strokeStyle = '#a08060';
	ctx.lineWidth = 1;
	for (let i = 0; i < CANVAS_WIDTH; i += 20) {
		ctx.beginPath();
		ctx.moveTo(i, GROUND_Y + 6);
		ctx.lineTo(i + 8, GROUND_Y + 6);
		ctx.stroke();
	}
}

export function drawScore(
	ctx: CanvasRenderingContext2D,
	score: number,
	highScore: number,
): void {
	ctx.fillStyle = TEXT_COLOR;
	ctx.font = 'bold 16px monospace';
	ctx.textAlign = 'right';

	const scoreText = `Score: ${Math.floor(score)}`;
	ctx.fillText(scoreText, CANVAS_WIDTH - 20, 30);

	if (highScore > 0) {
		ctx.font = '14px monospace';
		ctx.fillStyle = '#666666';
		ctx.fillText(`HI: ${Math.floor(highScore)}`, CANVAS_WIDTH - 20, 50);
	}
}

export function drawMessage(
	ctx: CanvasRenderingContext2D,
	title: string,
	subtitle: string,
): void {
	const centerX = CANVAS_WIDTH / 2;
	const centerY = CANVAS_HEIGHT / 2;

	// Semi-transparent overlay
	ctx.fillStyle = OVERLAY_COLOR;
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	// Title
	ctx.fillStyle = TEXT_COLOR;
	ctx.font = 'bold 28px sans-serif';
	ctx.textAlign = 'center';
	ctx.fillText(title, centerX, centerY - 10);

	// Subtitle
	ctx.font = '16px sans-serif';
	ctx.fillStyle = '#666666';
	ctx.fillText(subtitle, centerX, centerY + 20);
}
