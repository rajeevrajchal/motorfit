export interface VEHICLE {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  category: string;
  type: string;
  plate: string;
  owner: string;
  delete: boolean;
  isPrimary: boolean;
  isEV: boolean;
}
