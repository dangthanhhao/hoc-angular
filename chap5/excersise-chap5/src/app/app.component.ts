import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'excersise-chap5';

  listOdd:number[]=[];
  listEven:number[]=[];
  
  onNumIncreased(num){
    if (num%2==0){
      this.listEven.push(num);
    }
    else this.listOdd.push(num);
  }
}
