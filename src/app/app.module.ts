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
import {authGuard} from "./services/auth-guard.service";
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import {UserService} from "./services/user.service";
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path:'appareils', component: AppareilViewComponent, canActivate: [authGuard]},
  {path:'appareils/:id', component: SingleAppareilComponent, canActivate: [authGuard] },
  {path:'edit', component: EditAppareilComponent, canActivate: [authGuard] },
  {path:'auth', component: AuthComponent },
  {path:'users', component: UserListComponent},
  {path:'new-user', component: NewUserComponent},
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
    FourHundredFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppareilService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
