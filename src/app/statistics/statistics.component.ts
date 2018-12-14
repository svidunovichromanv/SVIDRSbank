import { Component, OnInit} from '@angular/core';
import {Idata} from '../interfaces/idata';
import {SvidrsBankDatasource} from '../svidrs-bank.datasource';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  private dataShow: string;
  private data: Array<Idata> = [];
  public dataTablePieChartBudget: Array<Array<string|number>>;
  public pieChartData: any /*=  {
    chartType: 'PieChart',
    dataTable: this.dataTablePieChartBudget,
    options: {'title': 'pieChartData'},
  }*/;
  constructor(private datasource: SvidrsBankDatasource) {
    datasource.getOneMonth(2019, 0). subscribe((data) => {
      this.data.push(...data);
      this.updatedataTablePieChartBudget();
    });
  }

  ngOnInit() {
  }
  updatedataTablePieChartBudget(): void {
    this.dataTablePieChartBudget = [];
    this.dataTablePieChartBudget.push(['Бюджет', 'Budget all']);
    let summFood = 0;
    let summUtility = 0;
    let summDress = 0;
    let summPet = 0;
    let summTransport = 0;
    for (let i = 0; i < this.data.length; i++) {
      summFood += this.data[i].budget.food;
      summUtility += this.data[i].budget.utility;
      summDress += this.data[i].budget.dress;
      summPet += this.data[i].budget.pet;
      summTransport += this.data[i].budget.transport;
    }
    this.dataTablePieChartBudget.push(['Продукты', summFood]);
    this.dataTablePieChartBudget.push(['Налоги', summUtility]);
    this.dataTablePieChartBudget.push(['Одежда', summDress]);
    this.dataTablePieChartBudget.push(['Питомец', summPet]);
    this.dataTablePieChartBudget.push(['Транспорт', summTransport]);
    console.log(this.dataTablePieChartBudget);

    setTimeout(() => {
      this.pieChartData =  {
        chartType: 'PieChart',
        dataTable: this.dataTablePieChartBudget,
        options: {'title': 'pieChartData'},
      };
      console.log(this.pieChartData);
    }, 0);
  }

  getdataShow(): string {
    return this.dataShow;
  }
  showOther(evn) {
    if (evn === 'Все') {
      return this.datasource.getAllData(). subscribe((data) => {
        this.data = data;
        this.updatedataTablePieChartBudget();
      });
    } else {
      const year: number = +evn.slice(0, 4);
      const month: number = +evn.slice(5, 7) - 1;
      return this.datasource.getOneMonth(year, month). subscribe((data) => {
        this.data = data;
        this.updatedataTablePieChartBudget();
      });
    }
    console.log(evn);
  }

}
