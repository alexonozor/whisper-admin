import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { AuthenticationService } from '../../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {

  signupForm: FormGroup;
  submited: boolean = false;
  user = {};
  private sub: any; 
  private id: any;
  public loading: boolean = false;


  constructor(
    private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    public _userService: UserService,
    public _authService: AuthenticationService

  ) {
    this.createForm();
  }


  birthDateActions = new EventEmitter<string|MaterializeAction>();
  

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

  openDatePicker() {
        //actions are open or close
        this.birthDateActions.emit({action: "pickadate", params: ["open"]});
    }

  getAddress(event) {
    this.signupForm.patchValue({contact: {lng: event.geometry.location.lng(),  lat: event.geometry.location.lat()}})
  }

  createUser() {
    this.submited = true;
    this._userService.save(this.signupForm.value)
    .subscribe((res) => {
      if (res.success) {
        this.submited = false;
        this.route.navigate(['/dashboard/users', this.id]);
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
