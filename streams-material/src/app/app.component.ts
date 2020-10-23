import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { User } from 'src/app/_models/user';
import { AccountService } from './core/services/account.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projects: any;

  constructor(private http: HttpClient, private accountService: AccountService) {}

  ngOnInit() {
    // this.getProjects();
    this.setCurrentUser();
  }

    // getProjects() {

    //   this.http.get('http://localhost:56563/api/projects').subscribe(response => {
    //     this.projects = response;
    //   }, error => {
    //     console.log(error);
    //   });
    // }

    setCurrentUser()
    {
      const user: User = JSON.parse(localStorage.getItem('user'));
      this.accountService.setCurrentUser(user);
    }

}
