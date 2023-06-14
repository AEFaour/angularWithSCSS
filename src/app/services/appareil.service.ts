import {Injectable} from "@angular/core";

@Injectable()
export class AppareilService{
  isAuth: boolean = false;
  onAllumer(){
    this.isAuth = false;
    console.log("hello button")
  }
}
