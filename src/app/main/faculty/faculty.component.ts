import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../services/config.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss'],
  // animations: [routerTransition()],
  // host: { '[@routerTransition': ''}

})
export class FacultyComponent implements OnInit {

  active: string;
  Faculties=[{SrNo:"1",Name:"DR. HIREN B. PATEL",Department:"Computer",Email:"hod_ce@ldrp.ac.in",Desk:"1st Floor 2nd Shift"},
    {SrNo:"2",Name:"DR. MEHUL BAROT",Department:"Computer",Email:"mehul_ce@ldrp.ac.in",Desk:"Lab L"},
    {SrNo:"3",Name:"ASHISH PATEL",Department:"Computer",Email:"ashish_ce@ldrp.ac.in",Desk:"Lab A1"},
    {SrNo:"4",Name:"JAYANA CHANDULAL KANERIYA",Department:"Computer",Email:"jayana_ce@ldrp.ac.in",Desk:"Lab M"},
    {SrNo:"5",Name:"RIDDHI D PATEL",Department:"Computer",Email:"riddhi_ce@ldrp.ac.in",Desk:"Lab B2"},
    {SrNo:"6",Name:"BARKHA BHAVSAR",Department:"Computer",Email:"barkha_ce@ldrp.ac.in",Desk:"Lab K"},
    {SrNo:"7",Name:"PROF. (DR.) DIVYANG H. PANDYA",Department:"Mechanical",Email:"hod_me@ldrp.ac.in",Desk:"Testing Lab"},
    {SrNo:"8",Name:"PROF.(DR.). TUSHAR M. PATEL",Department:"Mechanical",Email:"tushar_me@ldrp.ac.in",Desk:"Workshop Building"},
    {SrNo:"9",Name:"VIDYA NAIR",Department:"Mechanical",Email:"vidya_me@ldrp.ac.in",Desk:"1st Floor"},
    {SrNo:"10",Name:"VIJAY V PATEL",Department:"Mechanical",Email:"vijay_me@ldrp.ac.in",Desk:"Lab J"},
    {SrNo:"11",Name:"KRUNAL PATEL",Department:"Mechanical",Email:"krunal_me@ldrp.ac.in",Desk:"Testing Lab"},
    {SrNo:"12",Name:"MS. ANKITA J. PARIKH",Department:"Civil",Email:"hod_civil@ldrp.ac.in",Desk:"Lab 1"},
    {SrNo:"13",Name:"MS. KINNARI R. MISHRA",Department:"Civil",Email:"kinnari_civil@ldrp.ac.in",Desk:"Lab 5"},
    {SrNo:"14",Name:"MR. JITENDRASINH D. RAOL",Department:"Civil",Email:"jitendrasinh_civil@ldrp.ac.in",Desk:"Lab 4"},
    {SrNo:"15",Name:"MR. PARTH D. PATEL",Department:"Civil",Email:"parth_civil@ldrp.ac.in",Desk:"Lab 6"},];

  constructor( private router: Router) { 
    this.router.events.subscribe((val) => {
      this.routeChanged(val);
    })
  }

  ngOnInit() {
  }

  routeChanged(val){
    this.active = val.url;
  }

}
