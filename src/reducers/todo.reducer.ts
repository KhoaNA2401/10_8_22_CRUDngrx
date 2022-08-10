import { createReducer, on } from '@ngrx/store';
import { StudentState } from './../states/student.states';
import * as TodoActions from '../actions/student.actions';
import { TodoState } from 'src/states/todo.states';
const initialState: TodoState = {
  todos: [],
  error: '',
  //isSuccess: true,
  isLoading: false,
};
export const todoReducer = createReducer(
  initialState,
////TODO
//////////////Add TODO
on(TodoActions.addTodo, (state) => {
  return { ...state, isLoading: true };
}),
  on(TodoActions.addTodoSuccess, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(TodoActions.addTodotFails, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
    isSuccess: true,
  })),
  /////////////GetData
  on(TodoActions.getTodo, (state) => ({
    ...state,
    isLoading: true,
    error: '',
  })),
  on(TodoActions.getTodoSuccess, (state, { Todo }) => ({
    ...state,
    isLoading: false,
    error: '',
    todos: Todo,
  })),
  on(TodoActions.getTodoFails, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
    // isSuccess: true,
  })),
  //////////Update
  on(TodoActions.updateTodo, (state) => {
    return { ...state, isLoading: true };
  }),
  on(TodoActions.updateTodoSuccess, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(TodoActions.updateTodoFails, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
    isSuccess: true,
  })),
  /////////////Delete
  on(TodoActions.deleteTodo, (state) => {
    return { ...state, isLoading: true };
  }),
  on(TodoActions.deleteTodoSuccess, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(TodoActions.deleteTodoFails, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
    isSuccess: true,
  })),
);

