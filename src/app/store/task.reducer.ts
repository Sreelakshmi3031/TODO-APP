import { createReducer, on } from '@ngrx/store';
import { addTask, toggleTask, deleteTask } from './task.actions';
import { Task } from '../models/task.model';

export const initialState: Task[] = [];

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => [...state, task]),
  on(toggleTask, (state, { id }) =>
    state.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  ),
  on(deleteTask, (state, { id }) => state.filter((task) => task.id !== id))
);
