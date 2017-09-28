import { Component, OnInit, EventEmitter } from '@angular/core';
import { ContraceptiveService } from '../contraceptive.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormArray,FormArrayName, FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Route, Router } from '@angular/router'

@Component({
  selector: 'app-contraceptive',
  templateUrl: './contraceptive.component.html',
  styleUrls: ['./contraceptive.component.css']
})

export class ContraceptiveComponent implements OnInit {
  loading: boolean = false;
  submit: boolean = false;
  start_convo: boolean = false;
  contraceptives: Array<any>;
  responses: Array<any>;
  modalActions = new EventEmitter<string|MaterializeAction>();
  createContraceptiveForm: FormGroup;
  updateContraceptiveForm: FormGroup;
  editParams: Object = {};
  shippingMethods:  Array<any>;
  shipping_meths : Array<any>;

  constructor(
    public _contraceptiveService: ContraceptiveService,
    public fb: FormBuilder
  ) {
    this.createForm();
    this.updateForm();
   }

  ngOnInit() {
    this.getContraceptives();
    this.getShippingMethods();
  }

  createForm() {
    this.createContraceptiveForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ],
      price: ['', Validators.required],
      // add shipping methods
      minimumShippingQuantity: ['', Validators.required],
      maximumShippingQuantity: ['', Validators.required],
      appointment: ['', Validators.required],
      shippingMethods:  ['', Validators.required]
    });
  }

  get shippingMethod(): FormArray { return this.createContraceptiveForm.get('shippingMethods') as FormArray; }

  addShippingMethod() {
    this.shippingMethod.push(new FormControl());
  }

  startConvo() {
    this.start_convo = true;
  }

  updateForm() {
    this.updateContraceptiveForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ],
      price: ['', Validators.required],
      minimumShippingQuantity: ['', Validators.required],
      maximumShippingQuantity: ['', Validators.required],
      appointment: ['', Validators.required],
      shippingMethods:  []
    });
  }

  openModal() {
    this.modalActions.emit({ action:"modal", params:['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
  }

  openEditModal(data) {
    data.shippingMethods = ['delivery','pickup'];
    this.editParams = data;
    this.shipping_meths = data.shippingMethods;
    this.modalActions.emit({ action:"modal", params:['open'] });
  }

  closeEditModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
  }

  getContraceptives() {
    this.loading = true;
    this._contraceptiveService.get()
    .subscribe((res) => {
      if (res.success) {
        this.loading = false;
        this.contraceptives = res.contraceptives
      } else {

      }
    }, err => {
      // caught error
    })
  }

  createContraceptive() {
    this.submit = true;
    this._contraceptiveService.save(this.createContraceptiveForm.value)
    .subscribe((res) => {
      if (res.success) {
        this.submit = false;
        this.getContraceptives();
        this.createContraceptiveForm.reset();
        this.closeModal();
      } else {

      }
    })
  }

  updateContraceptive(id) {
    this.submit = true;
    this._contraceptiveService.update(this.updateContraceptiveForm.value, id)
    .subscribe((res) => {
      if (res.success) {
        this.submit = false;
        this.getContraceptives();
        this.updateContraceptiveForm.reset();
        this.closeEditModal();
      } else {

      }
    })
  }

  getAssessmentResponses() {
    this.loading = true;
    this._contraceptiveService.getAssementResponses()
    .subscribe((res) => {
      if (res.success) {
        this.loading = false;
        this.responses = res.responses
      } else {

      }
    }, err => {
      // caught error
    })
  }

  deleteContracpetive(id, index) {
    let deleteContraceptive = confirm("Are you sure?");
    if (deleteContraceptive) {
      this.contraceptives.splice(index, 1)
      this._contraceptiveService.deleteContraceptive(id)
      .subscribe((res) => {
        if (res.success) {
          this.getContraceptives();
        } else {
          // caught errors
        }
      }, err => {
        // caught errors
      })
    }
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

  updateParams(parameter: any, contraceptive) {
    contraceptive.published = parameter.target.checked;
  }

  onChange(event) {
    console.log('select event ', event);
  }

}
