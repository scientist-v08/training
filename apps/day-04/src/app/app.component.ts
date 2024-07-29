import { Component } from '@angular/core';

interface FormArray {
  productName: string;
  productType: string;
  productQuantity: number;
}

@Component({
  selector: 'training-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggler = false;
  numbers: number[] = [1, 2, 3, 4];
  selectedNumber = 1;
  forms: FormArray[] = [{
    productName: '',
    productType: '',
    productQuantity: 0
  }];
  submit = 'Submit';
  check = 'Check for ngClass';

  onSelectionChange() {
    this.forms = [];
    for (let i = 0; i < this.selectedNumber; i++) {
      this.forms.push({
        productName: '',
        productType: '',
        productQuantity: 0
      });
    }
  }

  onSubmit(): void {
    console.log(this.forms);
  }

  getClass(): string {
    if (this.toggler) {
      return 'checker';
    }
    else {
      return 'product';
    }
  }

  classToggler(): void {
    this.toggler = !this.toggler;
  }
}
