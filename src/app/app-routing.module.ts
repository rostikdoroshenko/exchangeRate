import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartComponent } from './chart/chart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {
    path: 'chart',
    component: ChartComponent,
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Please, select date and currency!' }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
