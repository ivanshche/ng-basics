import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopFilmsService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getFilms(){
    return this.http.get('assets/movies.json');
  }
}
