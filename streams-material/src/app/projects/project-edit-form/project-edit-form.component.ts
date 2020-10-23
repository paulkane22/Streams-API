import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectService } from 'src/app/core/services/project.service';
import { IProject } from 'src/app/_models/project';


@Component({
  selector: 'app-project-edit-form',
  templateUrl: './project-edit-form.component.html',
  styleUrls: ['./project-edit-form.component.css']
})
export class ProjectEditFormComponent implements OnInit {
  model: any;

  submitted = false;

  onSubmitted() {this.submitted = true;}


  constructor(private projectService: ProjectService, private snackBar: MatSnackBar) {
    this.model = {id: 0, name: 'Project One', active: true, owner: 'Paul'};
   }

  ngOnInit(): void {
  }

  get diagnostic() {return JSON.stringify(this.model); }

  onSubmit() {
    this.projectService.addProject(this.model).subscribe(() => {
      this.snackBar.open('Project Added');
    });
    console.log('Add Project: ' + this.model.name);
  }

}
