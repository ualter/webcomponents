import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoRoutingModule } from './todo-routing.module';
import { NumberFixedLenPipe } from '../numberFixedLenPipe';

import { MatDatepickerModule, MatNativeDateModule  } from '@angular/material';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      TodoRoutingModule,
      MatDatepickerModule,       
      MatNativeDateModule
    ],
    exports: [
        MatDatepickerModule, 
        MatNativeDateModule 
    ],
    declarations: [
      TodoListComponent,
      TodoDetailsComponent,
      NumberFixedLenPipe
    ]
  })
  export class TodoModule {}

  