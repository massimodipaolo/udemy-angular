import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../services/post.service';
import { error } from 'protractor';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {

  posts: Post[];

  ngOnInit(): void {
      this.service.all()
      .subscribe(
        response => {
        this.posts = response.json();
      },
        error => {
        console.log(error, 'An unexpected error occurred');
      });
  }

  constructor(private service: PostService) {
  }

  create(input: HTMLInputElement) {
      this.service.create(new Post(input.value))
      .subscribe(
        response => {
        this.posts.push(response.json() as Post);
        input.value = '';
      },(error: Response) => {
          if (error.status === 400) {
              // this.form.setErrors(error.json());
          } else {
            console.log('An unexpected error occurred');
          }
      });
  }

  update(post: Post) {
    post.isRead = true;
    post.title = post.title + ' - edited';

    this.service.update(post)
      .subscribe(response => {
        post = response.json() as Post;
        console.log(post);
      }
      )
    ;
  }

  delete(post: Post) {
    //post.id = 200;
    this.service.delete(post)
    .subscribe(
      response => {
      if (response.ok) {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }
      console.log(response);
    },
    (error: Response) => {
      if (error.status === 404) {
        console.log('Post ' + post.id + ' was already deleted');
      } else {
        console.log('An unexpected error occurred');
      }
      console.log(error);
    }
  );
  }

}

