import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcersiseBindDataComponent } from './excersise-bind-data.component';

describe('ExcersiseBindDataComponent', () => {
  let component: ExcersiseBindDataComponent;
  let fixture: ComponentFixture<ExcersiseBindDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcersiseBindDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcersiseBindDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
