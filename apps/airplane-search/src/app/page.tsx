'use client';

import { PlaneTable } from '@/components/PlaneTable';
import { SearchBar } from '@/components/SearchBar';
import { SpecFilters } from '@/components/SpecFilters';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { filterPlanes, planes } from '@/lib/planes';
import { PlaneFilters } from '@/types/plane';
import { Plane } from 'lucide-react';
import { useMemo, useState } from 'react';

const defaultFilters: PlaneFilters = {
	query: '',
	type: 'All',
	minEngines: null,
	minTopSpeed: null,
};

export default function Home() {
	const [filters, setFilters] = useState<PlaneFilters>(defaultFilters);

	const filteredPlanes = useMemo(
		() => filterPlanes(planes, filters),
		[filters],
	);

	return (
		<main className="mx-auto max-w-6xl px-4 py-8">
			<div className="mb-8 flex items-center gap-3">
				<Plane className="h-8 w-8" />
				<h1 className="text-3xl font-bold">Airplane Search</h1>
			</div>

			<div className="mb-6 space-y-4">
				<SearchBar
					value={filters.query}
					onChange={(query) => setFilters({ ...filters, query })}
				/>
				<SpecFilters filters={filters} onChange={setFilters} />
			</div>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center justify-between">
						<span>Aircraft Database</span>
						<span className="text-sm font-normal text-muted-foreground">
							{filteredPlanes.length} of {planes.length} planes
						</span>
					</CardTitle>
				</CardHeader>
				<CardContent className="p-0">
					<PlaneTable planes={filteredPlanes} />
				</CardContent>
			</Card>
		</main>
	);
}
