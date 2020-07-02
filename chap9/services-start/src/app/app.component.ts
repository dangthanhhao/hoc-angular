import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit{
  constructor(private data:DataStorageService){}

  ngOnInit() {
    this.accounts=this.data.accounts;
    this.data.customEventChange.subscribe((status)=>{alert(status)});
    
  }
  accounts:{name:string, status:string}[]=[];
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   // this.accounts.push(newAccount);
  //   this.data.addAccount(newAccount.name,newAccount.status);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   // this.accounts[updateInfo.id].status = updateInfo.newStatus;
  //   this.data.updateAccount(updateInfo.id,updateInfo.newStatus);
  // }
}
