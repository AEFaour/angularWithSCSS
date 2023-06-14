import {Injectable} from "@angular/core";

@Injectable()
export class AppareilService {
  isAuth: boolean = false;

  appareils = [
    {
      name: "Machine à laver",
      status: "éteint"
    },
    {
      name: "Télévision",
      status: "allumé"
    },
    {
      name: "Ordinateur",
      status: "éteint"
    }

  ];

  onAllumer() {
    this.isAuth = false;
    console.log("hello button")
  }

  switchOnAll() {
    for (let appariel of this.appareils) {
      appariel.status = "allumé";
    }
  }

  switchOffAll() {
    for (let appariel of this.appareils) {
      appariel.status = "éteint";
    }
  }
  switchOnOne(id: number) {
    this.appareils[id].status = "allumé";
  }

  switchOffOne(id: number){
    this.appareils[id].status = "éteint";
  }
}
