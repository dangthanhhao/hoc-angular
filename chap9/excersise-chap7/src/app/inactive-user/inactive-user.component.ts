import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {

  constructor(public data:UserService) { }

  ngOnInit(): void {
  }
  onActive(user:string){
    this.data.onChangeStatus(user);
  }
}
