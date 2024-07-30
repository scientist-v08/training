import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RedTextDirective } from './redtext.directive';
import { LaughPipe } from './laugh.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RedTextDirective,
    LaughPipe
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
