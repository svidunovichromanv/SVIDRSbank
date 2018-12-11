import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerExpensesOfDayComponent } from './editer-expenses-of-day.component';

describe('EditerExpensesOfDayComponent', () => {
  let component: EditerExpensesOfDayComponent;
  let fixture: ComponentFixture<EditerExpensesOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerExpensesOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerExpensesOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
