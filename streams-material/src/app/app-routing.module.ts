import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './auth/edit-profile/edit-profile.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/_guards/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'editprofile', component: EditProfileComponent, canActivate: [AuthGuard] },

  { path: 'projects',
    loadChildren: () =>
      import('./projects/projects-routing.module').then(m => m.ProjectsRoutingModule),
  },
  { path: 'project',
  loadChildren: () =>
    import('./project/project-routing.module').then(m => m.ProjectRoutingModule),
},
  { path: 'tasks',
    loadChildren: () =>
      import('./tasks/tasks-routing.module').then(m => m.TasksRoutingModule),
  },
  { path: 'errors', component: TestErrorsComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: 'server-error', component: ServerErrorComponent},
  { path: '**', component: HomePageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
