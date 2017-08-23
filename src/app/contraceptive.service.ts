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

  update(contraceptiveInfo: any, id) : Observable<any> {
		return this.authHttp.put(`${this.host}/contraceptive/${id}`, contraceptiveInfo)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  get() : Observable<any> {
		return this.authHttp.get(`${this.host}/contraceptives`)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  deleteContraceptive(id) : Observable<any> {
		return this.authHttp.delete(`${this.host}/contraceptive/${id}`)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  getDetails(id: string) : Observable<any> {
		return this.authHttp.get(`${this.host}/contraceptive/${id}/assessments`)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  getAssessments() : Observable<any> {
		return this.authHttp.get(`${this.host}/assessments`)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  deleteAssessment(id) : Observable<any> {
		return this.authHttp.delete(`${this.host}/assessment/${id}`)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  saveAssessment(assessmentInfo: any) : Observable<any> {
		return this.authHttp.post(`${this.host}/assessments`, assessmentInfo)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  createAnswer(assessmentInfo: string, id: string) : Observable<any> {
		return this.authHttp.post(`${this.host}/assessment/${id}/answers`, assessmentInfo)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  getAssementAnswer(id: string) : Observable<any> {
		return this.authHttp.get(`${this.host}/assessment/${id}/answers`)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  deleteAnswer(id) : Observable<any> {
		return this.authHttp.delete(`${this.host}/answer/${id}`)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }

  getAssementResponses() : Observable<any> {
		return this.authHttp.get(`${this.host}/assessment-responses`)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'server error'));
  }
}
