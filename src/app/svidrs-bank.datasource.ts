import {Injectable} from '@angular/core';
import { dataBase } from './tempDataBase';
import {Idata} from './interfaces/idata';
import { Observable, from } from 'rxjs';


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

}
