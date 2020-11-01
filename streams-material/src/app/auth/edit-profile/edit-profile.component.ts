import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/app/core/services/account.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
user: User;
editProfileForm: FormGroup;


  constructor(private accountService: AccountService, private notification: NotificationService) { }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm() {
   this.accountService.currentUser$.subscribe(user => {
     this.user = user;
   });


   this.editProfileForm = new FormGroup({
      username: new FormControl(this.user.userName, Validators.required),
      knownAs: new FormControl(this.user.knownAs, Validators.required)
    })
  }

  onSubmit() {
    console.log(this.editProfileForm.value);
    this.accountService.updateUser(this.editProfileForm.value).subscribe(response => {
      this.notification.openSnackBar('User profile updated successfully')
    }, error => {
      console.log(error);
    });
  }

}
