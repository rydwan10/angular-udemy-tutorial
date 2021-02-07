import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() intervalClicked = new EventEmitter();
  @Output() stopIntervalClicked = new EventEmitter();
  @Output() restartGameClicked = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.intervalClicked.emit();
  }

  stopGame() {
    this.stopIntervalClicked.emit();
  }
  restartGame() {
    this.restartGameClicked.emit();
  }
}
