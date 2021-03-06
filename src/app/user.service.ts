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
export class UserService {
  private host = environment.baseUrl;
  constructor(
    public http: Http,
    public authHttp: AuthHttp,
  ) {}

  save(accountInfo: any): Observable<any> {
    return this.http.post(`${this.host}/register`, accountInfo)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  update(accountInfo: any, id): Observable<any> {
    return this.http.put(`${this.host}/user/${id}`, accountInfo)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  getUsers(userType): Observable<any> {
    let queryParams = (userType !== '')? `?accountType=${userType}` : ''
    return this.http.get(`${this.host}/users${queryParams}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  getUser(id: String): Observable<any> {
    return this.http.get(`${this.host}/user/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }
  
  searchUsers(searchParams: Observable<string>) {
      return searchParams.debounceTime(400)
        .distinctUntilChanged()
        .switchMap(searchParams => this.searchEntries(searchParams));
  }

  searchEntries(term) {
    return this.http.get(`${this.host}/searchUsers?searchTerms=${term}`)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }
  
  checkIfThreadIsAvailable(reciepaint, currentUser) {
    return this.http.get(`${this.host}/thread-available/${reciepaint}/${currentUser}`)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  createMessageThread(reciepaint, currentUser) {
    return this.http.post(`${this.host}/threads`, {startedBy: currentUser, reciepaint: reciepaint})
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  permanetlyDeleteUsers(id) {
    return this.http.delete(`${this.host}/permanetly-delete-users/${id}`)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }
}


