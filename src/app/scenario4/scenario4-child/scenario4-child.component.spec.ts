import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario4ChildComponent } from './scenario4-child.component';

describe('Scenario4ChildComponent', () => {
  let component: Scenario4ChildComponent;
  let fixture: ComponentFixture<Scenario4ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario4ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario4ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
