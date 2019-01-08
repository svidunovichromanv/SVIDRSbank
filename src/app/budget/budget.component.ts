import { Component, OnInit } from '@angular/core';
import { Idata } from '../interfaces/idata';
import { SvidrsBankDatasource } from '../service/svidrs-bank.datasource';
import { EditerDatasource } from '../service/editer-datasource.service';
import { SelectVal } from '../interfaces/select-val';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
  providers: [EditerDatasource]
})
export class BudgetComponent implements OnInit {
  private data: Array<Idata> = [];
  private dataShow: string;
  private editerDayBudget: number|null;
  constructor(private datasource: SvidrsBankDatasource, private editerDatasource: EditerDatasource) {
    datasource.getAllData().subscribe((data) => {
      this.data = data.filter((indexDay: Idata) => indexDay.month === 11 && indexDay.year === 2018);
    });
    editerDatasource.getSubject()
      .subscribe((idDay: number|null) => {
        this.editerDayBudget = idDay;
      });
  }

  ngOnInit() {}

  getData(): Array<Idata> {
    return this.data;
  }

  getdataShow(): string {
    return this.dataShow;
  }

  showOther(evn) {
    if (evn === 'Все') {
      return this.datasource.getAllData(). subscribe((data) => {
        this.data = data;
      });
    } else {
      const year: number = +evn.slice(0, 4);
      const month: number = +evn.slice(5, 7) - 1;
      return this.datasource.getAllData().subscribe((data) => {
        this.data = data.filter((indexDay: Idata) => indexDay.month === month && indexDay.year === year);
      });
    }
  }

  getEditerDayBudget(): number|null {
    return this.editerDayBudget;
  }

  changeEditerId(id: number|null) {
    this.editerDatasource.getSubject().next(id);
  }
}
