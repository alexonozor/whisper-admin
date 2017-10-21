import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { AssessmentService } from '../../assessment.service';
import { FormArray,FormArrayName, FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  userAssessments: Array<any>;
  loaded: boolean = false;
  showButton: boolean =  false;
  messageResponse: Array<any> = [];
  conversation: Object = {};
  isSender: boolean = false;
  userId: Object;
  conversationId: string;
  chatForm: FormGroup;
  sub: any;
  convo_id: string;
  submitting: boolean = false;
  userIsTyping: boolean = false;


  constructor(
    public _authService: AuthenticationService,
    public _assessmentService: AssessmentService,
    public fb: FormBuilder,
    public route: ActivatedRoute) { }

  startChat() {
    this.chatForm = this.fb.group({
      content: ['', Validators.required],
      conversation: [this.conversationId],
      user: [this._authService.currentUser()._id],
      createdAt: [Date.now()]
    });
  }


  ngOnInit() {
    this.getUser();
    this.startChat();
    this.sub = this.route.params.subscribe(params => {
      this.conversationId = params['conversationId']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      console.log('convo id ', this.conversationId);
    });

    this._assessmentService.getAssementResponsesMessage(this.conversationId)
    .subscribe((resp) => {
      if (resp.success) {
        this.conversation = resp.conversation;
        console.log('conversation ', this.conversation);
        this.checkSender(resp.conversation.messages);
      }
    })
    this.jqueryInit();
  }

  jqueryInit() {
    jQuery(".button-collapse").sideNav();
  }

  onKeyUp(event) {
    let message = event.target.value;
    if( event.key == "Enter" && event.target.value.length != 0) {
      console.log("button pressed ", event.key);
      console.log('value ', event.target.value);
      console.log('value ', event.target.value.length);
      console.log('chat form value ', this.chatForm.value);
    }
    if(event.target.value.length >= 1) {
      this.userIsTyping = true
    } else {
      this.userIsTyping = false;
    }
  }

  checkSender(messageResponse) {
    console.log('check sender ', messageResponse);
    this.userId = this._authService.currentUser()._id;
    messageResponse.forEach((el, i) => {
      el['isSender'] = ( el.user == this.userId )
      console.log('sender ', el['isSender']);
      if(el['isSender']) {
        this.isSender = true;
      }
    })
    this.messageResponse = messageResponse;
  }

  getUser() {
    this.user = this._authService.currentUser();
    console.log('user ', this.user);
  }

  sendMessage() {
    this.submitting = true;
    this.chatForm.patchValue({ conversation: this.conversationId });

    this._assessmentService.sendResponsesMessage(this.chatForm.value)
    .subscribe((resp) => {
      if (resp.success) {
        this.submitting = false
      }
    }, err => {

    })
    this.chatForm.value['isSender'] = true;
    this.messageResponse.push(this.chatForm.value);
    this.chatForm.reset(
      {
        content: '',
        conversation: this.conversationId,
        user: this._authService.currentUser()._id, createdAt: Date.now()
      }
    );
  }

}
