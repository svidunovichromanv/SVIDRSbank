import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SvidrsBankComponent } from './svidrs-bank.component';
import { SvidrsBankDatasource } from './svidrs-bank.datasource';
import { StatisticsComponent } from './statistics/statistics.component';
import { BudgetComponent } from './budget/budget.component';
import { MainComponent } from './main/main.component';
import { NavigateComponent } from './navigate/navigate.component';
import { StructureOfExpenseComponent } from './structure-of-expense/structure-of-expense.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OddBGcolorDirective } from './directives/odd-bgcolor.directive';
import { TempPipe } from './pipes/temp.pipe';
import { SelectShownInformComponent } from './select-shown-inform/select-shown-inform.component';
import { EditerExpensesOfDayComponent } from './editer-expenses-of-day/editer-expenses-of-day.component';
import { EditerDayBudgetDatasource } from './editerDayBudget.datasource';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

// определяем маршруты
const appRoutes: Routes = [
    { path: '', component: MainComponent},
    { path: 'budget', component: BudgetComponent},
    { path: 'statistics', component: StatisticsComponent},
    // для всех остальных URL-ов:
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [ BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes), HttpClientModule,
    BrowserAnimationsModule, Ng2GoogleChartsModule
  ],
  declarations: [
    StatisticsComponent, SvidrsBankComponent,
    BudgetComponent, MainComponent,
    NavigateComponent, StructureOfExpenseComponent,
    OddBGcolorDirective, TempPipe,
    SelectShownInformComponent, EditerExpensesOfDayComponent
  ],
  providers: [ SvidrsBankDatasource, EditerDayBudgetDatasource ],
  bootstrap: [ SvidrsBankComponent ]
})

export class AppModule { }
