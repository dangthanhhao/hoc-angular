import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataStorageService } from '../data-storage.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {
  

  constructor(private logging:LoggingService, private data:DataStorageService ){}
  onCreateAccount(accountName: string, accountStatus: string) {
    
    this.data.addAccount(accountName,accountStatus);
    this.data.customEventChange.emit(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.logging.onStatusChange(accountStatus);
  }
}
