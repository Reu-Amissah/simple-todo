import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todos } from '../todos';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todo: Todos[] = [
    { title: 'hello', status: false },
    { title: 'you have to do this', status: true },
  ];

  inputTodo: string = '';
  filteredArray: Todos[] = this.todo.filter((item) => item.status === true);

  // Get the count by checking the length of the filtered array
  count: number = this.filteredArray.length;
  number: number = this.todo.length;

  completeAll: Boolean = this.count === this.number;

  setDone(id: number) {
    this.todo.map((v, i) => {
      if (i == id) v.status = !v.status;

      this.filteredArray = this.todo.filter((item) => item.status === true);
      return v;
    });
  }
  deleteTodo(id: number) {
    this.todo.map((v, i) => {
      this.todo = this.todo.filter((v, i) => i !== id);
      this.filteredArray = this.todo.filter((item) => item.status === true);
    });
  }

  addTodo() {
    this.todo.push({
      title: this.inputTodo,
      status: false,
    });
  }
}
