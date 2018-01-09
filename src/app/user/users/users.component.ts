import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  loading: Boolean = false;
  users: Array<any> = [];

  constructor(public _userService: UserService) { }

  ngOnInit() {
    this.viewUsers();
  }

  viewUsers(userType = '') {
    this.loading = true;
    this._userService.getUsers(userType)
    .subscribe((res) => {
      if (res.success) {
        this.loading = false;
        this.users = res.users;
      }
    }, err => {
        // caught error 
    })
  }


}
