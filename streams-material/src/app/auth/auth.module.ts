import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, EditProfileComponent],
  imports: [
    CommonModule, SharedModule, FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
