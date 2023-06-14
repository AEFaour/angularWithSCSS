import {Component, OnInit} from '@angular/core';
import {AppareilService} from "./services/appareil.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth: boolean = false;
  textButton: string = "Veuillez patienter pour qu'il s'allume";
  lastUpdate = new Promise<Date>(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date)
      }, 2000)
    }
  );

  appareils: any[] = [];


  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
        this.textButton = "Tout allumé";
      }, 4000);
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }

}
