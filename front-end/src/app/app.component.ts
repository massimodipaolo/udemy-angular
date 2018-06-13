import { Component } from '@angular/core';
import { FavoriteComponentEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  onFavoriteChange(eventArgs: FavoriteComponentEventArgs) {
    console.log('Favorite Changed', eventArgs.active);
  }
}
