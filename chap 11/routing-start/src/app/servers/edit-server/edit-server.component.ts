import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivated } from './can-deactivated-service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
  
})
export class EditServerComponent implements OnInit,CanComponentDeactivated {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowedEdit=false;
  
  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }
  
  onDeactivated(){
  if( this.serverName!=this.server.name || this.serverStatus!= this.server.status){
    return confirm('Do you want to discard changes?');
    
  }
  else{
    return true;
     
  }
  }

  ngOnInit() {
    
    // this.server = this.serversService.getServer(1);
    // this.serverName = this.server.name;
    // this.serverStatus = this.server.status;
    
    this.route.params.subscribe((params:Params)=>{
      this.server = this.serversService.getServer(+params['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
      
    })
    this.route.queryParams.subscribe((params:Params)=>{
      this.allowedEdit=params['edit']==='1'?true:false;
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    
    this.router.navigate(['../'],{relativeTo:this.route});  
    
  }

}
