import {Component, Input, OnInit} from '@angular/core';
import { Iitem } from '../interfaces/iexpenses';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-structure-of-expense',
  templateUrl: './structure-of-expense.component.html',
  styleUrls: ['./structure-of-expense.component.css'],
  animations: [
    trigger('show', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', animate(600)),
      transition('end => start', animate(600))
    ]),
  ]
})
export class StructureOfExpenseComponent implements OnInit {
  @Input() expense: Array<Iitem>;
  private hintInfo: string;
  private alertAnimState: string;
  private delTimer;

  constructor() { }

  ngOnInit() {
    this.alertAnimState = 'start';
  }
  showHint(typeOfExpense: string): string {
    if (this.delTimer) {
      clearTimeout(this.delTimer);
    }
    switch (typeOfExpense) {
      case 'food' :
        this.hintInfo = 'Еды на: ' +  this.expense.food + ' руб.';
        break;
      case 'utility' :
        this.hintInfo = 'Налогов на: ' +  this.expense.utility + ' руб.';
        break;
      case 'dress' :
        this.hintInfo = 'Одежды на: ' +  this.expense.dress + ' руб.';
        break;
      case 'pet' :
        this.hintInfo = 'Трат на питомца на: ' +  this.expense.pet + ' руб.';
        break;
      case 'transport' :
        this.hintInfo = 'Трат на транспорт: ' +  this.expense.transport + ' руб.';
        break;
      default:
        this.hintInfo = '';
    }
    setTimeout(() => {
      this.alertAnimState = 'end';
    }, 1);
    return this.hintInfo;
  }
  hideHint(): void {
    setTimeout(() => {
      this.alertAnimState = 'start';
    }, 1);
    this.delTimer = setTimeout(() => {
      this.hintInfo = '';
    }, 600);
  }
  getWidthInPx(typeOfExpense: string): string {
    let summOfExpense = 0;
    for (const money in this.expense) {
      if (this.expense.hasOwnProperty(money)) {
        summOfExpense += this.expense[money];
      }
    }

    let stringWidthInPx: string;
    switch (typeOfExpense) {
      case 'food' :
        stringWidthInPx = (200 * this.expense.food / summOfExpense) + 'px';
      break;
      case 'utility' :
        stringWidthInPx = (200 * this.expense.utility / summOfExpense) + 'px';
        break;
      case 'dress' :
        stringWidthInPx = (200 * this.expense.dress / summOfExpense) + 'px';
        break;
      case 'pet' :
        stringWidthInPx = (200 * this.expense.pet / summOfExpense) + 'px';
        break;
      case 'transport' :
        stringWidthInPx = (200 * this.expense.transport / summOfExpense) + 'px';
        break;
      default:
        stringWidthInPx = '0px';
    }
    return stringWidthInPx;
  }
}
