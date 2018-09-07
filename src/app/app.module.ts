import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassagerComponent } from './passager/passager.component';
import {PassagerService} from './service/passager.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './route';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PassagerComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [PassagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
