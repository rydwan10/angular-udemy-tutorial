import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(
        'https://academind-angular-course-v1-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response',
        }
      )
      .subscribe(
        (response) => {
          console.log(response.body);
        },
        (error) => {
          this.error.next(error);
        }
      );
  }

  fetchPosts() {
    let customParams = new HttpParams();
    customParams = customParams.append('print', 'pretty');
    customParams = customParams.append('key', 'value');

    return this.http
      .get<{ [key: string]: Post }>(
        'https://academind-angular-course-v1-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello Firebase!' }),
          params: customParams,
          responseType: 'json',
        }
      )
      .pipe(
        map((responseData) => {
          const postsArr: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArr.push({ ...responseData[key], id: key });
            }
          }

          return postsArr;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(
        'https://academind-angular-course-v1-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events',
          responseType: 'text',
        }
      )
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Sent) {
            // console.log('Request sended!');
          }
          if (event.type === HttpEventType.Response) {
            console.log(event);
          }
        })
      );
  }
}
