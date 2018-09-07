import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientEditComponent } from './client/client-edit.component';
import { VolEditComponent } from './vol/vol-edit.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationEditComponent } from './reservation/reservation-edit.component';
import { PassagerComponent } from './passager/passager.component';
import {PassagerService} from './service/passager.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './route';
import {FormsModule} from '@angular/forms';
import { ClientEIEditComponent } from './client/client-ei-edit.component';
import { ClientMoralEditComponent } from './client/client-moral-edit/client-moral-edit.component';
import { ClientPhysiqueEditComponent } from './client/client-physique-edit/client-physique-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientEditComponent,
    VolEditComponent,
    AppComponent,
    ReservationComponent,
    ReservationEditComponent,
    PassagerComponent,
    ClientEIEditComponent,
    ClientMoralEditComponent,
    ClientPhysiqueEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [PassagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
