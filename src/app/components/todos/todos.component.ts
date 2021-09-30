import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos!: Todo[];

  constructor(
    private todoService: TodoService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
      }
    );
  }

  public onDelete(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe(
      (todoResponse: Todo) => {
        this.todos = this.todos.filter(
          (todoElement: Todo): boolean => {
            return todoElement.id !== todo.id;
          }
        );
      }
    );
  }

  public onToggle(todo: Todo): void {
    this.todoService.toggleTodo(todo).subscribe(
      (todoResponse: Todo) => {
        this.todos = this.todos.map(
          (todoElement: Todo): Todo => {
            if (todo.id === todoElement.id) {
              todoElement.completed = !todoElement.completed;
            }

            return todoElement;
          }
        );
      },
      (error: any) => {
        this.snackBar.open(
          'Wystąpił błąd podczas modyfikacji elementu',
          'Zamknij'
        );
      }
    );
  }

  public onAdd(todo: Todo): void {
    this.todoService.addTodo(todo).subscribe(
      (todoResponse: Todo) => {
        todo.id = todoResponse.id;
        this.todos.push(todo);
      }
    );
  }
}
