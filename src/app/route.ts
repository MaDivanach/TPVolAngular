import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ReservationComponent} from './reservation/reservation.component';
import {PassagerComponent} from './passager/passager.component';
import {ClientComponent} from './client/client.component';
import {VolComponent} from './vol/vol.component';
import {PassagerEditComponent} from './passager/passager-edit.component';

export const routes: Routes = [{path: 'home', component: AppComponent},
  {path: 'passager', component: PassagerComponent},
  {path: 'passager/create', component: PassagerEditComponent},
  {path: 'passager/edit/:id', component: PassagerEditComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'client', component: ClientComponent},
  {path: 'vol', component: VolComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];


