import {Component, OnInit} from '@angular/core';
import {Todo} from '../../todo';
import {TodoService} from '../shared/todo.service';


@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {


  tasksList;
  constructor(private todoService: TodoService) {
    this.tasksList = todoService.getTasks();
  }

  todo = {
    name: 'Nom',
    description: 'Description'
  };

  ngOnInit() {
  }

  save() {
    console.log('new todo : ' + this.todo.name);
    this.todoService.addTask(this.todo);
  }

}
