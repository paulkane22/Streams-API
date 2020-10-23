import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AccountService } from 'src/app/core/services/account.service';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/_models/user';
import { BusyService } from 'src/app/core/services/busy.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  opened = true;
  myTaskNumber = 5;
  username = 'Paul';
  user: User;
  sidebarLocked = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public accountService: AccountService,
    private router: Router,
    private snackBar: MatSnackBar,
    public busyService: BusyService) {}

  ngOnInit(): void {
  }

  logout() {
    this.sidenav.close();
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  toggleSidebarLock()
  {
    this.sidebarLocked = !this.sidebarLocked;
    this.sidenavClose();
  }
  sidenavClose()
  {
    if (this.sidebarLocked === false)
    {
      this.sidenav.close();
    }
  }
}
