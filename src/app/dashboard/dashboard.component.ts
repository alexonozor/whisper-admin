import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Route, Router } from '@angular/router';

declare var Materialize: any;
declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(
    public _authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.jqueryInit();
    this.isLoggedIn();
  }

  isLoggedIn() {
    if ( JSON.parse(localStorage.getItem('user')) != null || undefined ) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
      this.router.navigate(['']);
    }
  }

  logout() {
    this._authService.logout();
    this.router.navigate(['']);
  }

  jqueryInit() {
    jQuery('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
    });
  }
}
