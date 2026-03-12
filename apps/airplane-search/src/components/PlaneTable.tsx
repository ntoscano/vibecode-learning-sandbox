import { PlaneRow } from '@/components/PlaneRow';
import { Plane } from '@/types/plane';

interface PlaneTableProps {
	planes: Plane[];
}

export function PlaneTable({ planes }: PlaneTableProps) {
	if (planes.length === 0) {
		return (
			<div className="py-12 text-center text-muted-foreground">
				No planes found. Try adjusting your search or filters.
			</div>
		);
	}

	return (
		<div className="overflow-x-auto">
			<table className="w-full text-sm">
				<thead>
					<tr className="border-b bg-muted/50">
						<th className="px-4 py-3 text-left font-medium">Name</th>
						<th className="px-4 py-3 text-left font-medium">Manufacturer</th>
						<th className="px-4 py-3 text-left font-medium">Type</th>
						<th className="px-4 py-3 text-center font-medium">Engines</th>
						<th className="px-4 py-3 text-right font-medium">Top Speed</th>
						<th className="px-4 py-3 text-right font-medium">Range</th>
						<th className="px-4 py-3 text-center font-medium">Passengers</th>
						<th className="px-4 py-3 text-center font-medium">First Flight</th>
					</tr>
				</thead>
				<tbody>
					{planes.map((plane) => (
						<PlaneRow key={plane.id} plane={plane} />
					))}
				</tbody>
			</table>
		</div>
	);
}
