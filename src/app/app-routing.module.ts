import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MonPremierComponent} from "./mon-premier/mon-premier.component";

const routes: Routes = [
  {path:'first', component: MonPremierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
