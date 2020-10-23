import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/core/services/project.service';
import { IProject } from 'src/app/_models/project';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: IProject;
  myId = 0;
  myForm: FormGroup;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadProject();

    this.myForm = this.fb.group({
      name: [
        this.project.name,
        [
          Validators.required
        ]],

      active: this.project.active
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  loadProject() {
      this.myId = +this.route.snapshot.paramMap.get('id');
      this.projectService.getProject(this.myId).subscribe(project => {
      this.project = project;
    });
  }

}
