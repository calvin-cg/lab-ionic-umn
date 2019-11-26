import {Component, OnInit} from '@angular/core';
import {Todo, TodoDetailsService} from "../pages/todo-details.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  todos: Todo[];

  constructor(
    private todoService: TodoDetailsService
  ) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }

}
