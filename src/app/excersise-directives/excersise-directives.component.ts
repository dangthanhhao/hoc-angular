import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excersise-directives',
  templateUrl: './excersise-directives.component.html',
  styleUrls: ['./excersise-directives.component.css']
})
export class ExcersiseDirectivesComponent implements OnInit {

  constructor() { }
  displayPassword=false;
  logStrings=[];
  
  ngOnInit(): void {
  }
  onDisplayPassword(){
    this.displayPassword=!this.displayPassword;
    this.logStrings.push(+new Date());
    console.log(this.logStrings);
  }
  
}
