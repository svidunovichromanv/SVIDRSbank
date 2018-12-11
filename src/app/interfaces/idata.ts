import { Iexpenses } from './iexpenses';
export interface Idata {
  year: number;
  month: number;
  day: number;
  budget: Iexpenses;
  report: Iexpenses;
  id: number;
}
