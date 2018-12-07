import { Component, OnInit } from '@angular/core';
import {Idata} from '../idata';
import { SvidrsBankDatasource } from '../svidrs-bank.datasource';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  private data: Array<Idata> = [];
  constructor(private datasource: SvidrsBankDatasource) {
    this.datasource.getOneMonth(2018, 11). subscribe((data) => {
      this.data.push(...data);
    });
  }

  ngOnInit() {
    console.log(this.getData());
  }

  getData() {
    return this.data;
  }

}
