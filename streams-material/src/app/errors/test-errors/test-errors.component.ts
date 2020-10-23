import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BusyService } from 'src/app/core/services/busy.service';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'http://localhost:56563/api/';
  validationErrors: string[] = [];
  

  constructor(private http: HttpClient, public busyService: BusyService) { }

  ngOnInit(): void {
  }

  getbadError() {
    this.http.get(this.baseUrl + 'account/bad-request').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  getbadRegister() {
    this.http.get(this.baseUrl + 'account/register').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    })
  }

  testProgressBar() {
    if (this.busyService.busyRequestCount === 0)
    {
      this.busyService.show();
    }
    else{
      this.busyService.hide();
    }
  }
}
