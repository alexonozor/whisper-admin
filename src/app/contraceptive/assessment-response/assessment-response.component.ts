import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { AssessmentService } from '../../assessment.service';
import { UserService } from '../../user.service';
import { SearchFilterPipe } from '../../search-filter.pipe';
import { FormsModule, FormArray, FormArrayName, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
declare var Materialize: any;
declare var jQuery: any;


@Component({
  selector: 'app-assessment-response',
  templateUrl: './assessment-response.component.html',
  styleUrls: ['./assessment-response.component.css']
})

export class AssessmentResponseComponent implements OnInit {
  user: any = [];
  users: any = [];
  allUsers: any = [];
  userAssessments: Array<any>;
  loaded: boolean = false;
  showButton: boolean =  false;
  messages: Array<any> = [];
  conversation: Object = {};
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
  participant: any = [];
  userParticpants: any = [];


  constructor(
    public _authService: AuthenticationService,
    public _assessmentService: AssessmentService,
    public _userService: UserService,
    public fb: FormBuilder,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();
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
        this.getParticipant(resp.conversation.users);
        console.log('response convo messages ', resp.conversation.messages);
        this.checkSender(resp.conversation.messages);
      }
    });
    this.jqueryInit();
    this.getAllUsers();
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

  getAllUsers() {
    this._userService.getUsers()
    .subscribe((resp) => {
      if (resp.success) {
        this.users = resp.users;
      }
    });
  }

  getUserInfo(user) {
    console.log('user ', user);
    this._assessmentService.addUser(user._id, this.conversationId).subscribe((response) => {
      if (response.success) {
        jQuery('#modal1').modal('close');
        Materialize.toast(`${user.firstName} has been added to chat`, 2000);
      } else {
        Materialize.toast(`${user.firstName} cannot been added to chat`, 2000);
      }
    }, err => {
      Materialize.toast(`${user.firstName} cannot been added to chat `, 2000);
    });
  }

  addParticipant() {
    this.allUsers = this.users;
  }

  getParticipant(users) {
    // get user
    // users.forEach( user => {
    //   this._userService.getUser(user._id).subscribe((res) => {
    //     if (res.success) {
    //       user['user'] = res.user;
    //       delete user['_id'];
    //     }
    //   }, err => {});
    // });

    // users.some(function (user, i) {
    //   // timeout for a bit
    //   setTimeout(function(){
    //     console.log('user oga ', user['user']);
    //   }, 1200);
    // });
    console.log('users ', users);
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
    console.log('messages ', this.messages);
  }

  getUser() {
    this.user = this._authService.currentUser();
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
