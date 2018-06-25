import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent {

  posts: Post[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    http
      .get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      });
    }

    create(input: HTMLInputElement) {
      this.http
      .post(this.url, new Post(input.value))
      .subscribe(response => {
        this.posts.push(response.json() as Post);
      });
    }
}

export class Post {
  id: number;
  userId: number;
  constructor(public title?: string) {}
}
