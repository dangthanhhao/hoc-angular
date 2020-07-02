import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers:string[]=["Barry","Uri"];
  inactiveUsers:string[]=["Selina","Sandy","Jasmine"];

  constructor(private counter:CounterService) { }
  onChangeStatus(user:string){
    const i=this.activeUsers.indexOf(user)
    if(i>=0){
      this.inactiveUsers.push(this.activeUsers.splice(i,1)[0]);
      this.counter.doInactive();
    }
    else{
      this.activeUsers.push(this.inactiveUsers.splice(this.inactiveUsers.indexOf(user),1)[0]);
      this.counter.doActive();
    }
    console.log('Active: ',this.activeUsers);
    console.log('Inactive: ',this.inactiveUsers);
  }
}
