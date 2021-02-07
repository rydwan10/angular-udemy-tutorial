import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todoList: { id: number; title: string }[];
  @Output() deleteTodo = new EventEmitter<{ id: number }>();
  constructor() {}

  ngOnInit(): void {}
  onDeleteTodo(args): void {
    // console.log(args);
    this.deleteTodo.emit({ id: args.id });
  }
}
