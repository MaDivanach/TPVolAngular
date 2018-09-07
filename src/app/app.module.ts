import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VolComponent } from './Vol/vol/vol.component';
import { VolEditComponent } from './vol/vol-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VolComponent,
    VolEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
