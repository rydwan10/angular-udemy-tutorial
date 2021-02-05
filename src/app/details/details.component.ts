import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  toggleParagraph: boolean = false;
  arrClick: number[] = [];
  constructor() {}

  ngOnInit(): void {}

  onToggleParagraph(): void {
    this.toggleParagraph = !this.toggleParagraph;
    this.arrClick.push(this.arrClick.length + 1);
  }
}
