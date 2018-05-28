import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoCreateComponent} from './todo/todo-create/todo-create.component';
import {TodoListComponent} from './todo/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: TodoListComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'create',
    component: TodoCreateComponent,
    data: { title: 'Heroes List' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
