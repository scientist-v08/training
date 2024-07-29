import { Component } from '@angular/core';

@Component({
  selector: 'training-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'day-03';
  textShow = false;
  array = [1,2,3,4,5];
  forShow = false;

  showText(): void {
    this.textShow = !this.textShow;
  }

  showFor(): void {
    this.forShow = !this.forShow;
  }
}
