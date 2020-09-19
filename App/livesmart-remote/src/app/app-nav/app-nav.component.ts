import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit {
  router='dashboard/grid-view';
  constructor(private _router:Router) {
    this._router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
        const currentRoute = (eventUrl ||[]).join('');
        this.router=currentRoute;
      }
    })
   }

  ngOnInit(): void {
  }

}
