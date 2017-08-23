import { Component, OnInit, EventEmitter } from '@angular/core';
import { ContraceptiveService } from '../contraceptive.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  contraceptives: Array<any>;
  responses: Array<any>;
  modalActions = new EventEmitter<string|MaterializeAction>();
  createContraceptiveForm: FormGroup;
  updateContraceptiveForm: FormGroup;
  editParams: Object = {};


  constructor(
    public _contraceptiveService: ContraceptiveService,
    public fb: FormBuilder
  ) {
    this.createForm();
    this.updateForm();
   }

  createForm() {
    this.createContraceptiveForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ]
    });
  }

  updateForm() {
    this.updateContraceptiveForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.getContraceptives()
  }

  openModal() {
    this.modalActions.emit({ action:"modal", params:['open'] });
  }
  
  closeModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
  }

  openEditModal(data) {
    this.editParams = data;
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

}
