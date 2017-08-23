import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private sub: any; 
  private id: any;
  public loading: boolean = false;
  user = {};
  constructor(
    public router: ActivatedRoute, 
    public _userService: UserService
  ) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.id = params['id'];
      this.getUser(this.id);
    });
  }

  getUser(id) {
    this.loading = true;
    this._userService.getUser(id)
    .subscribe((res) => {
      this.loading = false;
      if (res.success) {
        this.user = res.user;
      }
    }, err => {
      // caugh err 
    })
  }
}
