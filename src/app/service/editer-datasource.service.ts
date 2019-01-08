import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class EditerDatasource {

  private editerIdDayBudgetEvn$: BehaviorSubject<number | null>;

  constructor() {
    this.editerIdDayBudgetEvn$ = new BehaviorSubject<number|null>(null);
  }

  getSubject (): BehaviorSubject<number|null> {
    return this.editerIdDayBudgetEvn$;
  }
}
