import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  public todoContent: string = '';

  @Output()
  public createTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    const todo: Todo = new Todo();

    todo.completed = false;
    todo.content = this.todoContent;

    this.createTodo.emit(todo);

    this.todoContent = '';
  }
}
