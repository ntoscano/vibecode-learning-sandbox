import type { HitEffect } from '@/types/game';
import {
	EFFECT_EXPAND_RATE,
	EFFECT_FADE_RATE,
	EFFECT_MAX_RADIUS,
	HIT_EFFECT_COLOR,
} from './constants';

export function createHitEffect(x: number, y: number): HitEffect {
	return {
		x,
		y,
		radius: 5,
		opacity: 1,
	};
}

export function updateEffects(effects: HitEffect[]): HitEffect[] {
	return effects
		.map((effect) => ({
			...effect,
			radius: Math.min(effect.radius + EFFECT_EXPAND_RATE, EFFECT_MAX_RADIUS),
			opacity: effect.opacity - EFFECT_FADE_RATE,
		}))
		.filter((effect) => effect.opacity > 0);
}

export function drawEffect(
	ctx: CanvasRenderingContext2D,
	effect: HitEffect,
): void {
	ctx.save();
	ctx.globalAlpha = effect.opacity;

	// Outer ring
	ctx.strokeStyle = HIT_EFFECT_COLOR;
	ctx.lineWidth = 3;
	ctx.beginPath();
	ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
	ctx.stroke();

	// Inner ring
	ctx.strokeStyle = '#FFFFFF';
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.arc(effect.x, effect.y, effect.radius * 0.6, 0, Math.PI * 2);
	ctx.stroke();

	// Center flash
	ctx.fillStyle = '#FFFFFF';
	ctx.beginPath();
	ctx.arc(effect.x, effect.y, 3 * effect.opacity, 0, Math.PI * 2);
	ctx.fill();

	ctx.restore();
}
