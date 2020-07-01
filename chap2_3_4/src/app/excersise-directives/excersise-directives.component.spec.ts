import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcersiseDirectivesComponent } from './excersise-directives.component';

describe('ExcersiseDirectivesComponent', () => {
  let component: ExcersiseDirectivesComponent;
  let fixture: ComponentFixture<ExcersiseDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcersiseDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcersiseDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
