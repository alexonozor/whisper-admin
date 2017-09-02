import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

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

}
