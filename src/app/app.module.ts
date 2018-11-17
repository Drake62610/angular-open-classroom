import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';

import {FormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

import { AppareilService } from './services/appareil.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    FourOhFourComponent,
    SingleAppareilComponent,
    EditAppareilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    AppareilService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
