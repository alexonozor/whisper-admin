import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  loading: Boolean = false;
  allUsers: Array<any> = [];


  constructor(public _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.initailizerJquery();
  }

  getUsers() {
    this.loading = true;
    this._userService.getUsers()
    .subscribe((res) => {
      if (res.success) {
        this.loading = false;
        this.allUsers = res.users;
      }
    }, err => {
        // caught error 
    })
  }

  initailizerJquery() {
    jQuery(document).ready(function () {
      jQuery('.button').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
      });
    });
  }


}
