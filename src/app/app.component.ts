import { TodoState } from 'src/states/todo.states';
import { StudentState } from './../states/student.states';
import { Todo } from './../models/student.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as StudentActions from '../actions/student.actions';
import * as TodoActions from '../actions/student.actions';
import { Student } from 'src/models/student.model';

import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [
        style({ transform: 'translateX(300px)' }),
        animate(
          200,
          keyframes([
            style({ transform: 'translateX(300px)' }),
            style({ transform: 'translateX(0)' }),
          ])
        ),
      ]),

      transition('*=>void', [
        style({ transform: 'translateX(0px)' }),
        animate(
          100,
          keyframes([
            style({ transform: 'translateX(0px)' }),
            style({ transform: 'translateX(300px)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  studentState$ = this.store.select('student');
  student$ = this.store.select((state) => state.student.students);
  studentCurr: Student = {
    id: '',
    name: '',
    email: '',
    phone: {
      code: '',
      number: '',
    },
  };
  todoState$ = this.store.select('todo');
  todo$ = this.store.select((state) => state.todo.todos);


  constructor(
    private store: Store<{ student: StudentState; todo: TodoState }>,
    //public formBuilder: FormBuilder
  ) {
    // this.form = this.formBuilder.group({
    //   id: [`${Date.now().toString()}`],
    //   description: [''],
    // });
  }
  todoCurr: Todo = {
    id: Date.now().toString(),
    description: '',
  };

  ngOnInit(): void {
    this.studentState$.subscribe((state) => {
      // this.res = state
      console.log(state);
    });
    let x = this.store.dispatch(StudentActions.getStudents());
    console.log(x);
    let y = this.store.dispatch(StudentActions.getStudents());
  }

  addStudent() {

    this.store.dispatch(
      StudentActions.addStudent({ Student: this.studentCurr })
    );
  }
  updateStudent() {
    let y = this.store.dispatch(
      StudentActions.updateStudent({ Student: this.studentCurr })
    );
    console.log(y);
    window.location.reload();
  }
  delete(id: string): void {
    this.store.dispatch(StudentActions.deleteStudent({ id }));
  }

  ///TODO
  // resetTheForm(): void {
  //   this.form.reset();
  // }
  addTodo() {
    // let newForm = {
    //   ...this.form.value,
    // }
    this.store.dispatch(TodoActions.addTodo({ Todo: this.todoCurr }));
    //this.resetTheForm();
    window.location.reload();
  }
  updateTodo() {
    let z = this.store.dispatch(
      TodoActions.updateTodo({ Todo: this.todoCurr })
    );
    console.log(z);
    window.location.reload();
  }
  deleteTodo(id: string): void {
    console.log(id);
    this.store.dispatch(TodoActions.deleteTodo({ id: id }));

  }
}
