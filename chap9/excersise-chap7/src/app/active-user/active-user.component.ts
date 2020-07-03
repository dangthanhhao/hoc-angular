import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {

  @Input() user:string;
  constructor(public data:UserService) { }

  ngOnInit(): void {
  }
  onInactive(user){
    this.data.onChangeStatus(user);
  }
}
