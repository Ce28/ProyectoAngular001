import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Archivo 7 - Directiva ngModel
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    // Archivo 7 - Directiva ngModel
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
