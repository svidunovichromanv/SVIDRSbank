import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureOfExpenseComponent } from './structure-of-expense.component';

describe('StructureOfExpenseComponent', () => {
  let component: StructureOfExpenseComponent;
  let fixture: ComponentFixture<StructureOfExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureOfExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureOfExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
