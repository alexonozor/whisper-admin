import { Component, OnInit, EventEmitter } from '@angular/core';
import { ContraceptiveService } from '../../contraceptive.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { AuthenticationService } from '../../authentication.service';
import { Route, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'


@Component({
  selector: 'app-contraceptive-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['../contraceptive.component.css']
})

export class AssessmentComponent implements OnInit {
  loading: boolean = false;
  submit: boolean = false;
  assessments: Array<any> = [];
  assessmentAnswers:  Array<any> = [];
  contraceptive: Object = {};
  createAnswerForm: FormGroup;
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
    this.createAnswerForm = this.fb.group({
      name: ['', Validators.required ],
      eligible: ['', Validators.required ],
      nextQuestionNumber: ['' ],
      hasRelativeQuestion: ['', Validators.required ],
      hasWarning: ['', Validators.required ],
      warningMessage: ['' ],
      isEditedAnswer: ['', Validators.required ],
      editedAnswer: ['' ],
      editedAnswerLabel: ['' ]
    });
  }

  

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['assessmentId'];
      this.createAnswerForm.reset();
      this.getAssessments();
      this.getAssessmentAnswers(this.id);
    });
  }

  toggleBUtton(event) {
    let content = this.showForm = !this.showForm;
    event.textContent = content?  "remove" : "add"
  }


  getAssessments() {
    this.loading = true;
    this._contraceptiveService.getAssessments()
    .subscribe((res) => {
      if (res.success) {
        this.loading = false;
        this.assessments = res.assesments;
      } else {
        
      }
    }, err => {
      // caught error
    })
  }

  getAssessmentAnswers(id) {
    this.loading = true;
    this._contraceptiveService.getAssementAnswer(id)
    .subscribe((res) => {
      if (res.success) {
        this.loading = false;
        this.assessmentAnswers = res.assesments._answers;
      } else {
        
      }
    }, err => {
      // caught error
    })
  }

  deleteAnswer(id, i) {
    const deleted = confirm("Are you sure?");
    if (deleted) {
      this.assessmentAnswers.splice(i, 0);
      this._contraceptiveService.deleteAnswer(id)
      .subscribe((res) => {
        if (res.success) {
          
        }
      }, err => {
        // caught error
      })
    }
  }

  createAnswer() {
    this.submit = true;
    this._contraceptiveService.createAnswer(this.createAnswerForm.value, this.id)
    .subscribe((res) => {
      if (res.success) {
        this.submit = false;
        this.getAssessmentAnswers(this.id);
        this.createAnswerForm.reset();
      } else {

      }
    })
  }

}
