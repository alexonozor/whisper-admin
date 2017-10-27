import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';
import { AuthenticationService } from './authentication.service';
import * as io from 'socket.io-client';


@Injectable()
export class AssessmentService {
  socket: any;
  constructor(
      public http: Http,
      public authHttp: AuthHttp,
      public _authService: AuthenticationService
  ) {
    this.socket = io(environment.baseUrl);
   }

  public host = environment.baseUrl;
  public token = '';

  submitAssesment(assesmentParams: any) : Observable<any> {
    return this.authHttp.post(`${this.host}/assessment-responses`, assesmentParams)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  updatAssessmenteResponse(id: number, pharmacyId: number) : Observable<any> {
    return this.authHttp.put(`${this.host}/update-assessment-responses/${id}`, { selectedPharmacy: pharmacyId})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  updateResponse(id: string, params, updatingShippingForm = false) : Observable<any> {
    return this.authHttp.put(`${this.host}/update-assessment-responses/${id}?updatingShippingForm=${updatingShippingForm}`, params)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  addUser(userId: string, convoId: string) : Observable<any> {
    return this.authHttp.put(`${this.host}/conversation/${convoId}/user/${userId}`, {})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }


  getAssementResponses(id: string) : Observable<any> {
    return this.authHttp.get(`${this.host}/user-assessment-responses/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  getAssementResponsesMessage(id: string) : Observable<any> {
    return this.authHttp.get(`${this.host}/conversation/${id}/messages`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  deleteAssementResponse(id: string) : Observable<any> {
    return this.authHttp.put(`${this.host}/delete-assessment-responses/${id}`, {})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }


  startAssessmentConversation(params) : Observable<any> {
    return this.authHttp.post(`${this.host}/create-conversation`, params)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  sendResponsesMessage(params) : Observable<any> {
    this.socket.emit("message", params);
    return this.authHttp.post(`${this.host}/messages`, params)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  connectToroom(id) {
    this.socket.emit('room', id);
  }


  getMessages() {
    let observable = new Observable<any>(observer => {
      this.socket.on('message', (data) => {
     
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  } 

}
