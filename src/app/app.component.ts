import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'myapp';
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error = null;
  subscription: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit(): void {
    this.subscription = this.postsService.error.subscribe((errrorMessage) => {
      this.error = errrorMessage;
    });
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.isFetching = false;

        this.error = error.error.error;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    // Send POST
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.isFetching = false;
      },
      (error) => {
        this.isFetching = false;

        this.error = error.message;
      }
    );
  }

  onClearPosts() {
    // DELETE
    this.postsService.deletePosts().subscribe((results) => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }
}
