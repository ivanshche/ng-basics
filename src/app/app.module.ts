import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MycompComponent } from './mycomp/mycomp.component';
import { AppRootSecondComponent } from './app-root-second/app-root-second.component';
import {FormsModule} from '@angular/forms';
import { UserTableComponent } from './user-table/user-table.component';
import { UserListComponent } from './user-list/user-list.component';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './api/in-memory-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    AppRootSecondComponent,
    UserTableComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    /*delete if need send http on server*/
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false }
    ),
    NgbModule,
  ],
  providers: [UsersService],
  bootstrap: [
    AppComponent,
    AppRootSecondComponent,
  ]
})
export class AppModule { }
