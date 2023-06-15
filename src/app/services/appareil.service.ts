import {Injectable} from "@angular/core";

@Injectable()
export class AppareilService {
  isAuth: boolean = false;

  appareils = [
    {
      id: 1,
      name: "Machine à laver",
      status: "éteint"
    },
    {
      id: 2,
      name: "Télévision",
      status: "allumé"
    },
    {
      id: 3,
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

  switchOffOne(id: number) {
    this.appareils[id].status = "éteint";
  }

  getAppareilById(id: number) {

    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      });
    return appareil;
  }
}
