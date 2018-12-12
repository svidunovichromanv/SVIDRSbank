import {Injectable} from '@angular/core';
import { dataBase } from './tempDataBase';
import {Idata} from './interfaces/idata';
import { Observable, from } from 'rxjs';
import { Iexpenses } from './interfaces/iexpenses';


@Injectable()
export class SvidrsBankDatasource {

  private dataBase: Array <Idata> = dataBase;

  constructor() {
  }

  getAllData (): Observable <Array<Idata>> {
    return from( [ this.dataBase ] );
  }

  getOneMonth (year: number, month: number): Observable <Array<Idata>> {
    return from([this.dataBase.filter((indexDay) => indexDay.month === month && indexDay.year === year)]);
  }


  getOneDayBudget (id: number): Observable <Array<Iexpenses>> {
    const tempArr: Array<Idata> = this.dataBase.filter((indexDay) => indexDay.id === id);
    let budget: Array<Iexpenses>;
    if (tempArr.length === 1) {
      budget = [tempArr[0].budget];
    }
    return from( [budget] );
  }

}
