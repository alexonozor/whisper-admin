import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThreadService } from '../thread.service';
import { AuthenticationService } from '../authentication.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { NotificationService } from '../notification.service';
// import { MaterializeAction } from 'angular2-materialize';
// declare var Materialize: any;


@Component({
  selector: 'app-contact-users',
  templateUrl: './contact-users.component.html',
  styleUrls: ['./contact-users.component.css']
})
export class ContactUsersComponent implements OnInit {
  messages: Array<any> = [];
  messageForm: FormGroup;
  threadId: String;
  userId: Object;
  isSender: boolean = false;
  currentUser: any;
  userThreads: Array<any> = [];
  activeRecipiant: any;
  
 

  constructor(
    public route: ActivatedRoute,
    public _thread: ThreadService,
    private fb: FormBuilder,
    public _authService: AuthenticationService,
    public _notification: NotificationService
  ) {
    this.currentUser = this._authService.currentUser();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.threadId = params['thread']
      this.loadDataFromParams(this.threadId)
    })
    this.createForm();
  }

  loadDataFromParams(id) {
      this.getUserThreads(this.currentUser._id);
      this.getThreads(id);
  }

  getThreads(id) {
    this._thread.getThread(id)
    .subscribe((res) => {
      if (res.success) {
        this.checkSender(res.thread.messages)
        this.activeRecipiant = res.thread.reciepaint;
      }
    }, err => {})
  }

  getUserThreads(userId) {
    this._thread.getUserThread(userId)
    .subscribe((res) => {
      if (res.success) {
        this.userThreads = res.thread;
      }
    }, err => {

    })
  }

  checkSender(messageResponse) {
    this.userId = this._authService.currentUser()._id;
    messageResponse.forEach((el, i) => {
      el['isSender'] = ( el.user._id === this.userId );
      if (el['isSender']) {
        this.isSender = true;
      }
    });
    this.messages = messageResponse;
  }

  createForm() {
    this.messageForm = this.fb.group({
      content: ['', Validators.required],
      thread: [this.threadId],
      user: [this._authService.currentUser()._id],
      createdAt: [Date.now()]
    });
  }


  submitMessage() {
    

    this._thread.createThreadMessage(this.messageForm.value)
    .subscribe((res) => {
      if (res.success) {
        
        this.getThreads(this.threadId); // call to refresh the
      }
    }, err => {
      // error handling.
    })
     this.showMessage(this.messageForm.value)
  }

  
  showMessage(message) {
    message['user'] = { _id: this.userId, firstName: this.currentUser.firstName, lastName: this.currentUser.lastName }
    message['isSender'] = ( message.user._id === this.userId );
    this.messages.push(message);
    this.notifiyRecipient(this.threadId) 
    this.createForm()
  }

  notifiyRecipient(threadId) {
    this._notification.create({
      sender: this.currentUser._id, 
      receiver: this.activeRecipiant._id, 
      notification_type_id: threadId,
      notification_type: 'message',
      content: `you have a new message from ${this.currentUser.firstName}`
    }).subscribe((resp) => {
        if (resp.success) {
        
        }
    }, err => {
   ;
    })
  }

  

}
