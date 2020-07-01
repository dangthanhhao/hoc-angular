import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  num=0;
  interval;
  constructor() { }
  @Output()onNumIncrease=new EventEmitter<number>();

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      console.log(++this.num);
      this.onNumIncrease.emit(this.num);
    }, 1000)
  }
  onPauseGame() {
    clearInterval(this.interval);
  }
}
