import { Component, OnInit } from '@angular/core';
import { Idata } from '../interfaces/idata';
import { SvidrsBankDatasource } from '../svidrs-bank.datasource';
import { SelectVal } from '../interfaces/select-val';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  private data: Array<Idata> = [];
  private dataShow: string;
  private editerDayId: number;
  constructor(private datasource: SvidrsBankDatasource) {
    this.datasource.getOneMonth(2019, 0). subscribe((data) => {
      this.data.push(...data);
    });
  }
  ngOnInit() {
  }
  getData(): Array<Idata> {
    return this.data;
  }
  showOther(evn) {
    if (evn === 'Все') {
      return this.datasource.getAllData(). subscribe((data) => {
        this.data = data;
      });
    } else {
      const year: number = +evn.slice(0, 4);
      const month: number = +evn.slice(5, 7) - 1;
      return this.datasource.getOneMonth(year, month). subscribe((data) => {
        this.data = data;
      });
    }
  }
  changeEditerId(id: number): void {
    this.editerDayId = id;
    console.log(id);
  }
}
