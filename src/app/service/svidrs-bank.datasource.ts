import {Injectable} from '@angular/core';
import { dataBase } from '../tempDataBase';
import {Idata} from '../interfaces/idata';
import { Observable, from } from 'rxjs';
import { Istucture } from '../interfaces/iexpenses';
import { HttpClient } from '@angular/common/http';
import {Settings} from '../interfaces/settings';



@Injectable()
export class SvidrsBankDatasource {

  private dataBase: Array <Idata> = dataBase;

  constructor(
    private http: HttpClient,
    private http2: HttpClient,
    private http3: HttpClient,
    private http4: HttpClient
  ) {}

  getAllData (): Observable <Array<Idata>> {
    return <Observable<Array<Idata>>>this.http.get('http://localhost:3000/data');
  }

  getOneDayBudget (id: number): Observable <Idata> {
    return <Observable<Idata>>this.http2.get('http://localhost:3000/data/' + id);
  }

  setOneDayBudget (dataDay: Idata, id: number): Observable <any> {
    return this.http3.put('http://localhost:3000/data/' + id, dataDay);
  }

  getSettings (): Observable <Array<Settings>> {
    return  <Observable<Array<Settings>>>this.http4.get('http://localhost:3000/set-expenses');
  }
}
