import { Iexpenses } from "./iexpenses"

export interface Idata {
  year:number;
  month:number;
  day:number;
  budget:Iexpenses;
  report:Iexpenses;
}
/*let data=[
  {
    year: 2018,
    month: 11,
    day: 6,
    budget:{
      food: 10,
      utility: 0,
      dress: 10,
      pet: 10,
      transport: 1.20
    },
    report:{
      food: 10,
      utility: 0,
      dress: 10,
      pet: 10,
      transport: 1.20
    }
  },
  {
    year: 2018,
    month: 11,
    day: 5,
    budget:{
      food: 10,
      utility: 0,
      dress: 10,
      pet: 10,
      transport: 1.20
    },
    report:{
      food: 10,
      utility: 0,
      dress: 10,
      pet: 10,
      transport: 1.20
    }
  },
  {
    year: 2018,
    month: 11,
    day: 4,
    budget:{
      food: 10,
      utility: 0,
      dress: 10,
      pet: 10,
      transport: 1.20
    },
    report:{
      food: 10,
      utility: 0,
      dress: 10,
      pet: 10,
      transport: 1.20
    }
  }
];*/
