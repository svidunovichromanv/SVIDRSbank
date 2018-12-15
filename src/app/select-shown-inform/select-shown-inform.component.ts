import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {SelectVal} from '../interfaces/select-val';

@Component({
  selector: 'app-select-shown-inform',
  templateUrl: './select-shown-inform.component.html',
  styleUrls: ['./select-shown-inform.component.css']
})
export class SelectShownInformComponent implements OnInit {

  private select: Array<SelectVal> = [
    {
      value: 'Все',
    },
    {
      value: '2018/11',
    },
    {
      value: '2018/12',
    },
    {
      value: '2019/01',
    },
    {
      value: '2019/02',
    },
    {
      value: '2019/03',
    },
    {
      value: '2019/04',
    },
    {
      value: '2019/05',
    },
    {
      value: '2019/06',
    }
  ];
  @Input() dataShow;
  @Output() show = new EventEmitter<SelectVal>();
  constructor() { }

  ngOnInit() {
    this.dataShow = this.select[2].value;
  }
  getSelect(): Array<SelectVal> {
    return this.select;
  }
  showOther() {
    this.show.emit(this.dataShow);
  }

}
