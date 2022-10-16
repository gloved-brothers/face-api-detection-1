import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebcamComponent } from './webcam/webcam.component';
import { FromImageComponent } from './from-image/from-image.component';

@NgModule({
  declarations: [
    AppComponent,
    WebcamComponent,
    FromImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
