import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file';
import { ApiService } from '../../services/api.service';
declare function upload(file): any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  // fileItem: FileItem = new FileItem();
  file: any;
  apiService: ApiService;
  constructor() { }

  ngOnInit() {
  }
  addFileToFirebase() {
    var fileToUpload = document.getElementById('file');
    upload(fileToUpload);
  }
}
