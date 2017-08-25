import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { AuthenticationService } from '../../authentication.service';
import { Route, Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  signupForm: FormGroup;
  submited: boolean = false;
 
  
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

  
  birthDateActions = new EventEmitter<string|MaterializeAction>();

   createForm() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      userName: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      accountType: ['', Validators.required],
      password: ['', Validators.required],
      verified: 'true',
      admin: ['false', Validators.required],

        contact: this.fb.group({
          email: ['', Validators.required],
          tel: '',
          city: ['', Validators.required],
          address: ['', Validators.required],
          lng: ['', Validators.required],
          lat: ['', Validators.required]
        })
    });
  }

 resetForm() {
   let confirmReset = confirm('Are you sure you want to rest form?');
   if (confirmReset) {
     this.signupForm.reset();
   }
 }

  openDatePicker() {
      //actions are open or close
      this.birthDateActions.emit({action: "pickadate", params: ["open"]});
  }

  getAddress(event) {
    this.signupForm.patchValue({contact: { lng: event.geometry.location.lng(),  lat: event.geometry.location.lat(), address: event.formatted_address}})
  }

  createUser() {
    this.submited = true;
    this._userService.save(this.signupForm.value)
    .subscribe((res) => {
      if (res.success) {
        this.submited = false;
        this.router.navigate(['/dashboard/users', res.user._id]);
      } else {
        
      }
    }, err => {
      // caught error
    })
  }

  changeFormStatus(event) {
    let content = this.submited;
    event.textContent = content?  "Submiting..." : "Submit"
  }

}
