import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogService } from 'src/app/core/services/confirm-dialog.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { IProject } from 'src/app/_models/project';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  myProject: IProject;
  registerForm: FormGroup;
  editMode = false;

  formTitle = '';

  constructor(
    private dialogService: ConfirmDialogService,
    private projectService: ProjectService,
    private notification: NotificationService,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef,
    private dialogRefx: MatDialogRef<ProjectEditComponent>, @Inject(MAT_DIALOG_DATA) data
    )
    {
      this.myProject = data;
    }

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm() {
    if (this.myProject.id > 0)
    {
      this.formTitle = 'Edit Project: ' + this.myProject.id;
      this.editMode = true;
    }
    else
    {
      this.editMode = false;
      this.myProject = this.projectService.getNewProject();
      this.formTitle = 'Add Project';
    }

    this.registerForm = this.fb.group({
      id: [this.myProject.id],
      name: [this.myProject.name, Validators.required],
      projectkey: [this.myProject.projectKey],
      productId: [this.myProject.productId],
      projectTypeId: [this.myProject.projectTypeId],
      active: [this.myProject.active],
      completed: [this.myProject.completed],
      organisationId: 1,
      workstream: '1',
      description: [this.myProject.description],
      owner: [this.myProject.owner],
      priority: [this.myProject.priority.toString()],
      startDate: [this.myProject.startDate],
      completedDate: [this.myProject.completedDate],
      deadlineDate: [this.myProject.deadlineDate],
      createdDate: [this.myProject.createdDate],
    });
  }


  onSubmit() {
    const myProject: IProject = this.registerForm.value;
    console.log(myProject);
    myProject.priority = +myProject.priority;
    myProject.workstreamId = 1;

    if (this.editMode === false)
    {
      this.projectService.addProject(this.registerForm.value).subscribe(response => {
        this.dialogRefx.close(true);
      });
    }
    else
    {
      this.projectService.updateProject(this.registerForm.value).subscribe(response => {
        this.dialogRefx.close(true);
      });
    }

  }

  cancel()
  {
    this.dialogRefx.close(false);
  }

  removeProject()
  {
    const options = {
      title: 'Confirm',
      message: 'Are you sure you wish to delete this project',
      cancelText: 'Cancel',
      confirmText: 'Delete'
    };

    const dialogRefx = this.dialogService.open(options);

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.projectService.deleteProject(this.registerForm.value).subscribe(response => {
          this.dialogRefx.close(true);
        }
        );
      }
    });
  }

}
