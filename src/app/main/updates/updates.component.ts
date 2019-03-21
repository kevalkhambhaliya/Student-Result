import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../services/config.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss'],
  // animations: [routerTransition()],
  // host: { '[@routerTransition': ''}

})
export class UpdatesComponent implements OnInit {

  active:string;
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
