import { Component, OnInit, EventEmitter } from '@angular/core';
import { ContraceptiveService } from '../contraceptive.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormArray,FormArrayName, FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Route, Router } from '@angular/router'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();
  createShippingForm: FormGroup;
  submit: boolean = false;
  loading: boolean = false;
  shippingMethods: Array<any>;

  constructor(
    public _contraceptiveService: ContraceptiveService,
    public fb: FormBuilder) {
    this.shippingForm();
  }

  ngOnInit() {
    this.getShippingMethods();
  }

  openModal() {
    this.modalActions.emit({ action:"modal", params:['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
  }

  shippingForm() {
    this.createShippingForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required]
    });
  }

  createShippingMethod() {
    console.log(this.createShippingForm.value);
    this.submit = true;
    this._contraceptiveService.createShippingMethod(this.createShippingForm.value)
    .subscribe((res) => {
      if (res.success) {
        this.submit = false;
        this.getShippingMethods();
        this.createShippingForm.reset();
        this.closeModal();
      } else {

      }
    })
  }

  getShippingMethods() {
    this.loading = true;
    this._contraceptiveService.getShippingMethods()
    .subscribe((res) => {
      console.log('get shipping methods response ', res);
      if (res.success) {
        this.loading = false;
        this.shippingMethods = res.shippingMethod;
      } else {
        this.loading = false;
        console.log('An error occured while getting shipping methods');
      }
    }, err => {
      // caught error
    })
  }
}
