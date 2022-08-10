import { Student } from './../models/student.model';
import { createAction, props } from "@ngrx/store";

///////////Add Students
export const addStudent = createAction(
  '[Students] Add Student',
  props<{Student: Student}>()
);
export const addStudentFails = createAction(
  '[Students] Add Student Fails',
  props<{ error: string;  }>()
);
export const addStudentSuccess = createAction(
  '[Students] Add Student Success',
);

/////Get Students
export const getStudents = createAction(
  '[Students] Get Student',
);
export const getStudentSuccess = createAction(
  '[Students] Get Student Success',
  props<{Student: Student[]}>()
);
export const getStudentFails = createAction(
  '[Students] Get Student Fails',
  props<{ error: string;  }>()
);

//////////update Student
export const updateStudent = createAction(
  '[Students] Update Student',
  props<{Student: Student}>()
);
export const updateStudentFails = createAction(
  '[Students] Update Student Fails',
  props<{ error: string;  }>()
);
export const updateStudentSuccess = createAction(
  '[Students] Update Student Success',
);


/////Delete
export const deleteStudent = createAction(
  '[Students] Delete Student',
  props<{ id: string }>()
);
export const deleteStudentFails = createAction(
  '[Students] Delete Student Fails',
  props<{ error: string;  }>()
);
export const deleteStudentSuccess = createAction(
  '[Students] Delete Student Success',
);
