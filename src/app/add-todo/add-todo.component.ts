import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title: string = '';
  @Output() addTodo = new EventEmitter<{ id: number; title: string }>();
  constructor() {}

  ngOnInit(): void {}

  onAddTodo(): void {
    if (this.title.trim() === '') return alert('Title must not empty');
    this.addTodo.emit({
      id: Math.floor(Math.random() * 10000),
      title: this.title,
    });
    this.title = '';
  }
}
