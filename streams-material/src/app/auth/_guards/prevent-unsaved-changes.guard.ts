import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectEditReactiveComponent } from 'src/app/projects/project-edit-reactive/project-edit-reactive.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: ProjectEditReactiveComponent): boolean {
      if (component.registerForm.dirty)
      {
        return confirm('Are you sure you wish to continue? Any insaved changes will be lost');
      }
      return true;
  }
  
}
