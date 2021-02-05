import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  toggleParagraph: boolean = false;
  arrClick: Date[] = [];
  constructor() {}

  ngOnInit(): void {}

  onToggleParagraph(): void {
    this.toggleParagraph = !this.toggleParagraph;
    this.arrClick.push(new Date());
  }
}
