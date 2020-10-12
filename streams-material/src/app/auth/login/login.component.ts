import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  myError: string;
  model: any;
  
  constructor(
    private accountService: AccountService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.model = {username: '', password: ''};
  }

  login() {
    console.log('Login');
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigate(['./']);
    }, error => {
      console.log(error);
      this.myError = 'Invalid username or password';
      this.snackBar.open(this.myError, '', 
      {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['mat-toolbar', 'mat-primary']
      }
      );
      this.loginInvalid = true;
    })
  }

}
