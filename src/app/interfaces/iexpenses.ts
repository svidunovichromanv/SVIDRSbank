export interface Istucture {
  income: Array<Iitem>;
  costs: Array<Iitem>;
}
export interface Iitem {
  name: string;
  quantity: number;
  color: string;
}
