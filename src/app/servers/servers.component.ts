import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowedNewServer: boolean = false;
  serverCreatedStatus :string = "Server was not created";
  serverName:string;
  serverCreated: boolean = false;

  servers = ['FirstServer','SecondServer'];

  constructor() { 
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreated(){
    this.servers.push(this.serverName);
    this.serverCreated= true;
    this.serverCreatedStatus = 'Server was Created  and Server name is: '+this.serverName;
  }

  onServerUpdate(event:Event){
    
    this.serverName = (<HTMLInputElement>event.target).value;
    //console.log(event);
    
  }

}
