import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  all() {
    return this.http.get(this.url);
  }

  create(post: Post) {
    return this.http.post(this.url, post);
  }

  update(post: Post) {
    return this.http.put(this.url + '/' + post.id, post);
    // return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: post.isRead, isPatched: true}) );
  }

  delete(post: Post) {
    return this.http.delete(this.url + '/' + post.id);
  }

}

export class Post {
  id: number;
  userId: number;
  isRead = false;
  constructor(public title?: string) {}
}

