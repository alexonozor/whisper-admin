import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraceptiveComponent } from './contraceptive.component';

describe('ContraceptiveComponent', () => {
  let component: ContraceptiveComponent;
  let fixture: ComponentFixture<ContraceptiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContraceptiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraceptiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
