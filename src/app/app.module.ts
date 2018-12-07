import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';

import { SvidrsBankComponent } from './svidrs-bank.component';
import { SvidrsBankDatasource } from './svidrs-bank.datasource';
import { StatisticsComponent } from './statistics/statistics.component';
import { BudgetComponent } from './budget/budget.component';
import { MainComponent } from './main/main.component';
import { NavigateComponent } from './navigate/navigate.component';

// определяем маршруты
const appRoutes: Routes =[
    { path: '', component: MainComponent},
    { path: 'budget', component: BudgetComponent},
    { path: 'statistics', component: StatisticsComponent},
    // для всех остальных URL-ов:
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [ BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes), HttpClientModule ],
  declarations: [
    StatisticsComponent, SvidrsBankComponent,
    BudgetComponent, MainComponent, NavigateComponent
  ],
  providers: [ SvidrsBankDatasource ],
  bootstrap: [ SvidrsBankComponent ]
})

export class AppModule { }
