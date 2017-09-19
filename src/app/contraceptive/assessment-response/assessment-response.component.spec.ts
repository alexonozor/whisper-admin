import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentResponseComponent } from './assessment-response.component';

describe('AssessmentResponseComponent', () => {
  let component: AssessmentResponseComponent;
  let fixture: ComponentFixture<AssessmentResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
