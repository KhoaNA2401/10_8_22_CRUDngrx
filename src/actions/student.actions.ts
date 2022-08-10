import { Student } from './../models/student.model';
import { createAction, props } from '@ngrx/store';
import { Todo } from './../models/student.model';
///////////Add Students
export const addStudent = createAction(
  '[Students] Add Student',
  props<{ Student: Student }>()
);
export const addStudentFails = createAction(
  '[Students] Add Student Fails',
  props<{ error: string }>()
);
export const addStudentSuccess = createAction('[Students] Add Student Success');

/////Get Students
export const getStudents = createAction('[Students] Get Student');
export const getStudentSuccess = createAction(
  '[Students] Get Student Success',
  props<{ Student: Student[] }>()
);
export const getStudentFails = createAction(
  '[Students] Get Student Fails',
  props<{ error: string }>()
);

//////////update Student
export const updateStudent = createAction(
  '[Students] Update Student',
  props<{ Student: Student }>()
);
export const updateStudentFails = createAction(
  '[Students] Update Student Fails',
  props<{ error: string }>()
);
export const updateStudentSuccess = createAction(
  '[Students] Update Student Success'
);

/////Delete
export const deleteStudent = createAction(
  '[Students] Delete Student',
  props<{ id: string }>()
);
export const deleteStudentFails = createAction(
  '[Students] Delete Student Fails',
  props<{ error: string }>()
);
export const deleteStudentSuccess = createAction(
  '[Students] Delete Student Success'
);



///////////Add Todo
export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ Todo: Todo }>()
);
export const addTodotFails = createAction(
  '[Todo] Add Todo Fails',
  props<{ error: string }>()
);
export const addTodoSuccess = createAction('[Students] Add Student Success');

/////Get Todo
export const getTodo = createAction('[Students] Get Student');
export const getTodoSuccess = createAction(
  '[Todo] Get Todo Success',
  props<{ Todo: Todo[] }>()
);
export const getTodoFails = createAction(
  '[Todo] Get Todo Fails',
  props<{ error: string }>()
);

//////////Update Todo
export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ Todo: Todo }>()
);
export const updateTodoFails = createAction(
  '[Todo] Update Todo Fails',
  props<{ error: string }>()
);
export const updateTodoSuccess = createAction(
  '[Todo] Update Todo Success'
);
/////Delete Todo
export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ id: string }>()
);
export const deleteTodoFails = createAction(
  '[Todo] Delete Todo Fails',
  props<{ error: string }>()
);
export const deleteTodoSuccess = createAction(
  '[Todo] Delete Todo Success'
);
