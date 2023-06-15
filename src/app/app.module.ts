import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from "./services/appareil.service";
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthService} from "./services/auth-service";
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourHundredFourComponent } from './four-hundred-four/four-hundred-four.component';

const routes: Routes = [
  {path:'appareils', component: AppareilViewComponent },
  {path:'appareils/:id', component: SingleAppareilComponent },
  {path:'auth', component: AuthComponent },
  {path:'', component: AppareilViewComponent },
  {path:'not-found', component: FourHundredFourComponent },
  {path:'**', redirectTo: "/not-found" }
];
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourHundredFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppareilService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
