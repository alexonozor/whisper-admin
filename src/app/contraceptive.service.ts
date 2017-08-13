import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { tokenNotExpired, JwtHelper, AuthHttp } from 'angular2-jwt';

@Injectable()
export class ContraceptiveService {

  constructor(
     public http: Http, 
     public authHttp: AuthHttp,
     ) { }

  private host = environment.baseUrl;


  save(contraceptiveInfo: any) : Observable<any> {
		return this.authHttp.post(`${this.host}/contraceptives`, contraceptiveInfo)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  get() : Observable<any> {
		return this.authHttp.get(`${this.host}/contraceptives`)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

}
