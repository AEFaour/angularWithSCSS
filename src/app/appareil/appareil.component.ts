import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from "../services/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string = "";
  @Input() appareilStutus: string = "";
  @Input() indexOfApprail: number = 0;
  @Input() id : number = 0;


  constructor(private appareilService : AppareilService) {
  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStutus;
  }

  getColor(): any {
    if (this.appareilStutus === "éteint") {
      return 'red';
    } else if (this.appareilStutus === "allumé") {
      return 'green';
    }
  }
  onSwitchOn(id: number) {
    this.appareilService.switchOnOne(id);
  }
  onSwitchOff(id: number) {
    this.appareilService.switchOffOne(id);
  }
}
