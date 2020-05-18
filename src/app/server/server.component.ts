import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  
  constructor() {
    this.serverStatus = Math.random()>0.5 ? 'online': 'offline';
   }

  ngOnInit() {
  }

  getServerStatus():string{
    return this.serverStatus;
  }

  getServerId():number{
    return this.serverId;
  }

  getServerColor():string{
    return this.serverStatus=='offline'?'red':'green';
  }
}
