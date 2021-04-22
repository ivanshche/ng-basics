import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TablePage} from './table-page';
import {User} from './models/user';

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
    const users = this.httpClient.get<User[]>(this.usersUrl);
    // console.log('users' + users);
    // console.log('page' + page);
    // console.log('itemPerPage' + itemPerPage);
    return this.getPageData(users, page, itemPerPage);
  }

  private getPageData(users: Observable<Array<User>>, page: number, itemPerPage: number): Observable<TablePage> {

    return users.pipe(
      map(u => {
        // tslint:disable-next-line:prefer-const
        let startIndex = itemPerPage * (page - 1);
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
