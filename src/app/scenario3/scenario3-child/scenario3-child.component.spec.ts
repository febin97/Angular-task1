import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario3ChildComponent } from './scenario3-child.component';

describe('Scenario3ChildComponent', () => {
  let component: Scenario3ChildComponent;
  let fixture: ComponentFixture<Scenario3ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario3ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
