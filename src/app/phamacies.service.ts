import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class PhamaciesService {
  public host = environment.baseUrl;  
  constructor(
    public http: Http,
    public authHttp: AuthHttp,
    public _authService: AuthenticationService
  ) {}

  getPhamrcies() : Observable<any> {
    return this.authHttp.get(`${this.host}/pharmacies`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }


  getPhamrcy(id: string) : Observable<any> {
    return this.authHttp.get(`${this.host}/pharmacy/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  deletePhamacy(id: string) : Observable<any> {
    return this.authHttp.delete(`${this.host}/pharmacy/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  updatePhamacy(id: string, params: any) : Observable<any> {
    return this.authHttp.put(`${this.host}/pharmacy/${id}`, params)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  createPharmacies(pharmaciesParams: any) : Observable<any> {
    return this.authHttp.post(`${this.host}/pharmacies`, pharmaciesParams)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }
}
