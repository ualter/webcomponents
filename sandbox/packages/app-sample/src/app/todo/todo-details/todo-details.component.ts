import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../todo';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TodoService } from '../todo.service';
import { switchMap, map } from 'rxjs/operators';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/format-datepicker';
import { TODOS } from '../mock-todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class TodoDetailsComponent implements OnInit {

  todo$: Observable<Todo>;
  insert:boolean;
  labelBackButton:string = "Back";
  formValid:boolean = false;
  @ViewChild('description', {static: false}) descriptionElement: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TodoService
  ) {}

  ngOnInit() {
    this.formValid = false;
    if (  this.route.snapshot.params.id ) {
      this.todo$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getTodo(params.get('id')))
      );
      this.insert = false;
    } else {
      let newId = TODOS.length + 1;
      let todo: Todo = {
        id: newId,
        description: "",
        date: null
      }
      this.todo$ = of(todo).pipe();
      this.insert = true;
      this.labelBackButton = "Cancel";
    }
  }

  gotoTodos(todo: Todo) {
    let todoId = todo ? todo.id : null;
    this.router.navigate(['/todo-list', {id: todoId, foo: 'foo'}]);
  }
  saveTodo(todo: Todo) {
    TODOS.push(todo);
    let todoId = todo ? todo.id : null;
    this.router.navigate(['/todo-list', {id: todoId, foo: 'foo'}]);
  }
  onChange(val) {
    var d = new Date(val);
    let date = [d.getFullYear(), ('0' + (d.getMonth() + 1)).slice(-2), ('01').slice(-2)].join('-');
    console.log(date);
  }
  validateForm(newValue, todo) {
    if ( todo.description != null && todo.description.length > 5 && todo.date != null )  {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

  ngAfterViewInit() {
    this.descriptionElement.nativeElement.focus();
    this.descriptionElement.nativeElement.select();
  }

  myFilter(d: Date): boolean {
		const day = d.getDay();
    const month = d.getMonth();
		const todays_date = d.getDate();
		const todaysDateObject = new Date();
		const today = todaysDateObject.getDate();
    const actualMonth = todaysDateObject.getMonth();

    /** Prevent actual system date from being selected.*/
    if (month === actualMonth && todays_date === today) {
      return false;
    } else if (day !== 0 && day !== 6) {
      return true;
    } else {
      return false;
    }

		/** Prevent Saturday, Sunda.*/
    //return day !== 0 && day !== 6;
	}

}
