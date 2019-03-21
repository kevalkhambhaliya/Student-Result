import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { ResultComponent } from './main/result/result.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { ConfigService } from './services/config.service';
import { FirebaseServiceService } from './services/firebase-service.service';
import { AdminComponent } from './main/admin/admin.component';

const routes: Routes = [
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
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultComponent,
    SidebarComponent,
    HighlightDirective,
    AdminComponent
  ],
  imports: [
    BrowserModule,
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
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [ConfigService, FirebaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
