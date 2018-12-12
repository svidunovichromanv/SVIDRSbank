import {Injectable} from '@angular/core';
import { Observable, from } from 'rxjs';


@Injectable()
export class EditerDayBudgetDatasource {

  private editerIdDayBudget: number | null = null;

  constructor() {
  }

  getEditerIdDayBudget (): Observable <number|null> {
    return from( [this.editerIdDayBudget] );
  }

  setEditerIdDayBudget (id: number | null): void {
    this.editerIdDayBudget = id;
  }


}
