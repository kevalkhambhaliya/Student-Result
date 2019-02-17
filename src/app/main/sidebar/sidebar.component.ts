import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../services/config.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  // animations: [routerTransition()],
  // host:{'[@routerTransition]' : ''}
})
export class SidebarComponent implements OnInit {

  active:string;
  constructor(private router: Router, private toastr: ToastrService) {
     this.router.events.subscribe((val) => {
    this.routeChanged(val);
  });}

  ngOnInit() {
  }
  routeChanged(val){
    this.active = val.url;
  }

}
