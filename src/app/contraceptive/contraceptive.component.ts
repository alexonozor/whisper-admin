import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { AssessmentService } from '../assessment.service';
import { ContraceptiveService } from '../contraceptive.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormArray, FormArrayName, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Route, Router } from '@angular/router';
import { NotificationService } from  '../notification.service';

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
  matched_contraceptives: Array<any>;
  matched_shipping: Array<any>;
  responses: Array<any>;
  modalActions = new EventEmitter<string|MaterializeAction>();
  createContraceptiveForm: FormGroup;
  updateContraceptiveForm: FormGroup;
  editParams: Object = {};
  relatedContraceptives: Object = {};
  shippingMethods:  Array<any>;
  matched_methods: Array<any>;
  shipping_meths: Array<any>;
  startConversationOrOpen: String;
  assessmentOwner: String;
  assessmentType: String;

  constructor(
    public _assessmentService: AssessmentService,
    public _contraceptiveService: ContraceptiveService,
    public fb: FormBuilder,
    private router: Router,
    private _notification: NotificationService,
    private _authentication: AuthenticationService
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
      shippingMethods:  ['', Validators.required],
      releatedContraceptives:  ['', Validators.required]
    });
  }

  updateForm() {
    this.updateContraceptiveForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ],
      price: ['', Validators.required],
      minimumShippingQuantity: ['', Validators.required],
      maximumShippingQuantity: ['', Validators.required],
      appointment: ['', Validators.required],
      shippingMethods:  [],
      releatedContraceptives: []
    });
  }

  getContraceptives() {
    this.loading = true;
    this._contraceptiveService.getContraceptives()
    .subscribe((res) => {
      if (res.success) {
        this.loading = false;
        this.contraceptives = res.contraceptives;
      } else {

      }
    }, err => {
      // caught error
    });
  }

  get shippingMethod(): FormArray { return this.createContraceptiveForm.get('shippingMethods') as FormArray; }

  saveContraceptiveId(id) {
    this._contraceptiveService.saveContraceptiveIdToLocalStorage('contraceptive_id', id);
  }

  addShippingMethod() {
    this.shippingMethod.push(new FormControl());
  }

  startConvo() {
    this.start_convo = true;
    this.router.navigate(['conversation']);
  }

  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
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
    });
  }

  openEditModal(data) {
    this.editParams = data;
    this.matchRelatedContraceptives(data.releatedContraceptives, this.contraceptives);
    this.matchShippingMethods(data.shippingMethods, this.contraceptives);
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }

  // matches related contraceptives
  matchRelatedContraceptives(related_contraceptive, contraceptive) {
    if ( related_contraceptive != null) {
      contraceptive.forEach(function(allContraceptives, count) {
        allContraceptives['is_related'] = false;
        related_contraceptive.forEach(function(related, index) {
          if (related._id === allContraceptives._id) {
            allContraceptives['is_related'] = true;
          }
        });
      });
      // save to localStorage for persistence
      this._contraceptiveService.saveRelatedContraceptiveToLocalStorage('related_contraceptive', contraceptive);

      // get related_contraceptive for binding
      const local = this._contraceptiveService.getRelatedContraceptiveToLocalStorage('related_contraceptive');
      this.matched_contraceptives = local;
    } else {
      this.matched_contraceptives = [];
    }
  }

  // matches related contraceptives
  matchShippingMethods(shipping_method, contraceptives) {
    // console.log('edit params shipping method ', shipping_method);
    const getShippingMethods = this.shippingMethods;
    // console.log('all shipping methods available ', getShippingMethods);

    if (shipping_method != null) {
      this.shippingMethods.forEach(function(allShipping, index){
        allShipping['has_shipping'] = false;
        shipping_method.forEach(function(shipping, count) {
          // this initializes has_shipping field in all the shipping method objects
            if (allShipping._id === shipping._id) {
              shipping['has_shipping'] = true;
              allShipping['has_shipping'] = true;
            }
        });
      });
      // save to localStorage for persistence
      this._contraceptiveService.saveRelatedShippingMethods('related_shipping', this.shippingMethods);

      // get related_contraceptive for binding
      const local = this._contraceptiveService.getRelatedShippingMethods('related_shipping');
      this.matched_shipping = local;
      this.matched_methods = this.matched_shipping;
    } else {
      this.matched_shipping = [];
    }
  }


  closeEditModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

  getRelatedContraceptives(contraceptives) {
    contraceptives.forEach(function(val, index) {
      // console.log('value ', val.releatedContraceptives);
      this.relatedContraceptives =  val.releatedContraceptives;
    });
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
    });
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
    });
  }

  getAssessmentResponses() {
    this.loading = true;
    this._contraceptiveService.getAssementResponses()
    .subscribe((res) => {
      if (res.success) {
        this.loading = false;
        this.responses = res.responses;
        this.checkIfConvoExist(this.responses);
      } else {

      }
    }, err => {
      // caught error
    });
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
    .subscribe((resps) => {
      if (resps.success) {
        this.updateAssesmentResponse(response._id, { hasConversation: true, conversation: resps.responseId });  
        this._notification.create({ 
            sender: this._authentication.currentUser()._id, 
            receiver: params.startedBy._id, 
            notification_type_id: resps.responseId,
            notification_type: 'openConversation',
            content: 'starts a conversation on your contraceptive assesment'
          }).subscribe((resp) => {
           this.addToConversation(this._authentication.currentUser()._id, resps.responseId) // add the current user
          }, err => {

          })
        }
    }, err => {
      //toaster is fyn for err don't for get to dismiss loader
    });
  }

  addToConversation(currentUserId, responseId) {
    this._assessmentService.addUserToConversation(currentUserId, responseId)
    .subscribe((resp) => {
      console.log(resp);
    }, err => {
      console.log(err);
    })
  }

 
  openConversation(response) {
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
    });
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
      });
    }
  }
  
  updateParams(parameter: any, contraceptive) {
    contraceptive.published = parameter.target.checked;
  }

  updatePublished(event, contraceptive) {
    let checked = event.target.checked;
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
    });
  }


  onChange(event) {
    console.log('select event ', event);
  }

  ngOnDestroy() {}

}
