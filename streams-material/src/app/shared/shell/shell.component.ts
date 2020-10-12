import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AccountService } from 'src/app/core/services/account.service';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  opened = false;
  myTaskNumber = 5;
  username = 'Paul'

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, public accountService: AccountService) {}

  ngOnInit(): void {
  }

  logout() {
    this.sidenav.close();
    this.accountService.logout();
  }
}
