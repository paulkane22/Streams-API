import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/core/services/project.service';
import { IProject } from 'src/app/_models/project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit, AfterViewInit {
  myProject: IProject;
  myId = 0;

  myFormTitle = 'Add PROJECT';



    // id: number;
    // name: string;
    // projectkey: string;
    // owner: string;
    // active: boolean;
    // priority: number;
    // projectTypeId: number;
    // started: Date;
    // completed: Date;
    // deadline: Date;

  myForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    projectName: new FormControl('Project NAME', Validators.required),
    owner: new FormControl(''),
    active: new FormControl(true),
    priority: new FormControl('2'),
    started: new FormControl(''),
    completed: new FormControl(''),
    deadline: new FormControl(''),
  });



  constructor(
    private projectService: ProjectService, private route: ActivatedRoute, private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProjectItemComponent>, @Inject(MAT_DIALOG_DATA) data)
    {
       this.myProject = data;
    }


  ngOnInit(): void {
    this.myId = this.myProject.id;
  }

  ngAfterViewInit(): void {
  }

  submitForm(): void {
    if (this.myForm.valid)
    {
      this.dialogRef.close(this.myForm.value);
    }
  }

  onClear() {
    this.myForm.reset();
    this.dialogRef.close(this.myForm.value);
  }

}
