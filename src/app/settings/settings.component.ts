import { Component, OnInit } from '@angular/core';
import {SvidrsBankDatasource} from '../service/svidrs-bank.datasource';
import {Idata} from '../interfaces/idata';
import {Settings} from '../interfaces/settings';
import {EditerDatasource} from '../service/editer-datasource.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [EditerDatasource]
})
export class SettingsComponent implements OnInit {
  private settings: Array<Settings> = [];
  private editerExpense: number|null;

  constructor(private datasource: SvidrsBankDatasource, private editerDatasource: EditerDatasource) {
    datasource.getSettings().subscribe((settings) => {
      this.settings  =  settings ;
    });
    editerDatasource.getSubject()
      .subscribe((idExp: number|null) => {
        this.editerExpense = idExp;
      });
  }

  ngOnInit() {
  }

  changeEditerId(id: number|null) {
    this.editerDatasource.getSubject().next(id);
  }

  getEditerExpense(): number|null {
    return this.editerExpense;
  }

}
