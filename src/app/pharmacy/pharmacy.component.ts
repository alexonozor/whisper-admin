import { Component, OnInit, EventEmitter } from '@angular/core';
import { PhamaciesService } from '.././phamacies.service';
import { UserService } from '.././user.service';
import { AuthenticationService } from '.././authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';
declare var Materialize: any;

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();
  pharmacyForm: FormGroup
  pharmacies: Array<any> = [];
  loading: Boolean = false;
  submitted: Boolean = false;
  

  constructor(
    private fb: FormBuilder,
    private _phamaciesService: PhamaciesService,
    private _userService: UserService,
    private _authenticationService: AuthenticationService
  ) {
    this.createForm()
   }

  ngOnInit() {
    this.getPhamcies();
  }



  openModal() {
    this.modalActions.emit({ action:"modal", params:['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
  }

  getPhamcies() {
    this.loading = true;
    this._phamaciesService.getPhamrcies()
    .subscribe((resp) => {
      this.loading = false;
      this.pharmacies = resp.pharmacies;
    }, err => {
      this.loading = false;
    })
  }

  getAddress(event) {
    this.pharmacyForm.patchValue({ longitude: event.geometry.location.lng(),  latitude: event.geometry.location.lat() , contact: {address: event.formatted_address}})
  }


  createForm() {
    this.pharmacyForm = this.fb.group({
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

  createPharmacyForm() {
    this.submitted = true
    this._phamaciesService.createPharmacies(this.pharmacyForm.value)
    .subscribe((resp) => {
       if (resp.success) {
         Materialize.toast('Phamarcy is been added', 2000);
         this.getPhamcies()
         this.submitted = false;
       } else {
         this.submitted = false;
         Materialize.toast(resp.message, 2000);
       }
    }, err => {
      this.submitted = false;
      Materialize.toast('Inernal server error', 2000);
    })
  }

}
