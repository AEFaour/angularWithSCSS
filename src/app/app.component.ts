import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth: boolean = false;
  textButton : string = "Veuillez patienter pour qu'il s'allume"

  appareils  = [
    {
      name: "Machine à laver",
      status: "éteint"
    },
    {
      name: "Télévision",
      status: "allumé"
    },
    {
      name:  "Ordinateur",
      status: "éteint"
    }

  ];
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
        this.textButton = "Tout allumé";
      }, 4000);
  }

  onAllumer(){
    this.isAuth = false;
    console.log("hello button")
  }
}
