import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { SharedModule } from '../shared/shared.module';
import { TaskService } from './services/task.service';
import { AccountService } from './services/account.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [DataService, TaskService, AccountService]
})
export class CoreModule { }
