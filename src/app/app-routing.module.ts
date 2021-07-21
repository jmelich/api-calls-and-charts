import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplayChartComponent} from "./components/display-chart/display-chart.component";

const routes: Routes = [
  { path: '', redirectTo: 'both', pathMatch: 'full' },
  { path: ':sex', component:  DisplayChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
