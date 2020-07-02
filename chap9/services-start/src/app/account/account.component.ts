import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  

  constructor(private logging:LoggingService, private data:DataStorageService){}
  ngOnInit(){
    
  }

  onSetTo(status: string) {
  this.data.updateAccount(this.id,status);
    // this.logging.onStatusChange(status)
    // console.log('A server status changed, new status: ' + status);
  }
}
