import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Game Control';
  startNumber: number = 0;
  oddNumber: number[] = [];
  evenNumber: number[] = [];
  interval;

  onIntervalClicked(): void {
    this.interval = setInterval(() => {
      if (this.startNumber % 2 === 0) {
        this.evenNumber.push(this.startNumber);
        this.startNumber++;
      } else {
        this.oddNumber.push(this.startNumber);
        this.startNumber++;
      }
    }, 1000);
  }
  onStopIntervalClicked(): void {
    clearInterval(this.interval);
  }

  onRestartGameClicked(): void {
    clearInterval(this.interval);
    this.startNumber = 0;
    this.oddNumber = [];
    this.evenNumber = [];
  }
}
