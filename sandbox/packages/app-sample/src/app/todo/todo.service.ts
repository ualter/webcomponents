import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from './todo';
import { TODOS } from './mock-todo';
import { MessageService } from '../message.service';


@Injectable({
    providedIn: 'root',
})
export class TodoService {

    constructor(private messageService: MessageService) { }

    getTodos(): Observable<Todo[]> {
        this.messageService.add('Fetched all Todos');
        return of(TODOS);
    }

    getTodo(id: number | string) {
        return this.getTodos().pipe(
            map((todos: Todo[]) => todos.find(todo => todo.id == +id))
        )
    }

}