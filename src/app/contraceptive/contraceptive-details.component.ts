import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { ContraceptiveService } from '../contraceptive.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Route, Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-contraceptive-details',
  templateUrl: './contraceptive-details.component.html',
  styleUrls: ['./contraceptive.component.css']
})

export class ContraceptiveDetailsComponent implements OnInit , OnDestroy{
  loading: boolean = false;
  submit: boolean = false;
  contraceptive: Object = {};
  assessments: Array<any> = [];
  modalActions = new EventEmitter<string|MaterializeAction>();
  createAssessmentForm: FormGroup;
  id: string;
  private sub: any;
  showForm: boolean = false;


  constructor(
    public _contraceptiveService: ContraceptiveService,
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.createForm();
   }

  createForm() {
    this.createAssessmentForm = this.fb.group({
      question: ['', Validators.required ],
      contraceptive: [''],
      published:['']
    });
  }

  ngOnInit() {
    this.createAssessmentForm.reset();
    this.sub = this.route.params.subscribe(params => {
       this.showForm = false;
       this.id = params['id'];
       console.log('id ', this.id);
       this.getContraceptive(this.id);
       this.createAssessmentForm.patchValue({contraceptive: this.id});
    });
  }

  openAssessment(id) {
    this.router.navigate(['/dashboard/contraceptives', {outlets:{'assessment':[id]}}]);
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getContraceptive(id) {
    this.loading = true;
    this._contraceptiveService.getDetails(id)
    .subscribe((res) => {
      if (res.success) {
        this.loading = false;
        this.contraceptive = res.contraceptive;
        this.assessments = res.assesments;
      } else {
        
      }
    }, err => {
      // caught error
    })
  }

  toggleBUtton(event) {
    let content = this.showForm = !this.showForm;
    event.textContent = content?  "remove" : "add"
  }

  createAssessment() {
    this.submit = true;
    this.createAssessmentForm.value['published'] = true;
    this._contraceptiveService.saveAssessment(this.createAssessmentForm.value)
    .subscribe((res) => {
      if (res.success) {
        this.getContraceptive(this.id);
        this.submit = false;
        this.createAssessmentForm.reset();
      } else {

      }
    }, err => {
      // caught error
    })
  }

  deleteAssessment(id, index) {
    let remove = confirm('Are you sure?');
    if (remove) {
      this.assessments.splice(index, 0)
      this._contraceptiveService.deleteAssessment(id)
      .subscribe((res) => {
        if (res.success) {
          this.getContraceptive(this.id);
        } else {

        }
      })
    }
  }

}
