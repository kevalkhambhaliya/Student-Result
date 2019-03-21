import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { UpdatesComponent } from './main/updates/updates.component';
import { ResultComponent } from './main/result/result.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { FacultyComponent } from './main/faculty/faculty.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { ConfigService } from './services/config.service';
import { FirebaseServiceService } from './services/firebase-service.service';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path:'',
  //   redirectTo: '/home',
  //   pathMatch:'full'
  // },
  {
    path:'updates',
    component: UpdatesComponent
  },
  {
    path:'result',
    component: ResultComponent
  },
  {
    path:'faculty',
    component: FacultyComponent
  },
  {
    path:'**',
    redirectTo:''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdatesComponent,
    ResultComponent,
    SidebarComponent,
    FacultyComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    MatSelectModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebase),
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [ConfigService,FirebaseServiceService],
  bootstrap: [AppComponent]})
export class AppModule { }
