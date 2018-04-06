import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class HospitalService {

  public host = environment.baseUrl;
  constructor(
    public http: Http,
    public authHttp: AuthHttp,
    public _authService: AuthenticationService
  ) {}

  getHospitals() : Observable<any> {
    return this.authHttp.get(`${this.host}/hospitals`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }


  getHospital(id: string) : Observable<any> {
    return this.authHttp.get(`${this.host}/hospital/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  deleteHospital(id: string) : Observable<any> {
    return this.authHttp.delete(`${this.host}/hospital/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  updateHospital(id: string, params: any) : Observable<any> {
    return this.authHttp.put(`${this.host}/hospital/${id}`, params)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  createHospital(hospitalParams: any) : Observable<any> {
    return this.authHttp.post(`${this.host}/hospitals`, hospitalParams)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

}
