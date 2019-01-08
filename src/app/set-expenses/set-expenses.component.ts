import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-set-expenses',
  templateUrl: './set-expenses.component.html',
  styleUrls: ['./set-expenses.component.css']
})
export class SetExpensesComponent implements OnInit {

  @Input() setting;

  constructor() { }

  ngOnInit() {
  }

  changeColor(e) {
    console.log(e);
  }

}
