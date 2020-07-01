import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {
  
  
  isonline=false;
  
  constructor() {
    this.isonline=Math.random()>0.5;
  }

  ngOnInit(): void {
  }
  
}
