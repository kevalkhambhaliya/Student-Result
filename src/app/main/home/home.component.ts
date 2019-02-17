import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [routerTransition()],
  // host: { '[@routerTransition': ''}

})
export class HomeComponent implements OnInit {

  active: string;
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
