import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ContraceptiveService } from '../../contraceptive.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { AuthenticationService } from '../../authentication.service';
import { Route, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-contraceptive-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['../contraceptive.component.css']
})

export class AssessmentComponent implements OnInit {
  loading: boolean = false;
  submit: boolean = false;
  assessments: Array<any> = [];
  assessmentAnswers:  any;
  contraceptive: Object = {};
  createAnswerForm: FormGroup;
  updateAnswerForm: FormGroup;
  answerParams: Object = {};
  assessmentId: string;
  private sub: any;
  showForm: boolean = false;
  modalActions = new EventEmitter<string|MaterializeAction>();
  answerId: string;
  assesmentQuestions: Array<any> = [];

  constructor(
    public _contraceptiveService: ContraceptiveService,
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router
    ) {
    this.createForm();
    this.updateForm();
  }


  openModal() {
    this.modalActions.emit({ action:"modal", params:['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action:"modal", params:['close'] });
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

  updateForm() {
    this.updateAnswerForm = this.fb.group({
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
      this.assessmentId = params['assessmentId'];
      this.getAssessments();
      this.getAssessmentAnswers(this.assessmentId);
    });
  }

  toggleBUtton(event) {
    let content = this.showForm = !this.showForm;
    event.textContent = content ? 'remove' : 'add';
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
        this.assessmentAnswers = res.assesments;
        this.assesmentQuestions = res.assesmentQuestions;
      } else {

      }
    }, err => {
      // caught error
    });
  }

  deleteAnswer(id, i) {
    const deleted = confirm('Are you sure?');
    if (deleted) {
      this.assessmentAnswers._answers.splice(i, 0);
      this._contraceptiveService.deleteAnswer(id)
      .subscribe((res) => {
        if (res.success) {
          // Present toast
          this.getAssessmentAnswers(this.assessmentId);
        }
      }, err => {
        // caught error
      })
    }
  }

  createAnswer() {
    this.submit = true;
    this._contraceptiveService.createAnswer(this.createAnswerForm.value, this.assessmentId)
    .subscribe((res) => {
      if (res.success) {
        this.submit = false;
        this.getAssessmentAnswers(this.assessmentId);
        this.createAnswerForm.reset();
      } else {

      }
    });
  }

  updatePublished(event, answer) {
    let checked = event.target.checked;
    let params = {
      published: checked
    };
    // update published
    this._contraceptiveService.updateAnswer(answer._id, params)
    .subscribe((res) => {
      if (res.success) {
        this.submit = false;
        this.getAssessmentAnswers(this.assessmentId);
        this.updateAnswerForm.reset();
      }
    }, err => {
      // caught error
    });
  }

  updateModal(data) {
    this.answerParams = data;
    this.answerId = data._id;
  }

  updateAnswer() {
    this._contraceptiveService.updateAnswer(this.answerId, this.updateAnswerForm.value)
    .subscribe((res) => {
      if (res.success) {
        this.submit = false;
        this.getAssessmentAnswers(this.assessmentId);
        this.updateAnswerForm.reset();
        this.closeModal();
      }
    }, err => {
      // caught error
    })

  }

}
