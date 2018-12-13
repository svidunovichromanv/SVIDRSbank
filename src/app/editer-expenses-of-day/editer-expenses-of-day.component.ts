import { Component, OnInit } from '@angular/core';
import { Iexpenses } from '../interfaces/iexpenses';
import {SvidrsBankDatasource} from '../svidrs-bank.datasource';
import {NgForm} from '@angular/forms';
import { EditerDayBudgetDatasource } from '../editerDayBudget.datasource';

@Component({
  selector: 'app-editer-expenses-of-day',
  templateUrl: './editer-expenses-of-day.component.html',
  styleUrls: ['./editer-expenses-of-day.component.css']
})
export class EditerExpensesOfDayComponent implements OnInit {
  public budgetOnDay: Iexpenses;
  private editerDayId: number;
  constructor(private datasource: SvidrsBankDatasource, private editerDatasource: EditerDayBudgetDatasource) {
    this.editerDatasource.getSubject()
      .subscribe((idDay) => {
        this.nextEditerId(idDay);
      });
    this.datasource.getOneDayBudget(this.editerDayId).subscribe((budget) => {
      this.budgetOnDay = budget[0];
    });
  }

  ngOnInit() {}

  nextEditerId(idDay: number|null) {
    this.editerDayId = idDay;
  }

  saveNewDataForDay(newDay: NgForm) {
    console.log(newDay.value.food + '');
    this.editerDatasource.getSubject().next(null);
  }

}
