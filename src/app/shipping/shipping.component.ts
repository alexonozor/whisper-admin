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
  updateShippingForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  shippingMethods: Array<any>;
  editParams: Object = {};

  constructor(
    public _contraceptiveService: ContraceptiveService,
    public fb: FormBuilder) {
    this.createShipping();
    this.updateShipping();
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

  openEditModal(data) {
    this.editParams = data;
  }

 createShipping() {
    this.createShippingForm = this.fb.group({
      name: ['', Validators.required ],
      shippingFee: ['', Validators.required],
      shppingCode: ['', Validators.required]
    });
  }

  updateShipping() {
    this.updateShippingForm = this.fb.group({
      name: ['', Validators.required ],
      shippingFee: ['', Validators.required],
      shppingCode: ['', Validators.required]
    });
  }

  createShippingMethod() {
    this.submitted = true;
    this._contraceptiveService.createShippingMethod(this.createShippingForm.value)
    .subscribe((res) => {
      if (res.success) {
        this.submitted = false;
        this.getShippingMethods();
        this.createShippingForm.reset();
        this.closeModal();
      } else {

      }
    })
  }

  updateShippingMethods(id) {
    this.submitted = true;
    this._contraceptiveService.updateShippingMethod(id, this.updateShippingForm.value)
    .subscribe((res) => {
      if (res.success) {
        this.submitted = false;
        this.getShippingMethods();
        this.updateShippingForm.reset();
        this.closeModal();
      } else {

      }
    }, (err) => {
      console.log('error ', err);
    })
  }

  getShippingMethods() {
    this.loading = true;
    this._contraceptiveService.getShippingMethods()
    .subscribe((res) => {
      if (res.success) {
        this.loading = false;
        this.shippingMethods = res.shippingMethod;
      } else {
        this.loading = false;
      }
    }, (err) => {
      console.log('error while getting shipping methods ', err);
    })
  }

  deleteShippingMethod(id, index) {
    let deleteContraceptive = confirm("Are you sure?");
    if (deleteContraceptive) {
      this.shippingMethods.splice(index, 1)
      this._contraceptiveService.deleteShippingMethod(id)
      .subscribe((res) => {
        if (res.success) {
          this.getShippingMethods();
        } else {
          // caught errors
        }
      }, err => {
        // caught errors
      })
    }
  }
}
