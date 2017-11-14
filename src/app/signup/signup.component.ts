import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Route, Router } from '@angular/router';
declare var Materialize: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submited: boolean = false;
  isRegistering: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public _userService: UserService,
    public _authService: AuthenticationService
  ) {
    this.createForm();
   }

  ngOnInit() {

  }

  createForm() {
    this.signupForm  = this.fb.group({
      'accountType': ['Member', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'password': ['', Validators.required],
      'email': ['', Validators.required],
    });
  }

  createUser() {
    this.submited = true;
    this.isRegistering = true;
    this._userService.save(this.signupForm.value)
    .subscribe((res) => {
      if (res.success) {
        this.submited = false;
        this.isRegistering = false;
        this._authService.saveToken('token', res.token);
        this.router.navigate(['dashboard']);
        Materialize.toast(res.message, 2000);
      } else {
        this.isRegistering = false;
        this.submited = false;
        Materialize.toast(res.message, 2000);
      }
    }, err => {
      // caught error
      this.submited = false;
    });
  }

  gotoSignin() {
    this.router.navigate(['']);
  }
}
