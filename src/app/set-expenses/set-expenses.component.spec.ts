import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetExpensesComponent } from './set-expenses.component';

describe('SetExpensesComponent', () => {
  let component: SetExpensesComponent;
  let fixture: ComponentFixture<SetExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
