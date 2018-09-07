import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ClientComponent} from './client/client.component';
import {ClientEditComponent} from './client/client-edit.component';
import {VolEditComponent} from './vol/vol-edit.component';
import {ReservationComponent} from './reservation/reservation.component';
import {ReservationEditComponent} from './reservation/reservation-edit.component';
import {PassagerComponent} from './passager/passager.component';
import {PassagerService} from './service/passager.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './route';
import {FormsModule} from '@angular/forms';
import {VolComponent} from './vol/vol.component';
import {VolService} from './service/vol.service';
import {ReservationService} from './service/reservation.service';
import {ClientService} from './service/client.service';
import {PassagerEditComponent} from './passager/passager-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientEditComponent,
    VolComponent,
    VolEditComponent,
    AppComponent,
    ReservationComponent,
    ReservationEditComponent,
    PassagerComponent,
    PassagerEditComponent,
    PassagerComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule, RouterModule.forRoot(routes), HttpClientModule
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
