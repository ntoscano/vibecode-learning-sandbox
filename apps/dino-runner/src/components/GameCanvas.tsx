'use client';

import { CANVAS_HEIGHT, CANVAS_WIDTH } from '@/game/constants';
import { createInitialState, render, startGame, tick } from '@/game/engine';
import type { GameState } from '@/types/game';
import { useCallback, useEffect, useRef, useState } from 'react';

interface GameInfo {
	score: number;
	highScore: number;
	status: GameState['status'];
}

export function GameCanvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const gameStateRef = useRef<GameState>(createInitialState());
	const jumpPressedRef = useRef(false);
	const animationFrameRef = useRef<number>(0);

	const [gameInfo, setGameInfo] = useState<GameInfo>({
		score: 0,
		highScore: 0,
		status: 'idle',
	});

	const handleAction = useCallback(() => {
		const state = gameStateRef.current;

		if (state.status === 'idle' || state.status === 'gameOver') {
			gameStateRef.current = startGame(state);
		} else if (state.status === 'playing') {
			jumpPressedRef.current = true;
		}
	}, []);

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
			const newState = tick(state, jumpPressedRef.current);
			gameStateRef.current = newState;

			// Reset jump after processing
			jumpPressedRef.current = false;

			// Render
			if (ctx) render(ctx, newState);

			// Sync React state for UI display
			if (
				newState.status !== state.status ||
				Math.floor(newState.score) !== Math.floor(state.score)
			) {
				setGameInfo({
					score: Math.floor(newState.score),
					highScore: Math.floor(newState.highScore),
					status: newState.status,
				});
			}

			animationFrameRef.current = requestAnimationFrame(gameLoop);
		}

		animationFrameRef.current = requestAnimationFrame(gameLoop);

		// Keyboard input
		function handleKeyDown(e: KeyboardEvent) {
			if (e.code === 'Space' || e.code === 'ArrowUp') {
				e.preventDefault();
				handleAction();
			}
		}

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			cancelAnimationFrame(animationFrameRef.current);
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [handleAction]);

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
				onClick={handleAction}
				className="cursor-pointer rounded-lg border shadow-sm"
				style={{ maxWidth: '100%', height: 'auto' }}
			/>

			<p className="text-sm text-muted-foreground">
				Press{' '}
				<kbd className="rounded border bg-muted px-1.5 py-0.5 text-xs font-mono">
					Space
				</kbd>{' '}
				or click to jump
			</p>
		</div>
	);
}
