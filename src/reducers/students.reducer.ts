import { createReducer, on } from '@ngrx/store';
import { StudentState } from './../states/student.states';
import * as StudentActions from '../actions/student.actions';
const initialState: StudentState = {
  students: [],
  error: '',
  //isSuccess: true,
  isLoading: false,
};

export const studentReducer = createReducer(
  initialState,
  //////////////Add Students
  on(StudentActions.addStudent, (state) => {
    return { ...state, isLoading: true };
  }),
  on(StudentActions.addStudentSuccess, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(StudentActions.addStudentFails, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
    isSuccess: true,
  })),
  /////////////GetData
  on(StudentActions.getStudents, (state) => ({
    ...state,
    isLoading: true,
    error: '',
  })),
  on(StudentActions.getStudentSuccess, (state, { Student }) => ({
    ...state,
    isLoading: false,
    error: '',
    students: Student,
  })),
  on(StudentActions.getStudentFails, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
    // isSuccess: true,
  })),

  //////////Update
  on(StudentActions.updateStudent, (state) => {
    return { ...state, isLoading: true };
  }),
  on(StudentActions.updateStudentSuccess, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(StudentActions.updateStudentFails, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
    isSuccess: true,
  })),

  /////////////Delete
  on(StudentActions.deleteStudent, (state) => {
    return { ...state, isLoading: true };
  }),
  on(StudentActions.deleteStudentSuccess, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(StudentActions.deleteStudentFails, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
    isSuccess: true,
  })),


);
