import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './Dashboard.component';
import {PersonComponent } from './Person.component';
import {FamilyComponent} from './Family.component';

const routes: Routes = [
  {
    path: 'people',
    component: PersonComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo:'/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: FamilyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
