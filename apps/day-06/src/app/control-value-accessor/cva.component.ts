/**import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'training-cva-component',
  template: `
    <label for="lastname">Last name: </label>
    <input
      id="lastname"
      [(ngModel)]="value"
      (blur)="onTouched()"
      (input)="onInput()"
    >
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CvaComponent,
    multi: true
  }]
})
export class CvaComponent implements ControlValueAccessor {
  value = '';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onChange = (value: string) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Optional: Add logic to disable the input if necessary
  }

  writeValue(value: string): void {
    this.value = value;
  }

  onInput(): void {
    this.onChange(this.value);
  }
}**/
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'training-cva-component',
  template: `
    <div [formGroup]="formGroup" class="div__form">
      <div class="div__form-separate">
        <label for="middleName">Middle name: </label>
        <div class="validation_errors">
          <input id="middleName" formControlName="middlename" (blur)="onTouched()">
          <small
            class="text"
            *ngIf="formGroup.controls['middlename'].errors?.['required'] && formGroup.controls['middlename'].touched"
          >
            Middle name is required
          </small>
        </div>
      </div>
      <div class="div__form-separate">
        <label for="lastname">Last name: </label>
        <input id="lastname" formControlName="lastname" (blur)="onTouched()">
      </div>
    </div>
  `,
  styles: [`
    .validation_errors {
      display: flex;
      flex-direction: column;
      margin-top: 0 !important;
    }
    .text {
      color: red;
    }
  `],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CvaComponent,
    multi: true
  }]
})
export class CvaComponent implements ControlValueAccessor, OnDestroy, OnInit {
  @Input() formGroup!: FormGroup;
  sub = new Subscription();

  private onChange = (value: any) => {
    // This is an empty function.
  };
  public onTouched = () => {
    // This is an empty function.
  };

  ngOnInit() {
    this.sub = this.formGroup.valueChanges.subscribe(value => {
      this.onChange(value);
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }

  writeValue(value: any): void {
    if (value) {
      this.formGroup.setValue(value, { emitEvent: false });
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
