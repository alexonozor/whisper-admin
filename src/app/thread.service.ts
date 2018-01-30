import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { environment } from '../environments/environment';
import { tokenNotExpired, JwtHelper, AuthHttp } from 'angular2-jwt';
@Injectable()
export class ThreadService {

  private host = environment.baseUrl;
  constructor(
    public http: Http,
    public authHttp: AuthHttp,
  ) {}

 
  getThread(threadId) {
    return this.http.get(`${this.host}/thread/${threadId}`)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  createThreadMessage(params) {
    return this.http.post(`${this.host}/threads-message`, params)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  getUserThread(userId: any) {
    return this.http.get(`${this.host}/user-threads/${userId}`)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  
}
