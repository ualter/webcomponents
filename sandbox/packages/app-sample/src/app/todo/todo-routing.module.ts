import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const todoRoutes: Routes = [
    { path: 'todo-list', component: TodoListComponent, data: { animation: 'todo-list' } },
    { path: 'todo-details', component: TodoDetailsComponent, data: { animation: 'todo-details' } },
    { path: 'todo-details/:id', component: TodoDetailsComponent, data: { animation: 'todo-details' } }
];
  

@NgModule({
    imports: [
      RouterModule.forChild(todoRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class TodoRoutingModule { }