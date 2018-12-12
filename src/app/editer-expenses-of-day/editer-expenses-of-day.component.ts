import { Component, OnInit } from '@angular/core';
import { Iexpenses } from '../interfaces/iexpenses';
import {SvidrsBankDatasource} from '../svidrs-bank.datasource';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-editer-expenses-of-day',
  templateUrl: './editer-expenses-of-day.component.html',
  styleUrls: ['./editer-expenses-of-day.component.css']
})
export class EditerExpensesOfDayComponent implements OnInit {
  public budgetOnDay: Iexpenses;
  private editerDayId: number;
  constructor(private datasource: SvidrsBankDatasource) {
    this.datasource.getEditerIdDayBudget().subscribe((id) => {
      this.editerDayId = id;
    });
    this.datasource.getOneDayBudget(this.editerDayId).subscribe((budget) => {
      this.budgetOnDay = budget[0];
    });
  }

  ngOnInit() {
  }

  saveNewDataForDay(newDay: NgForm) {
    console.log(newDay + ' новые данные, которые хочу записать');
    this.datasource.setEditerIdDayBudget(null);
    this.datasource.getEditerIdDayBudget().subscribe((getID) => {
      console.log(getID + ' getEditerIdDayBudget в EditerExpensesOfDayComponent при сохранении');
    });
  }

}
