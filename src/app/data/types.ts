export interface Farmer {
  'S/N': number | string;
  NAME: string;
  GENDER: string;
  'FARM LOCATION': string;
  'SIZE OF FARM': number | string;
  'KIND OF FARMING': string;
  'PHONE NO': number | string | null;
  LGA: string;
  'CO-OPERATIVE NAME': string | null;
}

export interface FarmerStats {
  'SIZE OF FARM'?: number;
  GENDER?: string;
  'KIND OF FARMING'?: string;
}
