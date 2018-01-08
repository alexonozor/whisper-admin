import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { AssessmentService } from '../../assessment.service';
import { UserService } from '../../user.service';
import { FormsModule, FormArray, FormArrayName, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
declare var Materialize: any;
declare var jQuery: any;
import { MaterializeAction } from 'angular2-materialize';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-assessment-response',
  templateUrl: './assessment-response.component.html',
  styleUrls: ['./assessment-response.component.css']
})

export class AssessmentResponseComponent implements OnInit {
  searchTerm: String = '';
  user: any = [];
  users: any = [];
  allUsers: any = [];
  userAssessments: Array<any>;
  loaded: boolean = false;
  showButton: boolean =  false;
  messages: Array<any> = [];
  conversation:   any;
  isSender: boolean = false;
  userId: Object;
  conversationId: string;
  chatForm: FormGroup;
  sub: any;
  convo_id: string;
  submitting: boolean = false;
  userIsTyping: boolean = false;
  loading: boolean = false;
  chatOwner: string;
  assessmentType: string;
  chatParticipants: any = [];
  searchResult: any = [];
  typing: boolean = false;
  assesmentResponseId: any;
  assesmentResponse: any;
  modalActions = new EventEmitter<string|MaterializeAction>();
  searchTerm$ = new Subject<string>();

  constructor(
    public _authService: AuthenticationService,
    public _assessmentService: AssessmentService,
    public _userService: UserService,
    public fb: FormBuilder,
    public route: ActivatedRoute) { 
      this._userService.searchUsers(this.searchTerm$)
      .subscribe(results => {
        this.searchResult = results.users;
      });
    }

  ngOnInit() {
    this.startChat();
    this.sub = this.route.params.subscribe(params => {
      this.conversationId = params['conversationId'];
      this.chatOwner = params['user'];
      this.assessmentType = params['type'];
      // In a real app: dispatch action to load the details here.
      this._assessmentService.connectToroom(this.conversationId);
      this.getMessages();
    });

    this._assessmentService.getAssementResponsesMessage(this.conversationId)
    .subscribe((resp) => {
      this.loading = true;
      if (resp.success) {
        this.loading = false;
        this.conversation = resp.conversation;
        this.chatParticipants = resp.conversation.users;
        this.assesmentResponseId = resp.conversation.assessmentResponse._id || resp.conversation.assessmentResponse;
        this.checkSender(resp.conversation.messages);
        this.getAssesmentResponse(this.assesmentResponseId);
      }
    });
    this.jqueryInit();
  }


  getAssesmentResponse(assesmentResponseId) {
    this._assessmentService.getAssementResponse(assesmentResponseId)
    .subscribe((resp) => {
      this.assesmentResponse = resp.responses
    }, err => {

    })
  }

  jqueryInit() {
    jQuery('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
    });
    jQuery('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    });
    jQuery('.modal').modal();
  }

 

  addRecipient(user) {
    // make unique
    let confirmAddUser = confirm(`Add ${user.firstName} to this conversation?`);
    if (confirmAddUser) {
      this._assessmentService.addUserToConversation(user._id, this.conversationId).subscribe((response) => {
        if (response.success) {
          this.chatParticipants.push(user);
          this.modalActions.emit({ action: 'modal', params: ['close'] });
          Materialize.toast(`${user.firstName} has been added to chat`, 2000);
        } else {
          Materialize.toast(`${user.firstName} cannot been added to chat`, 2000);
        }
      }, err => {
        Materialize.toast(`${user.firstName} cannot been added to chat `, 2000);
      });
    }
  }

  removeRecipient(user, index) {
    let confirmRemoveUser = confirm(`Are you sure you want to remove ${user.firstName} from this conversation?`);
    if  (confirmRemoveUser) {
      this._assessmentService.removeUserFromConversation(user._id, this.conversationId)
      .subscribe((resp) => {
        if (resp.success) {
          this.chatParticipants.splice(index, 1);
        } 
      }, err => {
        Materialize.toast('internal server error');
      })
    }
  }

 

  openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }


  startChat() {
    this.chatForm = this.fb.group({
      content: ['', Validators.required],
      conversation: [this.conversationId],
      user: [this._authService.currentUser()._id],
      createdAt: [Date.now()]
    });
  }


  getMessages() {
    this._assessmentService.getMessages().subscribe(message => {
      message['isSender'] = ( message.user === this.userId );
      this.messages.push(message);
    });
  }

  checkSender(messageResponse) {
    this.userId = this._authService.currentUser()._id;
    messageResponse.forEach((el, i) => {
      el['isSender'] = ( el.user === this.userId );
      if (el['isSender']) {
        this.isSender = true;
      }
    });
    this.messages = messageResponse;
  }

 
  sendMessage() {
    this.submitting = true;
    this.chatForm.patchValue({ conversation: this.conversationId });

    this._assessmentService.sendResponsesMessage(this.chatForm.value)
    .subscribe((resp) => {
      if (resp.success) {
        this.submitting = false;
      }
    }, err => {

    });
    this.chatForm.value['isSender'] = true;
    this.chatForm.reset(
      {
        content: '',
        conversation: this.conversationId,
        user: this._authService.currentUser()._id, createdAt: Date.now()
      }
    );
  }
}
