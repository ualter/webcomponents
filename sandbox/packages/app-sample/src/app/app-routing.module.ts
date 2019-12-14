import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/todo-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
