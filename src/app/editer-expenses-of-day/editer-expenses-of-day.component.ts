import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Istucture } from '../interfaces/iexpenses';
import {SvidrsBankDatasource} from '../service/svidrs-bank.datasource';
import {NgForm} from '@angular/forms';
import { EditerDatasource } from '../service/editer-datasource.service';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {Idata} from '../interfaces/idata';

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
  public budgetOnDay: Istucture;
  private dataDay: Idata;
  public dataState = false;
  private editerDayId: number;
  private editerAnimationState: string;
  constructor(private datasource: SvidrsBankDatasource, private editerDatasource: EditerDatasource) {
    this.editerDatasource.getSubject()
      .subscribe((idDay) => {
        this.nextEditerId(idDay);
      });
    this.datasource.getOneDayBudget(this.editerDayId).subscribe((budget) => {
      this.dataDay = budget;
      this.budgetOnDay = budget.budget;
      this.dataState = true;
    });
  }

  ngOnInit() {
    this.editerAnimationState = 'start';
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.editerAnimationState = 'end';
    }, 1);
  }

  nextEditerId(idDay: number|null) {
    this.editerDayId = idDay;
  }

  saveNewDataForDay(): void {
    this.dataDay.budget = this.budgetOnDay;
    this.datasource.setOneDayBudget(this.dataDay, this.editerDayId)
      .subscribe(() => {
        setTimeout(() => {
          this.editerAnimationState = 'start';
        }, 0);
        setTimeout(() => {
          this.editerDatasource.getSubject().next(null);
        }, 800);
      });
  }
}
