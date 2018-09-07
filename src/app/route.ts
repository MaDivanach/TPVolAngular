import {Routes} from '@angular/router';
import {ReservationComponent} from './reservation/reservation.component';
import {PassagerComponent} from './passager/passager.component';
import {ClientComponent} from './client/client.component';
import {VolComponent} from './vol/vol.component';
import {PassagerEditComponent} from './passager/passager-edit.component';
import {ClientEditComponent} from './client/client-edit.component';
import {ReservationEditComponent} from './reservation/reservation-edit.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'passager', component: PassagerComponent},
  {path: 'passager/create', component: PassagerEditComponent},
  {path: 'passager/edit/:id', component: PassagerEditComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'reservation/create', component: ReservationEditComponent},
  {path: 'reservation/edit/:id', component: ReservationEditComponent},
  {path: 'client', component: ClientComponent},
  {path: 'client/create/:type', component: ClientEditComponent},
  {path: 'client/edit/:type/:id', component: ClientEditComponent},
  {path: 'vol', component: VolComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];


