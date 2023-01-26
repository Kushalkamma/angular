import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: ['h2{ color: green;}']
})
export class AppComponent {
  title = 'my-first-work';
  username='';
  showSecret=false;
  log : number[] =[];


  onToggleDetails(){
    this.showSecret=!this.showSecret;
    this.log.push(this.log.length + 1);
    //this.log.push(new Date());
  }
}
