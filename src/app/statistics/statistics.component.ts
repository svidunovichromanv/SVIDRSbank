import { Component, OnInit} from '@angular/core';
import { Idata } from '../interfaces/idata';
import { SvidrsBankDatasource } from '../svidrs-bank.datasource';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  private dataShow: string;
  private data: Array<Idata> = [];
  public dataTableStructureBudget: Array<Array<string|number>>;
  public dataTableBudget: Array<Array<string|number>>;
  public pieChartDataStructureBudget: any;
  public pieChartDataBudget: any;
  constructor(private datasource: SvidrsBankDatasource) {
    datasource.getAllData(). subscribe((data) => {
      this.data = data
        .filter((indexDay: Idata) => {
          return indexDay.month === 11 && indexDay.year === 2018;
        });
      this.updatedataChart();
    });
  }

  ngOnInit() {
  }
  updatedataChart(): void {
    this.dataTableBudget = [];
    this.dataTableBudget.push(['Даты', 'Траты в руб']);
    this.dataTableStructureBudget = [];
    this.dataTableStructureBudget.push(['Бюджет', 'Budget all']);
    let summFood = 0;
    let summUtility = 0;
    let summDress = 0;
    let summPet = 0;
    let summTransport = 0;
    for (let i = 0; i < this.data.length; i++) {
      let summDay = 0;
      let strigDate = '';
      summDay = this.data[i].budget.food
        + this.data[i].budget.utility
        + this.data[i].budget.dress
        + this.data[i].budget.pet
        + this.data[i].budget.transport;
      strigDate = this.data[i].day + '/' + (this.data[i].month + 1) + '/' + this.data[i].year;
      this.dataTableBudget.push([strigDate, summDay]);
      summFood += this.data[i].budget.food;
      summUtility += this.data[i].budget.utility;
      summDress += this.data[i].budget.dress;
      summPet += this.data[i].budget.pet;
      summTransport += this.data[i].budget.transport;
    }
    this.dataTableStructureBudget.push(['Продукты', summFood]);
    this.dataTableStructureBudget.push(['Налоги', summUtility]);
    this.dataTableStructureBudget.push(['Одежда', summDress]);
    this.dataTableStructureBudget.push(['Питомец', summPet]);
    this.dataTableStructureBudget.push(['Транспорт', summTransport]);
    this.pieChartDataStructureBudget =  {
        chartType: 'PieChart',
        dataTable: this.dataTableStructureBudget,
        options: {
          'title': 'Бюджет ',
          height: 500,
          colors: ['#0bc7b1', '#e4e2c8', '#d9bb74', '#82a752', '#054549']
        },
    };
    this.pieChartDataBudget = {
      chartType: 'LineChart',
      dataTable: this.dataTableBudget,
      options: {
        title: 'Бюджет',
        height: 300,
        curveType: 'function',
        legend: {
          position: 'bottom'
        }
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
      return this.datasource.getAllData(). subscribe((data) => {
        this.data = data
          .filter((indexDay: Idata) => {
            return indexDay.month === month && indexDay.year === year;
          });
        this.updatedataChart();
      });
    }
  }

}
