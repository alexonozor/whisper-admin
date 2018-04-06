import { Component, OnInit, EventEmitter } from '@angular/core';
import { HospitalService } from '.././hospital.service';
import { UserService } from '.././user.service';
import { AuthenticationService } from '.././authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';
declare var Materialize: any;

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();
  hospitalForm: FormGroup;
  hospitals: Array<any> = [];
  loading: Boolean = false;
  submitted: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private _hospitalsService: HospitalService,
    private _userService: UserService,
    private _authenticationService: AuthenticationService
  ) {
    this.createForm();
   }

  ngOnInit() {
    this.getHospitals();
  }



  openModal() {
    this.modalActions.emit({ action:"modal", params:['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
  }

  getHospitals() {
    this.loading = true;
    this._hospitalsService.getHospitals()
    .subscribe((resp) => {
      this.loading = false;
      this.hospitals = resp.hospitals;
    }, err => {
      this.loading = false;
    })
  }

  getAddress(event) {
    this.hospitalForm.patchValue({
       longitude: event.geometry.location.lng(),
       latitude: event.geometry.location.lat(),
       contact: {address: event.formatted_address}})
  }


  createForm() {
    this.hospitalForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ],
      longitude: ['', Validators.required],
      latitude: ['', Validators.required],
      location: '',
      verified: 'true',
      verifiedBy: '',
      registeredBy: [this._authenticationService.currentUser()._id],
      employees: [''],
      contact: this.fb.group({
        email: ['', Validators.required],
        tel: '',
        city: '',
        address: '',
        website: '',
        officeNumber: ''
      })
    });
  }

  createhospitalForm() {
    this.submitted = true;
    this._hospitalsService.createHospital(this.hospitalForm.value)
    .subscribe((resp) => {
       if (resp.success) {
         Materialize.toast('Phamarcy is been added', 2000);
         this.getHospitals();
         this.submitted = false;
       } else {
         this.submitted = false;
         Materialize.toast(resp.message, 2000);
       }
    }, err => {
      this.submitted = false;
      Materialize.toast('Inernal server error', 2000);
    });
  }

};
