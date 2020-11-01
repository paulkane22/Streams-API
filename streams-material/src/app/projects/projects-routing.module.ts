import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectEditReactiveComponent } from './project-edit-reactive/project-edit-reactive.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsComponent },
  {path: 'projects/:id', component: ProjectDetailComponent },
  {path: 'project/edit/:id', component: ProjectEditReactiveComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }



// {path: 'project/edit/:id', component: ProjectEditFormComponent, canDeactivate: [PreventUnsavedChangesGuard] },