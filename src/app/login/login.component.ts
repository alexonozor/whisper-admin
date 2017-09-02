import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router'
import { AuthenticationService } from '../authentication.service';
import { MaterializeAction, MaterializeDirective } from 'angular2-materialize';
declare var Materialize: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submited: boolean = false;
  globalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public _authService: AuthenticationService
  ) {
      this.createForm();
    }

  ngOnInit() {

  }


  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser() {
    this.submited = true;
    this._authService.login(this.loginForm.value)
    .subscribe((res) => {
      if (res.success) {
        this.submited = false;
        this._authService.saveToken('token', res.token)
        this.router.navigate(['dashboard']);
      } else {
        Materialize.toast(res.message, 2000);
        this.submited = false;
      }
    }, err => {
      // caught error
    })
  }
}
