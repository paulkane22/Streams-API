import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { repeat } from 'rxjs/operators';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInvalid = false;

  model: any;
  
  constructor(private accountService: AccountService,  private router: Router) { }

  ngOnInit(): void {
    this.model = {username: '', password: ''};
  }

  login() {
    console.log('Login');
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigate(['./']);
    }, error => {
      console.log(error);
      this.loginInvalid = true;
    })
  }

}
