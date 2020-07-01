import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';
  name = 'hao'
  onInput(event: Event) {
    this.name= (<HTMLInputElement>event.target).value;
  }
}
