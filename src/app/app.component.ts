import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myapp';

  constructor() {}

  ngOnInit(): void {}

  onCreatePost(postData: { title: string; content: string }) {
    console.log(postData);
  }
}
