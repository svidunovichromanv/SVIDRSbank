import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Iexpenses } from '../interfaces/iexpenses';
import {SvidrsBankDatasource} from '../svidrs-bank.datasource';
import {NgForm} from '@angular/forms';
import { EditerDayBudgetDatasource } from '../editerDayBudget.datasource';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-editer-expenses-of-day',
  templateUrl: './editer-expenses-of-day.component.html',
  styleUrls: ['./editer-expenses-of-day.component.css'],
  animations: [
    trigger('show', [
      state('start', style({
        height: 0
      })),
      state('end', style({
        height: 500
      })),
      transition('start => end', animate(800)),
      transition('end => start', animate(800))
    ]),
  ]
})
export class EditerExpensesOfDayComponent implements OnInit, AfterViewInit {
  public budgetOnDay: Iexpenses;
  private editerDayId: number;
  private editerAnimationState: string;
  constructor(private datasource: SvidrsBankDatasource, private editerDatasource: EditerDayBudgetDatasource) {
    this.editerDatasource.getSubject()
      .subscribe((idDay) => {
        this.nextEditerId(idDay);
      });
    this.datasource.getOneDayBudget(this.editerDayId).subscribe((budget) => {
      this.budgetOnDay = budget[0];
    });
  }

  ngOnInit() {
    this.editerAnimationState = 'start';
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.editerAnimationState = 'end';
    }, 0);
  }

  nextEditerId(idDay: number|null) {
    this.editerDayId = idDay;
  }

  saveNewDataForDay(): void {
    this.datasource.setOneDayBudget(this.budgetOnDay, this.editerDayId);
    setTimeout(() => {
      this.editerAnimationState = 'start';
    }, 0);
    setTimeout(() => {
      this.editerDatasource.getSubject().next(null);
    }, 800);
  }

}
