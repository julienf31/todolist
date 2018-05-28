import {Component, OnInit} from '@angular/core';
import {Todo} from '../../todo';
import {TodoService} from '../shared/todo.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {

  tasksList;

  constructor(private todoService: TodoService, private router: Router) {
    this.tasksList = todoService.getTasks();
  }

  todo: Todo = {
    name: 'Nom',
    description: 'Description',
    done: false
  };

  ngOnInit() {
  }

  save() {
    console.log('new todo : ' + this.todo.name);
    this.todoService.addTask(this.todo);
    this.router.navigate(['list']);
  }

}
