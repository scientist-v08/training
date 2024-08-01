import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CvaComponent } from './control-value-accessor/cva.component';

@NgModule({
  declarations: [AppComponent,CvaComponent],
  imports: [BrowserModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
