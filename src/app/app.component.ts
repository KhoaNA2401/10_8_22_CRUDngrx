import { StudentState } from './../states/student.states';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as StudentActions from '../actions/student.actions';
import { Student } from 'src/models/student.model';
import { deleteDoc } from '@firebase/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

  constructor(private store: Store<{ student: StudentState }>) {}
  ngOnInit(): void {
    this.studentState$.subscribe(state =>{
      // this.res = state
      console.log(state);
    });
    let x = this.store.dispatch(StudentActions.getStudents());
    console.log(x);
  }

  addStudent() {
    this.store.dispatch(StudentActions.addStudent({Student: this.studentCurr}));
  }
  updateStudent(){
   let y = this.store.dispatch(StudentActions.updateStudent({Student: this.studentCurr}));
    console.log(y)
    window.location.reload();
  }
  delete(id: string): void {
    this.store.dispatch(StudentActions.deleteStudent({id}));
  }
}
