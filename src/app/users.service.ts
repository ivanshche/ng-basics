import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TablePage} from './table-page';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public clickCount = 0;

  public creationDate: Date = new Date();

  private usersUrl = 'api/users';
  // tslint:disable-next-line:typedef
  public increase(){
    this.clickCount++;
  }

  public getUsers(page: number, itemPerPage: number): Observable<TablePage>{
    const users = this.httpClient.get<any[]>(this.usersUrl);
    // console.log('users' + users);
    // console.log('page' + page);
    // console.log('itemPerPage' + itemPerPage);

    return this.getPageItems(users, page, itemPerPage);
  }

  private getPageItems(users: Observable<Array<any>>, page: number, itemPerPage: number): Observable<TablePage> {

    return users.pipe(
      map(u => {
        var startIndex = itemPerPage * (page - 1);
        // console.log('startIndex' + startIndex);
        // console.log('itemPerPage' + itemPerPage);
        /*в качестве параметров передаем 2 жлемента
        u.length - общее количество элекметов
        u.slice(st... - элементы для текушей страеицы         */
        return new TablePage(u.length, u.slice(startIndex, startIndex + itemPerPage));
      })
    );
  }

}
