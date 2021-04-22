import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFilmsComponent } from './top-films/top-films.component';
import {TopFilmsRoutingModule} from './top-films-routing.module';
import {TopFilmsService} from './top-films.service';



@NgModule({
  declarations: [
    TopFilmsComponent
  ],
  imports: [
    CommonModule,
    TopFilmsRoutingModule
  ],
  providers: [
    TopFilmsService
  ]
})
export class TopFilmsModule { }
