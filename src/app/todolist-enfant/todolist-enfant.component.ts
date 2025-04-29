import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist-enfant',
  imports: [FormsModule],
  templateUrl: './todolist-enfant.component.html',
  styleUrl: './todolist-enfant.component.css'
})

export class TodolistEnfantComponent {
  title = 'ToDoList';
  task : string = ''
  tasks : string[] = [];
  input: string = '';
  index: number = 0;

  addTask() {
  
    if(this.task)
  this.tasks.push(this.task); 
  this.task = '';
  }
  
  deleteTask(index: number) {
    this.tasks.splice(index, 1)
  }
  trackTask(index: number) {
    return index;
  }
}
