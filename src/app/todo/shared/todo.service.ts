import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from '../../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  task: Todo;

  tasksList: Array<Todo> = [
    {
      name: 'Nom',
      description: 'Description',
      done: false
    }
  ];

  constructor() {
  }

  public getTasks() {
    return this.tasksList;
  }

  public addTask(task) {
    this.tasksList.push(task);
  }

  public delete(id) {
    this.tasksList.splice(id, 1);
  }

  public markComplete(id) {
    this.tasksList[id].done = true;
  }
}
