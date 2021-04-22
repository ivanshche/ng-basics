import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TopFilmsComponent} from './_pages/top-films/top-films/top-films.component';



const routes: Routes = [
  {path: '', loadChildren: () => import('./_pages/top-films/top-films.module').then(m => m.TopFilmsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
