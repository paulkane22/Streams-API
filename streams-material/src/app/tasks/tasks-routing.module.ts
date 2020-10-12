import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksComponent } from './tasks.component';

const routes: Routes = [{
  path: 'tasks', component: TasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
