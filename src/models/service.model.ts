export interface SERVICE {
  id: string;
  createdAt: string;
  vehicleId: string;
  parts: string[];
  cost: number;
  quantity: number;
  running: number;
  oilChange: boolean;
  delete: boolean;
  updatedAt?: string;
}
