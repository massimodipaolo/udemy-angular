import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {  map, retry, catchError } from 'rxjs/operators';
import { AppError } from '../common/errors/app-error';
import { NotFoundError } from '../common/errors/not-found-error';
import { BadRequestError } from '../common/errors/bad-request-error';


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
    return this.http
    .delete(this.url + '/' + post.id)
    .pipe(
      catchError((error: Response) => {
        let _error = new AppError(error);
        switch (error.status) {
          case 400:
            _error = new BadRequestError();
          break;
          case 404:
            _error = new NotFoundError();
          break;
        }
        return Observable.throw(_error);
      })
    );
  }

}

export class Post {
  id: number;
  userId: number;
  isRead = false;
  constructor(public title?: string) {}
}

