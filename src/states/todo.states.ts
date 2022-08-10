import { Todo } from './../models/student.model';
export interface TodoState {
  todos: Todo[];
  error: string;
  //isSuccess: boolean;
  isLoading: boolean;
}
