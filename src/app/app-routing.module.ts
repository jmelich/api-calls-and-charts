import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnisexComponent} from "./components/unisex/unisex.component";
import {FemaleComponent} from "./components/female/female.component";
import {MaleComponent} from "./components/male/male.component";

const routes: Routes = [
  { path: '', redirectTo: 'unisex', pathMatch: 'full' },
  { path: 'unisex', component:  UnisexComponent},
  { path: 'female', component:  FemaleComponent},
  { path: 'male', component:  MaleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
