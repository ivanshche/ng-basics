import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root2',
  templateUrl: './app-root-second.component.html',
  styleUrls: ['./app-root-second.component.scss']
})
export class AppRootSecondComponent implements OnInit {

  text = 'This is ceremony Bl';
  text2 = 'hell))';
  myData: any;
  users: Array<any> = [
    {fn: 'ayvan', ln: 'sidorov'},
    {fn: 'Romeo', ln: 'Fwyeri'},
    {fn: 'Vasya ', ln: 'Hmuriy'},
  ];
  birthday: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
  onBtnClick(){
    this.text = 'OMG Text change';
  }
  // tslint:disable-next-line:typedef

  /*В чем разница: JSON vs JavaScript Object? (IT-витаминка)*/
  // tslint:disable-next-line:typedef
  showPerson(){
    const personObject = {name: 'ayvan', sername: 'sidorov', age: 25};
    const personJSON = JSON.stringify(personObject);
    console.log(personObject);
    console.log(personJSON);
    localStorage.setItem('personJSON', personJSON);
    const myStorage = window.localStorage;
    console.log(myStorage);
  }
}
