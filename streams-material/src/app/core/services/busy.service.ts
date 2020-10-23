import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;
  visibility: BehaviorSubject<boolean>;

  constructor() {
    this.visibility = new BehaviorSubject(false);
  }

  show() {
    this.visibility.next(true);
    this.busyRequestCount = 1;
  }

  hide() {
    this.visibility.next(false);
    this.busyRequestCount = 0;
  }

}
