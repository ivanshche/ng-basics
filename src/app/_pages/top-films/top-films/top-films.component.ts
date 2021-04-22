import { Component, OnInit } from '@angular/core';
import {TopFilmsService} from '../top-films.service';

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.scss']
})
export class TopFilmsComponent implements OnInit {

  constructor(private topFilmsService: TopFilmsService) { }

  ngOnInit(): void {
    this.topFilmsService.getFilms();
  }

}
