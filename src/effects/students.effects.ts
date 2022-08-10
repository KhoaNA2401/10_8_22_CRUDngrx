import { Student, Todo } from './../models/student.model';
import { StudentsServicesService } from './../app/services/students-services.service';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import * as StudentActions from '../actions/student.actions';
import * as TodotActions from '../actions/student.actions';
import { catchError, from, of, map, switchMap } from 'rxjs';
import { error } from 'console';
@Injectable()
export class StudentsEffects {
  constructor(
    private action$: Actions,
    private StudentsSer: StudentsServicesService
  ) {}
  // Add Stu
  addStudent$ = createEffect(() =>
    this.action$.pipe(
      ofType(StudentActions.addStudent),
      switchMap((action) => from(this.StudentsSer.addStudent(action.Student))),
      map(() => StudentActions.addStudentSuccess()),
      catchError((error) => {
        return of(StudentActions.addStudentFails({ error: error }));
      })
    )
  );

  //Get Stu
  getStudents$ = createEffect(() =>
    this.action$.pipe(
      ofType(StudentActions.getStudents),
      switchMap(() => this.StudentsSer.getStudent()),
      map((snapshot) => {
        let students = snapshot.map((doc) => <Student>doc.data());
        return StudentActions.getStudentSuccess({ Student: students });
      }),
      catchError((error) => {
        return of(StudentActions.getStudentFails({ error: error }));
      })
    )
  );
  //Update Stu

  updateStudent$ = createEffect(() =>
    this.action$.pipe(
      ofType(StudentActions.updateStudent),
      switchMap((action) => from(this.StudentsSer.update(action.Student))),
      map(() => StudentActions.updateStudentSuccess()),
      catchError((error) => {
        return of(StudentActions.updateStudentFails({ error: error }));
      })
    )
  );

  deleteStudent$ = createEffect(() =>
    this.action$.pipe(
      ofType(StudentActions.deleteStudent),
      switchMap((action) =>
        from(this.StudentsSer.delete(action.id)).pipe(
          map(() => StudentActions.deleteStudentSuccess()),
          catchError((error) =>
            of(StudentActions.deleteStudentFails(error.message))
          )
        )
      )
    )
  );

  // Add Stu
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
  //Get Stu
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
        from(this.StudentsSer.delete(action.id)).pipe(
          map(() => TodotActions.deleteTodoSuccess()),
          catchError((error) =>
            of(TodotActions.deleteTodoFails(error.message))
          )
        )
      )
    )
  );
  //ahihi đồ ngokkkkkkkkkkk
  // ^.^
  // 0.0
  // >.<
  // "."
}
