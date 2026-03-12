'use client';

import { CANVAS_HEIGHT, CANVAS_WIDTH } from '@/game/constants';
import {
	createInitialState,
	handleShot,
	render,
	startGame,
	tick,
} from '@/game/engine';
import type { GameState } from '@/types/game';
import { useCallback, useEffect, useRef, useState } from 'react';

interface GameInfo {
	score: number;
	highScore: number;
	timeRemaining: number;
	status: GameState['status'];
}

export function GameCanvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const gameStateRef = useRef<GameState>(createInitialState());
	const animationFrameRef = useRef<number>(0);

	const [gameInfo, setGameInfo] = useState<GameInfo>({
		score: 0,
		highScore: 0,
		timeRemaining: 60,
		status: 'idle',
	});

	const handleClick = useCallback(() => {
		const state = gameStateRef.current;

		if (state.status === 'idle' || state.status === 'gameOver') {
			gameStateRef.current = startGame(state);
		} else if (state.status === 'playing') {
			gameStateRef.current = handleShot(state);
		}
	}, []);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent<HTMLCanvasElement>) => {
			const canvas = canvasRef.current;
			if (!canvas) return;

			const rect = canvas.getBoundingClientRect();
			const scaleX = CANVAS_WIDTH / rect.width;
			const scaleY = CANVAS_HEIGHT / rect.height;

			gameStateRef.current = {
				...gameStateRef.current,
				mouseX: (e.clientX - rect.left) * scaleX,
				mouseY: (e.clientY - rect.top) * scaleY,
			};
		},
		[],
	);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Initial render
		render(ctx, gameStateRef.current);

		// Game loop
		function gameLoop() {
			const state = gameStateRef.current;
			const newState = tick(state);
			gameStateRef.current = newState;

			// Render
			if (ctx) render(ctx, newState);

			// Sync React state for UI display
			if (
				newState.status !== state.status ||
				newState.score !== state.score ||
				Math.ceil(newState.timeRemaining) !== Math.ceil(state.timeRemaining)
			) {
				setGameInfo({
					score: newState.score,
					highScore: newState.highScore,
					timeRemaining: newState.timeRemaining,
					status: newState.status,
				});
			}

			animationFrameRef.current = requestAnimationFrame(gameLoop);
		}

		animationFrameRef.current = requestAnimationFrame(gameLoop);

		return () => {
			cancelAnimationFrame(animationFrameRef.current);
		};
	}, []);

	return (
		<div className="flex flex-col items-center gap-4">
			<div className="flex w-full max-w-[800px] items-center justify-between px-2 text-sm">
				<div className="font-mono">
					{gameInfo.status === 'playing' && (
						<span className="text-muted-foreground">
							Score:{' '}
							<span className="font-bold text-foreground">
								{gameInfo.score}
							</span>
						</span>
					)}
					{gameInfo.status === 'gameOver' && (
						<span className="text-destructive">
							Game Over! Final Score:{' '}
							<span className="font-bold">{gameInfo.score}</span>
						</span>
					)}
					{gameInfo.status === 'idle' && (
						<span className="text-muted-foreground">Ready to play</span>
					)}
				</div>
				{gameInfo.highScore > 0 && (
					<div className="font-mono text-muted-foreground">
						Best: <span className="font-bold">{gameInfo.highScore}</span>
					</div>
				)}
			</div>

			<canvas
				ref={canvasRef}
				width={CANVAS_WIDTH}
				height={CANVAS_HEIGHT}
				onClick={handleClick}
				onMouseMove={handleMouseMove}
				className="rounded-lg border shadow-sm"
				style={{ maxWidth: '100%', height: 'auto', cursor: 'none' }}
			/>

			<p className="text-sm text-muted-foreground">
				Move mouse to aim, click to shoot
			</p>
		</div>
	);
}
