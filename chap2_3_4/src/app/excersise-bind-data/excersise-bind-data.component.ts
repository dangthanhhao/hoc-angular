import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excersise-bind-data',
  templateUrl: './excersise-bind-data.component.html',
  styleUrls: ['./excersise-bind-data.component.css']
})
export class ExcersiseBindDataComponent implements OnInit {
  username='';
  constructor() { }

  ngOnInit(): void {
  }
  onResetName(){
    this.username='';
  }
}
