import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth: boolean = false;
  textButton : string = "Veuillez patienter pour qu'il s'allume"

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
        this.textButton = "Tout allumé";
      }, 4000);
  }
}
