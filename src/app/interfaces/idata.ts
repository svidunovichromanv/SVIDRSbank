import { Istucture } from './iexpenses';
export interface Idata {
  year: number;
  month: number;
  day: number;
  budget: Istucture;
  report: Istucture;
  id: number;
}
