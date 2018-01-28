import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NotificationService } from '../notification.service';
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
  notificationCount = Number;
  constructor(
    public _authService: AuthenticationService,
    private router: Router,
    public _notification: NotificationService
  ) { }

  ngOnInit() {
    this.jqueryInit();
    this.isLoggedIn();
    if (this.loggedIn) {
      this.userNotificationsCount(this._authService.currentUser()._id)
    }   
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

 userNotificationsCount(id) {
  this._notification.getUserNotificationsCount(id)
  .subscribe((res) => {
    if (res.success) {
      this.notificationCount = res.count;
    }
  }, err => {
    console.log('Error getting notification');
  })
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
