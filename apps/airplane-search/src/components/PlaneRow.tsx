import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Plane } from '@/types/plane';

interface PlaneRowProps {
	plane: Plane;
}

const typeBadgeClass: Record<string, string> = {
	Commercial: 'bg-blue-100 text-blue-800 border-blue-200',
	Military: 'bg-red-100 text-red-800 border-red-200',
	Private: 'bg-green-100 text-green-800 border-green-200',
};

export function PlaneRow({ plane }: PlaneRowProps) {
	return (
		<tr className="border-b transition-colors hover:bg-muted/50">
			<td className="px-4 py-3 font-medium">{plane.name}</td>
			<td className="px-4 py-3">{plane.manufacturer}</td>
			<td className="px-4 py-3">
				<Badge variant="outline" className={cn(typeBadgeClass[plane.type])}>
					{plane.type}
				</Badge>
			</td>
			<td className="px-4 py-3 text-center">{plane.engines}</td>
			<td className="px-4 py-3 text-right">
				{plane.topSpeed.toLocaleString()} mph
			</td>
			<td className="px-4 py-3 text-right">
				{plane.range.toLocaleString()} mi
			</td>
			<td className="px-4 py-3 text-center">{plane.passengers}</td>
			<td className="px-4 py-3 text-center">{plane.firstFlight}</td>
		</tr>
	);
}
