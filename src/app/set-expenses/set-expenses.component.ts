import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-set-expenses',
  templateUrl: './set-expenses.component.html',
  styleUrls: ['./set-expenses.component.css']
})
export class SetExpensesComponent implements OnInit {

  form: FormGroup;

  @Input() setting;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.getForm(this.formBuilder);
  }

  private getForm(formBuilder: FormBuilder): FormGroup {
    const nameForUser = new FormControl(
      this.setting.nameForUser,
      Validators.compose([Validators.required])
    );
    const nameJS = new FormControl(
      this.setting.nameJS,
      Validators.compose([Validators.required])
    );
    const color = new FormControl(
      this.setting.color
    );
    return formBuilder.group({
      'nameForUser': nameForUser,
      'nameJS': nameJS,
      'color': color,
    });
  }

  onSubmit() {
    console.log('Submited!', this.form);
    console.log(this.form.get('nameJS'));
  }

}
