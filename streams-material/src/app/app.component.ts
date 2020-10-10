import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'streams-material';

  sideBarOpen = true;
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
