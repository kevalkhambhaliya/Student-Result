import { Injectable } from '@angular/core';
import { FileReaderEventTarget, FileReaderEvent } from '../models/filereadereventtarget';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // parseExcel: any;

  constructor() { }


  addFileToFirebase(file) {
    /*  this.parseExcel = function (file) {
       var reader = new FileReader();
 
       reader.onload = function (e) {
         var data = e.target.result();
         var workbook = XLSX.read(data, {
           type: 'binary'
         });
 
         workbook.SheetNames.forEach(function (sheetName) {
           // Here is your object
           var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
           var json_object = JSON.stringify(XL_row_object);
           console.log(json_object);
 
         })
 
       };
 
       reader.onerror = function (ex) {
         console.log(ex);
       };
 
       reader.readAsBinaryString(file);
     }; */
    // var fileUpload = document.getElementById("fileUpload");

    //Validate whether File is valid Excel file.
  }

}
