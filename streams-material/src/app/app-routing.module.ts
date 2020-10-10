import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./tasks/tasks-routing.module').then(m => m.TasksRoutingModule),
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./todo-list/todo-list.module').then(m => m.TodoListModule),
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
