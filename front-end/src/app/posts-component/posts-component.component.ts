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

  update(post: Post) {
    post.isRead = true;
    post.title = post.title + ' - edited';

    this.http
      .put(this.url + '/' + post.id, post)
      .subscribe(response => {
        post = response.json() as Post;
        console.log(post);
      }
      )
    ;

    /*
    this.http
    .patch(this.url + '/' + post.id, JSON.stringify({isRead: post.isRead, isPatched: true}) )
    .subscribe(response => console.log(response.json() as Post));
    */
  }

  delete(post: Post) {
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response => {
      if (response.ok) {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }
      console.log(response);
    });
  }

}

export class Post {
  id: number;
  userId: number;
  isRead = false;
  constructor(public title?: string) {}
}
