import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationEditComponent } from './reservation/reservation-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    ReservationEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
