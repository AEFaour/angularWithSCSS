import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../models/User.module";
import {Subscription} from "rxjs";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy{
  users: User[] = [];
  userSubjection : Subscription = new Subscription();

  constructor(private userService : UserService, private router : Router) {
  }
  ngOnInit(): void {
    this.userSubjection = this.userService.userSubject.subscribe(
      (users : User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy(): void {
    this.userSubjection.unsubscribe();
  }

}
