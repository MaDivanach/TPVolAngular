import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {PassagerComponent} from './passager/passager.component';
import {PassagerEditComponent} from './passager/passager-edit.component';

export const routes: Routes = [{path: 'home', component: AppComponent},
  {path: 'passager', component: PassagerComponent},
  {path: 'passager/create', component: PassagerEditComponent},
  {path: 'passager/edit/:id', component: PassagerEditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
