import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectListComponent } from './project-list/project-list.component';


const routes: Routes = [  
  {path: 'project/edit', component: ProjectEditComponent},
  {path: 'project', component: ProjectListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }



// {path: 'project/edit/:id', component: ProjectEditFormComponent, canDeactivate: [PreventUnsavedChangesGuard] },