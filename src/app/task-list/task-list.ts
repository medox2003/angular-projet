import { Component, computed, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe, UpperCasePipe], // Slide 12 : les pipes s'importent ici
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  // Slide 11 : trois tâches au départ
  // Slide 14 : l'état est stocké dans un signal
  tasks = signal<Task[]>([
    { id: 1, title: 'Lire le cours Angular', completed: false, priority: 'high', dueDate: '2026-11-25' },
    { id: 2, title: 'Installer le CLI', completed: true, priority: 'medium', dueDate: '2026-11-22' },
    { id: 3, title: 'Créer TaskFlow', completed: false, priority: 'low' },
  ]);

  count = computed(() => this.tasks().length);

  private nextId = 4;

  add(task: Task) {
    // Nouveau tableau (jamais de push, sinon Angular ne voit rien)
    this.tasks.update(items => [...items, task]);
  }

  clear() {
    this.tasks.set([]);
  }

  // Exercice slide 14 : ajouter une tâche au clic
  addFromInput(input: HTMLInputElement) {
    const title = input.value.trim();
    if (!title) return;
    this.add({
      id: this.nextId++,
      title,
      completed: false,
      priority: 'medium',
      dueDate: new Date().toISOString().slice(0, 10), // date du jour
    });
    input.value = '';
  }
}
