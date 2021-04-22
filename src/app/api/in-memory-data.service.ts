import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})

/*InMemoryDataService - жмулятор API*/
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  // tslint:disable-next-line:typedef
  createDb() {
    // const users = [
    const users = new Array<User>(
      {id: 1, firstName: 'ayvan', lastName: 'sidorov'},
      {id: 2, firstName: 'Tar', lastName: 'Fidj'},
      {id: 3, firstName: 'Jeck', lastName: 'Potroshitel'},
      {id: 4, firstName: 'ayvan', lastName: 'sidorov'},
      {id: 5, firstName: 'Romeo', lastName: 'Fwyeri'},
      {id: 6, firstName: 'Vasya ', lastName: 'Hmuriy'},
      {id: 7, firstName: 'ayvan', lastName: 'sidorov'},
      {id: 8, firstName: 'Tar', lastName: 'Fidj'},
      {id: 9, firstName: 'Jeck', lastName: 'Potroshitel'},
      {id: 10, firstName: 'ayvan', lastName: 'sidorov'},
      // {id: 11, firstName: 'Romeo', lastName: 'Fwyeri'},
      // {id: 12, firstName: 'Vasya ', lastName: 'Hmuriy'},
    );
    return {users};
  }
}
