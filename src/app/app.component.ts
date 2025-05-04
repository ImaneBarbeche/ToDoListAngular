import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodolistEnfantComponent } from './todolist-enfant/todolist-enfant.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, TodolistEnfantComponent],

})


export class AppComponent {
}