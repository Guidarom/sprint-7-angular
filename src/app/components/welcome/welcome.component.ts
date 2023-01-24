import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  showHome:boolean=false;

  start(){
    this.showHome=true;
    console.log('start coming')
  }
}
