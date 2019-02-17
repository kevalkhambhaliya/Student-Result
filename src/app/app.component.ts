import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-result';
  constructor(db: AngularFireDatabase){
    db.list('/courses').valueChanges().subscribe(res => console.log(res))
     }
   ngOnInit(){
     
   }
}
