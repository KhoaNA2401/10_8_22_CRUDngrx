import { Student } from './../../models/student.model';
import { addStudent } from './../../actions/student.actions';
import { Injectable } from '@angular/core';
import {
  collectionSnapshots,
  deleteDoc,
  Firestore,
} from '@angular/fire/firestore';
import { doc, setDoc, getDocs, collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class StudentsServicesService {
  constructor(private db: Firestore) {}

  addStudent(student: Student) {
    if (!student.id) {
      throw new Error('Students is required');
    }
    return setDoc(doc(this.db, 'students/' + student.id), student);
  }

  getStudent() {
    return collectionSnapshots(collection(this.db, 'students'));
  }

  update(student: Student) {
    return setDoc(doc(this.db, 'students/' + student.id), student);
  }
  delete(id: string) {
    return deleteDoc(doc(this.db, 'students/' + id));
  }
}
