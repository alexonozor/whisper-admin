import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class NotificationService {

  public host = environment.baseUrl;  
  constructor(
    public http: Http,
    public authHttp: AuthHttp,
    public _authService: AuthenticationService
  ) {}

  create(params): Observable<any> {
    return this.authHttp.post(`${this.host}/notifications`, params)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error || 'server error'));
  }

  getUserNotifications(userId): Observable<any> {
    return this.authHttp.get(`${this.host}/getuser-notifications/${userId}`)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error || 'server error'));
  }

  getUserNotificationsCount(userId): Observable<any> {
    return this.authHttp.get(`${this.host}/notification-count/${userId}`)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error || 'server error'));
  }

  updateNotifications(notificationId, params): Observable<any> {
    return this.authHttp.put(`${this.host}/notification/${notificationId}`, params)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error || 'server error'));
  }
}
