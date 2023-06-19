import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

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

  constructor(private httpClient: HttpClient) {
  }

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

  addAppareil(name: string, status: string) {
    this.appareils.push(
      {
        id: this.appareils[(this.appareils.length - 1)].id + 1,
        name: name,
        status: status
      }
    );
    this.emitAppareilSubject();
  }

  saveAppareilsToServer() {
    this.httpClient.put(
      'https://http-form-demo-default-rtdb.firebaseio.com/appareils.json',
      this.appareils).subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log("Enregistrement raté car " + error);
      }
    );
  }
}
