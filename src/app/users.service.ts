import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  public getUsers(): Observable<Array<any>>{
    return this.httpClient.get<any[]>(this.usersUrl);
  }
}
