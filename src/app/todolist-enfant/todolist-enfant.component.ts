import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist-enfant',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todolist-enfant.component.html',
  styleUrl: './todolist-enfant.component.css',
})

export class TodolistEnfantComponent {
  title = 'ToDoList';

  tasks: {
    id: number;
    title: string;
    author: string;
    completed: boolean;
    tags: string[];
  }[] = [];

   // ID pour générer un identifiant unique
  taskId: number = 1;

  // Champs pour le formulaire
  newTitle: string = '';
  newAuthor: string = '';
  newTags: string = '';

  addTask() {
    const title = this.newTitle.trim();
    const author = this.newAuthor.trim();
// Vérifie que le titre et l'auteur ne sont pas vides
    if (!title || !author) return;

    const tagsArray = this.newTags
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag !== '');

    this.tasks.push({
      id: this.taskId++,
      title,
      author,
      completed: false,
      tags: tagsArray,
    });
    
 // Réinitialiser les champs après l'ajout
    this.newTitle = '';
    this.newAuthor = '';
    this.newTags = '';
  }

   deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  isCompleted(task: { completed: boolean }) {
    task.completed = !task.completed; // Inverse l'état de complétion
  }


}
