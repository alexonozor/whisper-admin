import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { AuthenticationService } from '../../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  loading: Boolean = false;
  users: Array<any> = [];

  constructor(
    public _userService: UserService,
    public auth: AuthenticationService,
    public route: Router
  ) { }

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

  contactUser(user) {
    let currentUser = this.auth.currentUser();
    this._userService.checkIfThreadIsAvailable(user._id, currentUser._id)
    .subscribe((res) => {
      if (res.success) {
        if (res.hasThread) {
          this.openThread(res._id)
        } else {
          this.createTread(user, currentUser);
        }
      }
    }, err => {

    })
  }

  deleteUserParmanetly(user) {
    let deleteUser = confirm('Are you sure you want to permanetly delete this user?');
    if (deleteUser) {
      this._userService.permanetlyDeleteUsers(user._id)
      .subscribe((resp) => {
        if (resp.success) {
          this.viewUsers()
        }
      }, err => {
        alert('server error');
      });
    }
  }

  deleteUser(event, user) {
      this._userService.update({ deleted: event.target.checked }, user._id)
      .subscribe((resp) => {
        if (resp.success) {}
      }, err => {
        alert('server error');
      });
  }

  banUser(event, user) {
    this._userService.update({ ban: event.target.checked }, user._id)
    .subscribe((resp) => {
      if (resp.success) {}
    }, err => {
      alert('server error');
    });
  }

  updateAccountType(event, user) {
    this._userService.update({ accountType: event.target.value }, user._id)
    .subscribe((resp) => {
      if (resp.success) {}
    }, err => {
      alert('server error');
    });
  }

  makeAdmin(event, user) {
    this._userService.update({ admin: event.target.checked }, user._id)
    .subscribe((resp) => {
      if (resp.success) {}
    }, err => {
      alert('server error');
    });
  }
  

  openThread(id) {
    this.route.navigate(['dashboard/contact-user', id])
  }

  createTread(reciepaint, currentUser) {
    this._userService.createMessageThread(reciepaint, currentUser)
    .subscribe((res) => {
      if (res.success) {
        this.openThread(res.thread._id);
      } else {
        alert('Unable to create thread')
      }
    }, err => {
      alert(err);
    })
  }


}
