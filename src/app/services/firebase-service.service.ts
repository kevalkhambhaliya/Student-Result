import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Courses } from '../models/courses';
import { Year } from '../models/year';


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  years: Year[] = [];
  enrollmentNumber: any[] = [];
  resultDetails:any[]=[];
  studentDetails:any []=[];
  coursesCollection: AngularFirestoreCollection<Courses>;
  courses: any[] = [];
  constructor(public firestore: AngularFirestore, private firedb: AngularFireDatabase) {
    /* firedb.list('/courses').valueChanges().subscribe(res => {
      res.forEach(item => this.courses.push(item))
    });
    firedb.list('/year').valueChanges().subscribe(res => {
      res.forEach(item => {
        this.years.push(
           item
        );
      })
    }); */
   /*  firedb.list('/EnrollmentNumber').valueChanges().subscribe(res => {
      res.forEach(item => {
        this.enrollmentNumber.push(item);
      })
    }); */
    firedb.list('/ResultDetails').valueChanges().subscribe(res =>{
    
      this.resultDetails = res;
    
    });
    firedb.list('/StudentDetails').valueChanges().subscribe(res =>{
    
      this.studentDetails = res;
    
    });
    
  }

  getCourses() {
    return this.courses;
  }
  getYears() {
    return this.years;
  }
  getEnrollment(number: any) {
    let en:string;
    this.enrollmentNumber.forEach(item => {
      if (item === number) {
        en=item;
      }
    });
    return en;
  }
  getresultDetails(){
  return this.resultDetails;
  }
  getStudentDetails(){
    return this.studentDetails;
  }
}
