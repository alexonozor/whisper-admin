import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { tokenNotExpired, JwtHelper, AuthHttp } from 'angular2-jwt';




/*
  Generated class for the AuthenticationProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenticationService {
  
   constructor(
     public http: Http, 
     public authHttp: AuthHttp,
     ) {
  }

  private host = environment.baseUrl;


  login(accountInfo: any) : Observable<any> {
		return this.http.post(`${this.host}/login`, accountInfo)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }


  logout() {
    localStorage.removeItem('token');
  }

  tokenSubscription() {
    this.authHttp.tokenStream.subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Complete')
    );
  }

  loggedIn() {
    return !tokenNotExpired(this.getToken('token'));
  }

  saveToken(tokenName: string, token: string ) {
    localStorage.setItem(tokenName, token);
  }

  getToken(token: string) {
    return (localStorage.getItem(token));
  }

  saveUser(userParams){
    let user = JSON.stringify(userParams);
    localStorage.setItem('user', user);
  }

  currentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
}