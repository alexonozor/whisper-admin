import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public loading: Boolean = false;
  public notifications: Array<any>;
  constructor(
    public _notification: NotificationService,
    public _auth: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {
    this.getNotifications(this._auth.currentUser()._id);
  }
  


  getNotifications(id) {
    this.loading = true;
    this._notification.getUserNotifications(id)
    .subscribe((res) => {
      if (res.success) {
        this.loading = false;
        this.notifications = res.notifications;
      }
    }, err => {
      this.loading = false;
      console.log(`Error fetching notifications`, err)
    })
  }

  goToNotification(notification) {
    if (notification.seen == false) {
      notification.seen = true;
      this.updateNotificationStatus(notification)
    }
    if (notification.notification_type == "openConversation") {
      this.router.navigate(['conversation', { conversationId: notification.notification_type_id}]);
    } else if (notification.notification_type == "message") {
      this.router.navigate(['dashboard/contact-user', notification.notification_type_id]);
    }
  }

  updateNotificationStatus(notification) {
    this._notification.updateNotifications(notification._id, { seen: true})
    .subscribe((resp) => {
      this._notification.getUserNotificationsCount(this._auth.currentUser()._id)
      .subscribe((resp) => {
        
      }, err => {

      })
    }, err => {
      console.log('Err');
    })
  }

}
