import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientEditComponent } from './client/client-edit.component';
import { VolComponent } from './Vol/vol/vol.component';
import { VolEditComponent } from './vol/vol-edit.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationEditComponent } from './reservation/reservation-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientEditComponent
    VolComponent,
    VolEditComponent
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
