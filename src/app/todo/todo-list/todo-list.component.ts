import {Component, OnInit} from '@angular/core';
import {Todo} from '../../todo';
import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasksList;
  constructor(private todoService: TodoService) {
    this.tasksList = todoService.getTasks();
  }

  countTasks() {
    return this.todoService.getTasks().length;
  }

  delete(id) {
    this.todoService.delete(id);
  }

  complete(id) {
    this.todoService.markComplete(id);
  }

  ngOnInit() {
    console.log();
  }

}
