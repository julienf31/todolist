import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from '../../todo';
import {TodoService} from '../shared/todo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit, OnDestroy {

  todo: Todo;
  protected type = 'create';
  private id: number;

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) {

    this.id = route.snapshot.params['id'];
    if (this.id !== undefined) {
      this.todo = todoService.getTaskById(this.id);
      this.type = 'edit';
    } else {
      this.todo = {
        name: 'Nom',
        description: 'Description',
        done: false
      };
    }
  }

  save() {
    if (this.type === 'create') {
      this.todoService.addTask(this.todo);
    } else {
      this.todoService.update(this.todo, this.id);
    }
    this.router.navigate(['list']);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
