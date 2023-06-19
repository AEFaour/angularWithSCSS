import {Injectable} from "@angular/core";
import {User} from "../models/User.module";
import {Subject} from "rxjs";

@Injectable()
export class UserService {
  private users: User[] = [
    {
      firsName: "tuto",
      lastName: "tuto",
      email: "user@user.fr" ,
      drinkPreference: "Wisky",
      hobbies : ["Angular", "Spring boot"]
    }
  ];
  userSubject: Subject<User[]> = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }
}
