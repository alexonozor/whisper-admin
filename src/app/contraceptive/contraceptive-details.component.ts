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
  editParams: Object = {};
  assessments: Array<any> = [];
  modalActions = new EventEmitter<string|MaterializeAction>();
  createAssessmentForm: FormGroup;
  updateAssessmentForm: FormGroup;
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
    this.updateForm();
   }

  createForm() {
    this.createAssessmentForm = this.fb.group({
      question: ['', Validators.required ],
      contraceptive: [''],
      published:['']
    });
  }

  updateForm() {
    this.updateAssessmentForm = this.fb.group({
      question: ['', Validators.required ],
      contraceptive: [''],
      published:[''],
      id: ['']
    });
  }

  ngOnInit() {
    this.createAssessmentForm.reset();
    this.sub = this.route.params.subscribe(params => {
       this.showForm = false;
       this.id = params['id'];
       console.log('id ', this.id);
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
        console.log('assessments ', res.assesments);
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

  openEditModal(data) {
    console.log('data ', data);
    this.editParams = data;
    this.modalActions.emit({ action:"modal", params:['open'] });
    this.updateAssessmentForm.value['published'] = data.published;
    this.updateAssessmentForm.value['question'] = data.question;
    this.createAssessmentForm.value['id']=data._id;
  }

  closeEditModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
  }

  createAssessment() {
    let id;
    if(this.id == null ){
      id = localStorage.getItem('contraceptive_id');
    }else{
      id = this.id;
    }
    this.submit = true;
    this.createAssessmentForm.value['published'] = true;
    if( this.createAssessmentForm.value['contraceptive'] == null ){
      this.createAssessmentForm.value['contraceptive'] = id;
    }
    this._contraceptiveService.saveAssessment(this.createAssessmentForm.value)
    .subscribe((res) => {
      if (res.success) {
        this.getContraceptive(id);
        this.submit = false;
        this.createAssessmentForm.reset();
      } else {

      }
    }, err => {
      // caught error
    })
  }

  updateAssessment() {
    let id;
    let assessment_id = this.createAssessmentForm.value['id'];
    if(this.id == null ){
      id = localStorage.getItem('contraceptive_id');
    }else{
      id = this.id;
    }
    this.submit = true;
    this.updateAssessmentForm.value['published'] = true;
    this.updateAssessmentForm.value['contraceptive'] = id;
    console.log('id ', id);
    console.log('update form value ', this.updateAssessmentForm.value);
    this._contraceptiveService.updateAssessment(assessment_id, this.updateAssessmentForm.value)
    .subscribe((res) => {
      if (res.success) {
        this.getContraceptive(id);
        this.submit = false;
        this.closeEditModal();
        this.updateAssessmentForm.reset();
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
