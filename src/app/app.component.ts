import {Component, OnInit} from '@angular/core';
import {interval, Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  secondes: number = 0;
constructor() {
}

  ngOnInit(): void {
  const counter = interval(1000);
  counter.subscribe(
    (value:number) => {
      this.secondes = value;
    },
    (error :any) => {
      console.log("Une erreur a été rencontrée");
    },
    () => {
      console.log("Observable complétée");
    }
  )
  }
}
