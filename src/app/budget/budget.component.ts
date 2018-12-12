import { Component, OnInit } from '@angular/core';
import { Idata } from '../interfaces/idata';
import { SvidrsBankDatasource } from '../svidrs-bank.datasource';
import { EditerDayBudgetDatasource } from '../editerDayBudget.datasource';
import { SelectVal } from '../interfaces/select-val';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  private data: Array<Idata> = [];
  private dataShow: string;
  public editerDayId: number;
  constructor(private datasource: SvidrsBankDatasource, private editerDatasource: EditerDayBudgetDatasource) {
    datasource.getOneMonth(2019, 0). subscribe((data) => {
      this.data.push(...data);
    });
    editerDatasource.getEditerIdDayBudget().subscribe((id) => {
      this.editerDayId = id;
    });
  }
  ngOnInit() {
    setTimeout(() => {
      console.log(this.editerDayId + ' editerDayId компонента BudgetComponent через 10 скунд после OnInit');
      this.editerDatasource.getEditerIdDayBudget().subscribe((id) => {
        console.log(
          this.editerDayId + ' - свойство из родителя \n' + id + ' - данные из datasource \n' + id + 'не равно' + this.editerDayId
        );
      });
    }, 10000);
  }
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
      return this.datasource.getOneMonth(year, month). subscribe((data) => {
        this.data = data;
      });
    }
  }
  changeEditerId(id: number): void {
    this.editerDatasource.setEditerIdDayBudget(id);
    /*if (id === this.editerDayId) {
      this.datasource.setEditerIdDayBudget(null);
    }*/
    this.editerDatasource.getEditerIdDayBudget().subscribe((getID) => {
      this.editerDayId = getID;
    });
  }
}
