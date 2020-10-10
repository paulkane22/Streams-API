import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projects: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProjects();
  }

    getProjects() {

      this.http.get('http://localhost:56563/api/projects').subscribe(response => {
        this.projects = response;

      }, error => {
        console.log(error);
      });

    }



}
