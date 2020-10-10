import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css']
})
export class MainnavComponent implements OnInit {
  
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';

  constructor() { }

  ngOnInit(): void {
  }



  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

//  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
