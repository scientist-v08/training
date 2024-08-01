import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'training-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    firstname: new FormControl<string>('', { nonNullable: true }),
    nameGroup: new FormGroup({
      middlename: new FormControl<string>('', { nonNullable: true }),
      lastname: new FormControl<string>('', { nonNullable: true }),
    })
  });
  onSubmit(): void {
    console.log(this.form.getRawValue());
  }
  get nameGrouping(): FormGroup {
    return this.form.get('nameGroup') as FormGroup;
  }

}
