import {Component, OnInit} from '@angular/core';
import {AppareilService} from "../services/appareil.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit{
  isAuth: boolean = false;
  appareilSubscription: Subscription = new Subscription();
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
    //this.appareils = this.appareilService.appareils;
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }
}
