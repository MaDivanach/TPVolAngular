import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ReservationComponent} from './reservation/reservation.component';
import {PassagerComponent} from './passager/passager.component';
import {ClientComponent} from './client/client.component';
import {VolComponent} from './vol/vol.component';

export const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'passager', component: PassagerComponent},
  {path: 'client', component: ClientComponent},
  {path: 'vol', component: VolComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

