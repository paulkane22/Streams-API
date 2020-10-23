import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/core/services/project.service';
import { IProject } from 'src/app/_models/project';

@Component({
  selector: 'app-project-edit-reactive',
  templateUrl: './project-edit-reactive.component.html',
  styleUrls: ['./project-edit-reactive.component.css']
})
export class ProjectEditReactiveComponent implements OnInit {
  model: any = {};
  myProject: IProject;
  registerForm: FormGroup;

  constructor(
    private projectService: ProjectService , 
    private snackBar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProjectEditReactiveComponent>, @Inject(MAT_DIALOG_DATA) data
    )
    {
      this.myProject = data;
    }

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm() {
    // using form builder service
    this.registerForm = this.fb.group({
      id: [this.myProject.id],
      name: [this.myProject.name, Validators.required],
      owner: [this.myProject.owner, [Validators.required]],
      active: [this.myProject.active],
      priority: [this.myProject.priority.toString()],
      started: [this.myProject.started, Validators.required ],
      deadline: [this.myProject.deadline, Validators.required ],
      completed: [this.myProject.completed, Validators.required ],
      projectKey: [this.myProject.projectkey ]
    });

    // this.registerForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   owner: new FormControl('Paul', [Validators.required]),
    //   active: new FormControl(true),
    //   priority: new FormControl(1),
    //   started: new FormControl(),
    //   deadline: new FormControl(),
    //   completed: new FormControl(),
    // });
  }


  // checks if a control matches another control value
  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : {isMatching: true};
    };

  }

  register() {
    console.log('REACTIVE UPDATE - Projects Priority : ' + this.registerForm.value);
    this.projectService.updateProject(this.registerForm.value).subscribe(response => {
      this.openSnackBar('Project Updated Successfully')
      this.dialogRef.close();
      }, error => {
        this.openSnackBar('There is a problem saving the project');
      });

  }

  cancel() {
    this.openSnackBar('Edit Cancelled');
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }
}
