import { Component } from '@angular/core';
import { FavoriteComponentEventArgs } from './favorite/favorite.component';
import { LikeComponentEventArgs } from './like/like.component';
import { ContactForm } from './contact-form/contact-form.component';
import { User } from './signup/signup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  onSignUp(user: User) {
    console.log('onSignUp', user);
  }

  contacts = [];
  addContact(item: ContactForm) {
    this.contacts.push(item);
  }
  removeContact(item: ContactForm) {
    let index = this.contacts.indexOf(item);
    this.contacts.splice(index,1);
  }

  tweets = [];
  loadTweets() {
    this.tweets = [
      new Tweet("Today is #WorldBloodDonorDay. Give blood and save up to 3 lives.      💉= ❤️❤️❤️ http://ow.ly/ICQo30kub0c", 303, false),
      new Tweet("Let us thank all #Blood donors for their life saving gift on #WorldBloodDonorDay. It is also an occasion to raise awareness about the need for safe blood. #BloodDonorDay", 10, true),
      new Tweet("Happy #WorldBloodDonorDay everyone!", 82, false),
      new Tweet("This is the official account for the blood service for England. We love reading your tweets and reply to them between 0700-2300 #GiveBlood", 130, false)
    ];
  }
  addTweet(text: string) {
    let item = new Tweet(text, 0, false);
    item.author = { name: 'Massimo' };
    this.tweets.push(item);
  }
  removeTweet(tweet: Tweet) {
    let index = this.tweets.indexOf(tweet);
    this.tweets.splice(index, 1);
  }
  trackTweets(index,tweet: Tweet) {
    return tweet ? tweet.text : undefined;
  }

  onFavoriteChange(eventArgs: FavoriteComponentEventArgs) {
    console.log('Favorite Changed', eventArgs.active);
  }

}

export class Tweet {
  author: any;
  constructor(public text?: string, public likes?: number, public liked?: boolean) { }
  onLike(eventArgs: LikeComponentEventArgs) {
    this.likes = eventArgs.count;
    this.liked = eventArgs.liked;
  }
}
