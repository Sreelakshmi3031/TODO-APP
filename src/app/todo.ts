import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class Todo {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  task$ = this.tasksSubject.asObservable();

  constructor() {}

  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };
    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);
  }

  toggleTaskCompletion(id: number){
    this.tasks = this.tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed} : task
    );
    this.tasksSubject.next(this.tasks);
  }

  deleteTask(id: number){
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
  }
  
}
