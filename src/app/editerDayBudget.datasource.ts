import {Injectable} from '@angular/core';
import { Subject, BehaviorSubject, from } from 'rxjs';


@Injectable()
export class EditerDayBudgetDatasource {

  private editerIdDayBudgetEvn$: BehaviorSubject<number | null>;

  constructor() {
    this.editerIdDayBudgetEvn$ = new BehaviorSubject<number|null>(null);
  }

  getSubject (): BehaviorSubject<number|null> {
    return this.editerIdDayBudgetEvn$;
  }
}
