import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  numActive = 0;
  numInActive = 0;
  constructor() { }

  doActive() {
    this.numActive++;
  }
  doInactive() {
    this.numInActive++;
  }
}
