export interface MAINTENANCE {
	id: string;
	vehicleId: string;
	cost: number;
	type: string;
	description: string;

	createdAt: string;
	delete: boolean;
	updatedAt?: string;
}
