import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TasksComponent } from './tasks.component';
import { TaskFormComponent } from './task-form/task-form.component';



@NgModule({
  declarations: [TasksComponent, TaskFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TasksRoutingModule,
  ]
  
})
export class TasksModule { }
