import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]>;
  selectedId: number;

  constructor(
    private service: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.todos$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getTodos();
      })
    );
  }

  newTodo() {
    this.router.navigate(['/todo-details']);
  }

}
