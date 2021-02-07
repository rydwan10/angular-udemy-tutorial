import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Todo List';
  todos: { id: number; title: string }[] = [
    { id: 1, title: 'Create todo list app using Angular 11' },
    { id: 2, title: 'Finish Udemy Course' },
  ];

  onAddTodo(todoItem: { id: number; title: string }): void {
    this.todos.push({ id: todoItem.id, title: todoItem.title });
  }
  onDeleteTodo(args: { id: number }): void {
    this.todos = this.todos.filter((todo) => todo.id !== args.id);
  }
  onClearAllTodo(): void {
    if (confirm('Clear all todos?')) {
      this.todos = [];
    }
    return;
  }
}
