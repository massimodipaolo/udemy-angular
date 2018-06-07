import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  active: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.active = !this.active;
  }

}
