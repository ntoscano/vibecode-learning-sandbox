'use client';

import { PlaneFilters, PlaneType } from '@/types/plane';

interface SpecFiltersProps {
	filters: PlaneFilters;
	onChange: (filters: PlaneFilters) => void;
}

const planeTypes: (PlaneType | 'All')[] = [
	'All',
	'Commercial',
	'Military',
	'Private',
];

export function SpecFilters({ filters, onChange }: SpecFiltersProps) {
	const selectClass =
		'h-9 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';
	const inputClass =
		'h-9 w-24 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

	return (
		<div className="flex flex-wrap items-end gap-4">
			<div className="flex flex-col gap-1">
				<label
					htmlFor="type-filter"
					className="text-xs font-medium text-muted-foreground"
				>
					Type
				</label>
				<select
					id="type-filter"
					value={filters.type}
					onChange={(e) =>
						onChange({ ...filters, type: e.target.value as PlaneType | 'All' })
					}
					className={selectClass}
				>
					{planeTypes.map((type) => (
						<option key={type} value={type}>
							{type}
						</option>
					))}
				</select>
			</div>

			<div className="flex flex-col gap-1">
				<label
					htmlFor="min-engines-filter"
					className="text-xs font-medium text-muted-foreground"
				>
					Min Engines
				</label>
				<input
					id="min-engines-filter"
					type="number"
					min={1}
					max={4}
					placeholder="Any"
					value={filters.minEngines ?? ''}
					onChange={(e) =>
						onChange({
							...filters,
							minEngines: e.target.value ? Number(e.target.value) : null,
						})
					}
					className={inputClass}
				/>
			</div>

			<div className="flex flex-col gap-1">
				<label
					htmlFor="min-speed-filter"
					className="text-xs font-medium text-muted-foreground"
				>
					Min Top Speed (mph)
				</label>
				<input
					id="min-speed-filter"
					type="number"
					min={0}
					step={100}
					placeholder="Any"
					value={filters.minTopSpeed ?? ''}
					onChange={(e) =>
						onChange({
							...filters,
							minTopSpeed: e.target.value ? Number(e.target.value) : null,
						})
					}
					className={inputClass}
				/>
			</div>

			{(filters.type !== 'All' ||
				filters.minEngines !== null ||
				filters.minTopSpeed !== null) && (
				<button
					onClick={() =>
						onChange({
							...filters,
							type: 'All',
							minEngines: null,
							minTopSpeed: null,
						})
					}
					className="h-9 rounded-md px-3 text-sm text-muted-foreground hover:text-foreground"
				>
					Clear filters
				</button>
			)}
		</div>
	);
}
