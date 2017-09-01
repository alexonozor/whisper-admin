import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
declare var jQuery: any;
declare var Materialize: any;

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private sub: any; 
  private id: any;
  public loading: boolean = false;
  user: any = {};
  user_contact : any = {
    email: '',
    phone: '',
    address: ''
  }
  constructor(
    public router: ActivatedRoute, 
    public _userService: UserService
  ) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.id = params['id'];
      this.getUser(this.id);
    });
    this.initailizerJquery();
  }

  getUser(id) {
    this.loading = true;
    this._userService.getUser(id)
    .subscribe((res) => {
      this.loading = false;
      if (res.success) {
        this.user = res.user;
        this.user_contact = {
          'email' : this.user.contact.email,
          'phone' : this.user.contact.tel,
          'address' : this.user.contact.address
        }
      }
    }, err => {
      // caugh err
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
