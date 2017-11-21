import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
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

  getUsers(): Observable<any> {
    return this.http.get(`${this.host}/users`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  getUser(id: String): Observable<any> {
    return this.http.get(`${this.host}/user/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }
}


