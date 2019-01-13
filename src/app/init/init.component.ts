import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html'
})

export class InitComponent {
  data = [];
  i = 0;

  constructor(private http7: HttpClient) {
  }

  getRandomNumber = (min, max) => {
    return (Math.floor(Math.random() * (max * 100 - min * 100 + 1)) + min * 100) / 100;
  }

  go = () => {
    const date = new Date(2019, 0, this.i + 1);
    const day = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      budget: {
        income: [
          {
            name: 'зарплата',
            quantity: this.getRandomNumber(30, 100),
            color: '#0bc7b1'
          },
          {
            name: 'проценты по вкладам',
            quantity: this.getRandomNumber(1, 10),
            color: '#0777b1'
          }
        ],
        costs: [
          {
            name: 'еда',
            quantity: this.getRandomNumber(15, 30),
            color: '#0997b1'
          },
          {
            name: 'комуналка',
            quantity: this.getRandomNumber(15, 30),
            color: '#9999b1'
          }
        ]
      },
      report: {
        income: [
          {
            name: 'зарплата',
            quantity: this.getRandomNumber(35, 105),
            color: '#4444b1'
          },
          {
            name: 'проценты по вкладам',
            quantity: this.getRandomNumber(1, 10),
            color: '#0777b1'
          }
        ],
        costs: [
          {
            name: 'еда',
            quantity: this.getRandomNumber(15, 30),
            color: '#fff7b1'
          },
          {
            name: 'комуналка',
            quantity: this.getRandomNumber(15, 30),
            color: '#0fffff'
          }
        ]
      },
      id: 0

    };
    if (this.i < 100) {
      this.http7.post('http://localhost:3000/data', day).subscribe(() => {
          this.i = this.i + 1;
          console.log(this.i);
          setTimeout(this.go, 100);
      });
    }
  }
}
