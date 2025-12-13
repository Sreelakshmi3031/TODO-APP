import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { Todo as TodoService } from '../todo';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',

})
export class Todo {
  newTaskTitle = '';
  task$: Observable<Task[]>;

  constructor(private todoService: TodoService) {
    this.task$ = this.todoService.task$;
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.todoService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }

  toggleCompletion(id: number) {
    this.todoService.toggleTaskCompletion(id);
  }

  deleteTask(id: number) {
    this.todoService.deleteTask(id);
  }

}
