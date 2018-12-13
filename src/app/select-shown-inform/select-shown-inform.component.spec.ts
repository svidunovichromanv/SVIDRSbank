import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShownInformComponent } from './select-shown-inform.component';

describe('SelectShownInformComponent', () => {
  let component: SelectShownInformComponent;
  let fixture: ComponentFixture<SelectShownInformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectShownInformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectShownInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
