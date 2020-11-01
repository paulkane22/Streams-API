import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {username: '', password: '', knownAs: ''};

  constructor(private accountService: AccountService, private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      this.notificationService.openSnackBar('Account Created Successfully');

    }, error => { 
      console.log(error);
    });
  }

  cancel() {

  }

}
