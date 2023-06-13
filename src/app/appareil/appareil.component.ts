import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit{
  @Input() appareilName: string ="";
  @Input() appareilStutus: string = "";


  constructor() {
  }
  ngOnInit(): void {
  }
  getStatus() {
    return this.appareilStutus;
  }

}
