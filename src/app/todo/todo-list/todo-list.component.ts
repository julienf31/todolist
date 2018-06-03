import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from '../../todo';
import {TodoService} from '../shared/todo.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  tasks;
  tasksSubscription: Subscription;

  constructor(private todoService: TodoService) {
    this.tasksSubscription = this.todoService.tasksList$.subscribe((updatedTasks) => {
      this.tasks = updatedTasks;
      console.log(updatedTasks);
      console.log('updated tasks');
    });
    console.log(this.tasks);
  }

  countTasks() {
    return this.todoService.countTasks();
  }

  delete(id) {
    this.todoService.delete(id);
  }

  complete(id) {
    this.todoService.complete(id);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.tasksSubscription) {
      this.tasksSubscription.unsubscribe();
    }
  }

}
