import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class AppareilService {
  isAuth: boolean = false;
  appareilSubject: Subject<any[]> = new Subject<any[]>();

  private appareils = [
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

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  onAllumer() {
    this.isAuth = false;
    console.log("hello button");
    this.emitAppareilSubject();
  }

  switchOnAll() {
    for (let appariel of this.appareils) {
      appariel.status = "allumé";
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let appariel of this.appareils) {
      appariel.status = "éteint";
    }
    this.emitAppareilSubject();
  }

  switchOnOne(id: number) {
    this.appareils[id].status = "allumé";
    this.emitAppareilSubject();
  }

  switchOffOne(id: number) {
    this.appareils[id].status = "éteint";
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {

    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      });
    this.emitAppareilSubject();
    return appareil;
  }
}
