import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectEditFormComponent } from './project-edit-form/project-edit-form.component';
import { ProjectEditReactiveComponent } from './project-edit-reactive/project-edit-reactive.component';
import { TextInputComponent } from '../_forms/text-input/text-input.component';
import { DateInputComponent } from '../_forms/date-input/date-input.component';





@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailComponent,
    ProjectItemComponent,
    ProjectEditFormComponent,
    ProjectEditReactiveComponent,
    TextInputComponent,
    DateInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectsRoutingModule,
    MatTabsModule,
    MatRadioModule,

  ]
})
export class ProjectsModule { }
