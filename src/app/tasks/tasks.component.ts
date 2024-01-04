import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  taskList: Task[] = [];
  taskName = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    // Create a task
    const task: Task = {
      name: this.taskName,
      state: false
    };
    // Add the task to the array
    this.taskList.push(task);
    // Reset the input
    this.taskName = '';
  }

  deleteTask(index: number): void {
    this.taskList.splice(index, 1);
  }

  updateTask(task: Task, index: number): void {
    this.taskList[index].state = !task.state;
    console.log(this.taskList[index].state);
  }

}
