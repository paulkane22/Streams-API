import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProject } from 'src/app/_models/project';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';


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

  constructor(private http: HttpClient, private accountService: AccountService) { }

  getProjects()
  {
    // if (this.projects.length > 0 )
    // {
    //   return of(this.projects);
    // }

    return this.http.get<IProject[]>(this.baseUrl + 'projects').pipe(
      map(projects => {
        this.projects = projects;
        return projects;
      })
    );
  }

  getProject(id: number)
  {
    // const project = this.projects.find(x => x.id === id);
    // if (project !== undefined){
    //   return of(project);
    // }

    return this.http.get<IProject>(this.baseUrl + 'projects/' + id);
  }

  updateProject(project: IProject)
  {
      // convert priority to a number

     const kpriority: number = +project.priority;
     project.priority = kpriority;

     console.log('Services UPDATE - Projects Priority : ' + project.priority);
    // console.log('Services UPDATE - Projects : ' + project.id);
     console.log(project);
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
    console.log('Services - Projects : ' + this.projects.length);

    const kproject: IProject = {
      id: 0,
      name: project.name,
      owner: project.owner,
      active: true,
      started: new Date('01/01/2021'),
      deadline: new Date('01/01/2021'),
      completed: new Date('01/01/2021'),
      priority: 1,
      projectkey: 'Key',
      projectTypeId: 0
    };

    console.log('Services - Add Project : ' + kproject.name);

    return this.http.post(this.baseUrl + 'projects/', kproject).pipe(
      map(() => {
        this.projects.push(kproject);
      })
    );
  }

}
