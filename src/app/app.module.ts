import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './route';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ClientComponent} from './client/client.component';
import {ClientEditComponent} from './client/client-edit.component';
import {ClientService} from './service/client.service';
import {VolComponent} from './vol/vol.component';
import {VolEditComponent} from './vol/vol-edit.component';
import {VolService} from './service/vol.service';
import {ReservationComponent} from './reservation/reservation.component';
import {ReservationEditComponent} from './reservation/reservation-edit.component';
import {ReservationService} from './service/reservation.service';
import {PassagerComponent} from './passager/passager.component';
import {PassagerEditComponent} from './passager/passager-edit.component';
import {PassagerService} from './service/passager.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientEditComponent,
    VolComponent,
    VolEditComponent,
    ReservationComponent,
    ReservationEditComponent,
    PassagerComponent,
    PassagerEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    PassagerService,
    VolService,
    ReservationService,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
