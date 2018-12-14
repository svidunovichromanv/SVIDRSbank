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
  public pieChartDataStructureBudget: any;
  public pieChartDataBudget: any = {
    chartType: 'LineChart',
    dataTable: [
      [new Date(2015, 0, 1), 5],  [new Date(2015, 0, 2), 7],  [new Date(2015, 0, 3), 3],
      [new Date(2015, 0, 4), 1],  [new Date(2015, 0, 5), 3],  [new Date(2015, 0, 6), 4],
      [new Date(2015, 0, 7), 3],  [new Date(2015, 0, 8), 4],  [new Date(2015, 0, 9), 2],
      [new Date(2015, 0, 10), 5], [new Date(2015, 0, 11), 8], [new Date(2015, 0, 12), 6],
      [new Date(2015, 0, 13), 3], [new Date(2015, 0, 14), 3], [new Date(2015, 0, 15), 5],
      [new Date(2015, 0, 16), 7], [new Date(2015, 0, 17), 6], [new Date(2015, 0, 18), 6],
      [new Date(2015, 0, 19), 3], [new Date(2015, 0, 20), 1], [new Date(2015, 0, 21), 2],
      [new Date(2015, 0, 22), 4], [new Date(2015, 0, 23), 6], [new Date(2015, 0, 24), 5],
      [new Date(2015, 0, 25), 9], [new Date(2015, 0, 26), 4], [new Date(2015, 0, 27), 9],
      [new Date(2015, 0, 28), 8], [new Date(2015, 0, 29), 6], [new Date(2015, 0, 30), 4],
      [new Date(2015, 0, 31), 6], [new Date(2015, 1, 1), 7],  [new Date(2015, 1, 2), 9]
    ],
    options: {
      'title': 'Бюджет ',
      width: 500,
      height: 500,
    },
  };
  constructor(private datasource: SvidrsBankDatasource) {
    datasource.getOneMonth(2019, 0). subscribe((data) => {
      this.data.push(...data);
      this.updatedataChart();
    });
  }

  ngOnInit() {
  }
  updatedataChart(): void {
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
    this.pieChartDataStructureBudget =  {
        chartType: 'PieChart',
        dataTable: this.dataTablePieChartBudget,
        options: {
          'title': 'Бюджет ',
          width: 500,
          height: 500,
        },
      };
  }

  getdataShow(): string {
    return this.dataShow;
  }
  showOther(evn) {
    if (evn === 'Все') {
      return this.datasource.getAllData(). subscribe((data) => {
        this.data = data;
        this.updatedataChart();
      });
    } else {
      const year: number = +evn.slice(0, 4);
      const month: number = +evn.slice(5, 7) - 1;
      return this.datasource.getOneMonth(year, month). subscribe((data) => {
        this.data = data;
        this.updatedataChart();
      });
    }
    console.log(evn);
  }

}
