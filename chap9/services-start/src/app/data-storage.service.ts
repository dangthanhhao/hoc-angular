import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";
import { EventEmitter } from "@angular/core";

@Injectable({providedIn:'root'})
export class DataStorageService{
  constructor(private log:LoggingService){}
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    addAccount(name:string, status:string){
        this.accounts.push({name:name,status:status});
        this.log.onStatusChange(status);
    }
    updateAccount(id:number, status:string){
        this.accounts[id].status = status;
        this.log.onStatusChange(status);
    }
    customEventChange=new EventEmitter<string>();
}