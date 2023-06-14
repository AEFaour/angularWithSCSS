import {Injectable} from "@angular/core";

@Injectable()

export class AuthService {
  isAuth : boolean = false;

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          this.isAuth = true;
          resolve(true);
        }, 2000)
      }
    )
  }
  signOut() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          this.isAuth = false;
          resolve(true);
        }, 2000)
      }
    )
  }
}
