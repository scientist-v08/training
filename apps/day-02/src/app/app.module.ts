import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OneComponent } from './component-one/component-one.component';
import { TwoComponent } from './component-two/component-two.component';
import { ThreeComponent } from './component-three/component-three.component';
import { FourComponent } from './component-four/component-four.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
