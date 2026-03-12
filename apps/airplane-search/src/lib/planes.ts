import { Plane, PlaneFilters } from '@/types/plane';

export const planes: Plane[] = [
	{
		id: '1',
		name: 'Boeing 747-400',
		manufacturer: 'Boeing',
		type: 'Commercial',
		engines: 4,
		topSpeed: 614,
		range: 7670,
		passengers: 416,
		firstFlight: 1988,
	},
	{
		id: '2',
		name: 'Airbus A380',
		manufacturer: 'Airbus',
		type: 'Commercial',
		engines: 4,
		topSpeed: 634,
		range: 8000,
		passengers: 853,
		firstFlight: 2005,
	},
	{
		id: '3',
		name: 'Boeing 737-800',
		manufacturer: 'Boeing',
		type: 'Commercial',
		engines: 2,
		topSpeed: 544,
		range: 3115,
		passengers: 189,
		firstFlight: 1997,
	},
	{
		id: '4',
		name: 'Airbus A320neo',
		manufacturer: 'Airbus',
		type: 'Commercial',
		engines: 2,
		topSpeed: 541,
		range: 3740,
		passengers: 194,
		firstFlight: 2014,
	},
	{
		id: '5',
		name: 'Boeing 787 Dreamliner',
		manufacturer: 'Boeing',
		type: 'Commercial',
		engines: 2,
		topSpeed: 587,
		range: 7635,
		passengers: 330,
		firstFlight: 2009,
	},
	{
		id: '6',
		name: 'Concorde',
		manufacturer: 'Aerospatiale/BAC',
		type: 'Commercial',
		engines: 4,
		topSpeed: 1354,
		range: 4500,
		passengers: 128,
		firstFlight: 1969,
	},
	{
		id: '7',
		name: 'F-22 Raptor',
		manufacturer: 'Lockheed Martin',
		type: 'Military',
		engines: 2,
		topSpeed: 1498,
		range: 1839,
		passengers: 1,
		firstFlight: 1997,
	},
	{
		id: '8',
		name: 'F-35 Lightning II',
		manufacturer: 'Lockheed Martin',
		type: 'Military',
		engines: 1,
		topSpeed: 1200,
		range: 1379,
		passengers: 1,
		firstFlight: 2006,
	},
	{
		id: '9',
		name: 'SR-71 Blackbird',
		manufacturer: 'Lockheed',
		type: 'Military',
		engines: 2,
		topSpeed: 2193,
		range: 3250,
		passengers: 2,
		firstFlight: 1964,
	},
	{
		id: '10',
		name: 'B-2 Spirit',
		manufacturer: 'Northrop Grumman',
		type: 'Military',
		engines: 4,
		topSpeed: 628,
		range: 6900,
		passengers: 2,
		firstFlight: 1989,
	},
	{
		id: '11',
		name: 'F-16 Fighting Falcon',
		manufacturer: 'General Dynamics',
		type: 'Military',
		engines: 1,
		topSpeed: 1320,
		range: 2622,
		passengers: 1,
		firstFlight: 1974,
	},
	{
		id: '12',
		name: 'C-130 Hercules',
		manufacturer: 'Lockheed Martin',
		type: 'Military',
		engines: 4,
		topSpeed: 366,
		range: 2360,
		passengers: 92,
		firstFlight: 1954,
	},
	{
		id: '13',
		name: 'Cessna 172 Skyhawk',
		manufacturer: 'Cessna',
		type: 'Private',
		engines: 1,
		topSpeed: 163,
		range: 640,
		passengers: 4,
		firstFlight: 1955,
	},
	{
		id: '14',
		name: 'Gulfstream G650',
		manufacturer: 'Gulfstream',
		type: 'Private',
		engines: 2,
		topSpeed: 610,
		range: 7500,
		passengers: 19,
		firstFlight: 2009,
	},
	{
		id: '15',
		name: 'Cirrus SR22',
		manufacturer: 'Cirrus Aircraft',
		type: 'Private',
		engines: 1,
		topSpeed: 213,
		range: 1049,
		passengers: 4,
		firstFlight: 2001,
	},
	{
		id: '16',
		name: 'Bombardier Global 7500',
		manufacturer: 'Bombardier',
		type: 'Private',
		engines: 2,
		topSpeed: 590,
		range: 8860,
		passengers: 19,
		firstFlight: 2016,
	},
	{
		id: '17',
		name: 'Embraer E195-E2',
		manufacturer: 'Embraer',
		type: 'Commercial',
		engines: 2,
		topSpeed: 537,
		range: 2600,
		passengers: 146,
		firstFlight: 2017,
	},
	{
		id: '18',
		name: 'Piper PA-28 Cherokee',
		manufacturer: 'Piper Aircraft',
		type: 'Private',
		engines: 1,
		topSpeed: 147,
		range: 515,
		passengers: 4,
		firstFlight: 1960,
	},
];

export function filterPlanes(
	allPlanes: Plane[],
	filters: PlaneFilters,
): Plane[] {
	return allPlanes.filter((plane) => {
		// Text search — matches name or manufacturer
		if (filters.query) {
			const q = filters.query.toLowerCase();
			const matchesName = plane.name.toLowerCase().includes(q);
			const matchesMfr = plane.manufacturer.toLowerCase().includes(q);
			if (!matchesName && !matchesMfr) return false;
		}

		// Type filter
		if (filters.type !== 'All' && plane.type !== filters.type) {
			return false;
		}

		// Min engines filter
		if (filters.minEngines !== null && plane.engines < filters.minEngines) {
			return false;
		}

		// Min top speed filter
		if (filters.minTopSpeed !== null && plane.topSpeed < filters.minTopSpeed) {
			return false;
		}

		return true;
	});
}
