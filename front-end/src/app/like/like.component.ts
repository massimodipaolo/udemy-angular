import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') likesCount = 0;
  @Input('isActive') isActive = false;
  @Output('change') change = new EventEmitter<LikeComponentEventArgs>();

  onClick() {
    this.isActive = !this.isActive;
    this.likesCount += this.isActive ? 1 : -1;
    this.change.emit({count: this.likesCount, liked: this.isActive});
  }

}

export interface LikeComponentEventArgs {
  count: number;
  liked: boolean;
}
