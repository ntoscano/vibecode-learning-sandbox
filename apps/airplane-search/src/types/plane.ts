export type PlaneType = 'Commercial' | 'Military' | 'Private';

export interface Plane {
	id: string;
	name: string;
	manufacturer: string;
	type: PlaneType;
	engines: number;
	topSpeed: number; // mph
	range: number; // miles
	passengers: number;
	firstFlight: number; // year
}

export interface PlaneFilters {
	query: string;
	type: PlaneType | 'All';
	minEngines: number | null;
	minTopSpeed: number | null;
}
