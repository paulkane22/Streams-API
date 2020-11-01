import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule,
    MatTabsModule,
    MatRadioModule,
  ]
})
export class ProjectModule { }
