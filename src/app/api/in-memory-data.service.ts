import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  // tslint:disable-next-line:typedef
  createDb() {
    const users = [
      {firstName: 'ayvan', lastName: 'sidorov'},
      {firstName: 'Tar', lastName: 'Fidj'},
      {firstName: 'Jeck', lastName: 'Potroshitel'},
      {firstName: 'ayvan', lastName: 'sidorov'},
      {firstName: 'Romeo', lastName: 'Fwyeri'},
      {firstName: 'Vasya ', lastName: 'Hmuriy'},
    ];
    return {users};
  }
}
