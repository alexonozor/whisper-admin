import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { AssessmentService } from '../assessment.service';
import { ContraceptiveService } from '../contraceptive.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormArray,FormArrayName, FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Route, Router } from '@angular/router';

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
  startConversationOrOpen: String;
  assessmentOwner: String;
  assessmentType: String;

  constructor(
    public _assessmentService: AssessmentService,
    public _contraceptiveService: ContraceptiveService,
    public fb: FormBuilder,
    private router: Router,
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
      price: [''],
      // add shipping methods
      minimumShippingQuantity: ['', Validators.required],
      maximumShippingQuantity: ['', Validators.required],
      appointment: ['', Validators.required],
      shippingMethods:  ['', Validators.required]
    });
  }

  get shippingMethod(): FormArray { return this.createContraceptiveForm.get('shippingMethods') as FormArray; }

  saveContraceptiveId(id) {
    this._contraceptiveService.saveContraceptiveIdToLocalStorage('contraceptive_id',id);
  }

  addShippingMethod() {
    this.shippingMethod.push(new FormControl());
  }

  startConvo() {
    this.start_convo = true;
    this.router.navigate(['conversation']);
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
    console.log('edit data ', this.editParams);
    this.shipping_meths = data.shippingMethods;
    this.modalActions.emit({ action:"modal", params:['open'] });
    console.log('update form validity',  this.updateContraceptiveForm.valid);
  }

  closeEditModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
  }

  getContraceptives() {
    this.loading = true;
    this._contraceptiveService.getContraceptives()
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
    console.log('contraceptive update form ', this.updateContraceptiveForm.value);
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
        this.checkIfConvoExist(this.responses);
      } else {

      }
    }, err => {
      // caught error
    })
  }

  checkIfConvoExist(response) {
    response.forEach((el, i) => {
      this.startConversationOrOpen = (el['hasConversation'])? "Open Conversation" : "Start Conversation";
      el["convo"] = this.startConversationOrOpen;
    })
  }

  checkConversation(response) {
    // we need a loader
    if(response.hasConversation) {
      this.openConversation(response);
    }
    else {
      this.startConversation(response);
    }
  }

  startConversation(response) {
    let params = { 
      'startedBy': response.user, 
       'assessmentResponse': response._id,  
       'users': [ response.user ], 
       'messages': [],
       'createdAt': Date.now() 
    };

    this._assessmentService.startAssessmentConversation(params)
    .subscribe((resp) => {
      if (resp.success) {
        this.updateAssesmentResponse(response._id, { hasConversation: true, conversation: resp.responseId })
      }
    }, err => {
      //toaster is fyn for err don't for get to dismiss loader
    })
  }

  openConversation(response) {
    console.log('converstation ', response);
    this.assessmentOwner = response.user.firstName + ' ' + response.user.lastName;
    this.assessmentType = response.contraceptive.name;
    this.router.navigate(['conversation', { conversationId: response.conversation, user: this.assessmentOwner,
      type: this.assessmentType }]);
  }

  updateAssesmentResponse(id, params) {
    this._assessmentService.updateResponse(id, params)
    .subscribe((resp) => {
      if (resp.success) {
        this.router.navigate(['conversation', { conversationId: params.conversation }]);
      }
    }, err => {
      // caught errors
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

  updatePublished(event, contraceptive) {
    let checked = event.target.checked;
    console.log('is checked ', checked)
    console.log('event ', event);
    console.log('contraceptive ', contraceptive);
    let params = {
      published: checked
    }
    this.updateContraceptivePublished(contraceptive._id, params);
  }

  updateContraceptivePublished(id, params) {
    this._contraceptiveService.updateContraceptivePublished(id, params)
    .subscribe((res) => {
      if (res.success) {
        console.log('contraceptive has been updated');
      }
    }, err => {
      // caught error
    })
  }


  onChange(event) {
    console.log('select event ', event);
  }

  ngOnDestroy() {}

}
