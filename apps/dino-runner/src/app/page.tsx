'use client';

import { GameCanvas } from '@/components/GameCanvas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
	return (
		<main className="mx-auto max-w-4xl px-4 py-8">
			<div className="mb-8 flex items-center gap-3">
				<span className="text-3xl">🦕</span>
				<h1 className="text-3xl font-bold">Dino Runner</h1>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Jump over the cacti!</CardTitle>
				</CardHeader>
				<CardContent>
					<GameCanvas />
				</CardContent>
			</Card>
		</main>
	);
}
