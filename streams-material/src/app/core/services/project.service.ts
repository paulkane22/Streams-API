import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProject } from 'src/app/_models/project';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';
import { NotificationService } from './notification.service';


// const httpOptions = {
//   headers: new HttpHeaders({
//   Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
// })
// };


@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  baseUrl = environment.apiUrl;
  projects: IProject[] = [];

  constructor(private http: HttpClient, private accountService: AccountService, private notificationService: NotificationService) { }

  getProjects()
  {
    return this.http.get<IProject[]>(this.baseUrl + 'projects').pipe(
      map(projects => {
        this.projects = projects;
        return projects;
      })
    );
  }

  getProject(id: number)
  {
    return this.http.get<IProject>(this.baseUrl + 'projects/' + id);
  }

  updateProject(project: IProject)
  {
     const myPriority: number = +project.priority;
     const myWorkstream: number = +project.workstreamId;
     project.priority = myPriority;
     project.workstreamId = myWorkstream;

     return this.http.put(this.baseUrl + 'projects/' + project.id, project).pipe(
      map(() => {
        console.log('Services UPDATE - Projects : ' + project.name);
        // const index = this.projects.indexOf(project);
        // this.projects[index] = project;
      })
    );
  }

  addProject(project: IProject)
  {
   // console.log('Services - ADD Projects number : ' + this.projects.length);
   // console.log('Services - Add Project : ' + project.name);

    return this.http.post(this.baseUrl + 'projects/', project).pipe(
      map(() => {
       // this.projects.push(project);
      })
    );
  }

  deleteProject(project: IProject)
  {
    return this.http.delete(this.baseUrl + 'projects/' + project.id.toString()).pipe(
      map(() => {
       // this.projects.push(project);
      })
    );
  }

  getNewProject()
  {
    const myNewProject: IProject = {
      id: 0,
      name: 'Add Project to Streams',
      projectKey: '',
      productId: 1,
      projectTypeId: 1,
      workstreamId: 0,
      OrganisationId: 1,
      active: true,
      completed: false,
      description: '',
      owner: 'Paul',
      priority: 1,
      startDate: new Date('01/01/2020'),
      // completedDate: new Date('01/01/2020'),
      deadlineDate: new Date('01/01/2020'),
      createdDate: new Date('1/1/2020')
    }

    return myNewProject;
  }
}
