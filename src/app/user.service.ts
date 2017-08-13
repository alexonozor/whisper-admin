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
export class UserService {
  
   constructor(
     public http: Http, 
     public authHttp: AuthHttp,
     ) {
  }

  private host = environment.baseUrl;


  save(accountInfo: any) : Observable<any> {
		return this.http.post(`${this.host}/register`, accountInfo)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

}


