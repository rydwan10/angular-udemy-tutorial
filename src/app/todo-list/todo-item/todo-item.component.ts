import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: { id: number; title: string };
  @Output() deleteTodo = new EventEmitter<{ id: number }>();
  constructor() {}

  ngOnInit(): void {}
  onDeleteTodo(): void {
    this.deleteTodo.emit({ id: this.todoItem.id });
  }
}
