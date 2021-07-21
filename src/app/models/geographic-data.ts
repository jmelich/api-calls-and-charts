export interface GeographicData {
  title: string;
  quantities: Quantity;
}

export interface Quantity {
  both: number;
  male: number;
  female: number;
}
