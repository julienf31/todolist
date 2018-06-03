import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs/index';
import {Todo} from '../../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasksList: Array<Todo> = [
    {
      name: 'Courses',
      description: 'Acheter du pain',
      done: true
    }
  ];

  public tasksList$: BehaviorSubject<any>;

  constructor() {
    this.tasksList$ = new BehaviorSubject<any>('');
    this.tasksList$.next(this.tasksList);
  }

  public getTasks() {
    return this.tasksList;
  }

  public countTasks(): number {
    return this.tasksList.length;
  }

  public getTaskById(id) {
    return this.tasksList[id];
  }

  public update(todo: Todo, id) {
    this.tasksList$.subscribe(data => {
      this.tasksList[id] = todo;
    });
  }

  public addTask(task: Todo) {
    this.tasksList.push(task);
    console.log(this.tasksList);
    console.log(this.tasksList$);
    this.tasksList$.next(this.tasksList);
  }

  public delete(id) {
    this.tasksList.splice(id, 1);
  }

  public complete(id) {
    this.tasksList[id].done = !this.tasksList[id].done;
  }
}
