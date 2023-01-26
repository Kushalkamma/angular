import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
 //template: '<app-server></app-server><app-server></app-server>',
 templateUrl:'./servers.component.html',
 styleUrls: ['./servers.component.css']
})
export class serverscomponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus ='no server was created!';
  serverName='Testserver';
  serverCreated=false;
  servers =['Testserver','Testserver 2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer =true;
    },2000);
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='server was created! name is' + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName =(<HTMLInputElement>event.target).value;
  }

}
