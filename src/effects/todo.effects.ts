import { Todo } from './../models/student.model';
import { StudentsServicesService } from './../app/services/students-services.service';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import * as StudentActions from '../actions/student.actions';
import * as TodotActions from '../actions/student.actions';
import { catchError, from, of, map, switchMap } from 'rxjs';

@Injectable()
export class TodoEffects {
  constructor(
    private action$: Actions,
    private StudentsSer: StudentsServicesService
  ) {}

  addTodo$ = createEffect(() =>
    this.action$.pipe(
      ofType(TodotActions.addTodo),
      switchMap((action) => from(this.StudentsSer.addTodo(action.Todo))),
      map(() => StudentActions.addTodoSuccess()),
      catchError((error) => {
        return of(StudentActions.addTodotFails({ error: error }));
      })
    )
  );

  getTodo$ = createEffect(() =>
    this.action$.pipe(
      ofType(TodotActions.getStudents),
      switchMap(() => this.StudentsSer.getTodo()),
      map((snapshot) => {
        let todo = snapshot.map((doc) => <Todo>doc.data());
        return TodotActions.getTodoSuccess({ Todo: todo });
      }),
      catchError((error) => {
        return of(TodotActions.getTodoFails({ error: error }));
      })
    )
  );
  deleteTodo$ = createEffect(() =>
    this.action$.pipe(
      ofType(TodotActions.deleteTodo),
      switchMap((action) =>
        from(this.StudentsSer.deleteTodo(action.id)).pipe(
          map(() => TodotActions.deleteTodoSuccess()),
          catchError((error) => of(TodotActions.deleteTodoFails(error.message)))
        )
      )
    )
  );

}
