import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {username: '', password: ''};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    console.log('register');
  }

  cancel() {
    this.accountService.register(this.model).subscribe(response => {
      console.log('REGISTER' + response);

    }, error => { 
      console.log(error);
    });
  }

}
