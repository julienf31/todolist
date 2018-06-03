import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoCreateComponent} from './todo/todo-create/todo-create.component';
import {TodoListComponent} from './todo/todo-list/todo-list.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'list',
    component: TodoListComponent,
  },
  {
    path: 'create',
    component: TodoCreateComponent,
    data: {type: 'create'}
  },
  {
    path: 'edit/:id',
    component: TodoCreateComponent,
    data: {type: 'edit'}
  },
  {
    path: '**',
    component: NotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
