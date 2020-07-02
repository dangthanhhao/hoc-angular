import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public counter:CounterService){}
  ngOnInit(){
    
  }
  title = 'excersise-chap7';
  

}
