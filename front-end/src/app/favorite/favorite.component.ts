import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //inputs: ['active'] //aleternative way to declare input fields
  encapsulation: ViewEncapsulation.Emulated //default view encapsulation: emulate shadow DOM
})

export class FavoriteComponent implements OnInit {

  /*
  <app-favorite [active]="true" (change)="myComponentOnChangeFunc"></app-favorite>
  */

  //@Input() active: boolean = false;
  @Input('is-active') active: boolean = false;  // alias make the component stable
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.active = !this.active;
    this.change.emit({ active: this.active });
  }

}

export interface FavoriteComponentEventArgs {
  active: boolean;
}
