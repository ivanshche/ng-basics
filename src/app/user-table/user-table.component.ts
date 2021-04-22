import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../models/user';


// const itemsPerPage = 3;

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  // providers: [UsersService]

})
export class UserTableComponent implements OnInit {

  public users!: Array<User>;

  /*Angular 6. Урок 3.1. NgPagination - разметка
  для переключения по страницам таблицы
   */
  public page: number;
  public collectionSize!: number;
  public itemsPerPage = 3;

  constructor(public userService: UsersService) {
    // this.users = userService.getUsers();
    // @ts-ignore
    // userService.getUsers(this.page, itemsPerPage)
    //   .subscribe(users => {
    //     this.users = users;
    //     this.collectionSize = this.users.length;
    //   });

    this.page = 1; /*for open on first page by default*/
    this.loadPage();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onPageChange(){
    // console.log('page number' + pageNumber);
    this.loadPage();
  }

  // tslint:disable-next-line:typedef
  private loadPage(){
    this.userService.getUsers(this.page, this.itemsPerPage)
      .subscribe(p => {
        this.users = p.rows;
        this.collectionSize = p.totalCount;
      });
  }

}
