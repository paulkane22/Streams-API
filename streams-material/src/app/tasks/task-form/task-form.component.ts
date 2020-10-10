import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITask } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  myFormTitle = 'Add Task';
  myButtonText = 'Add';
  myForm: FormGroup;
  myTask: ITask;
  myID: number;
  


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TaskFormComponent>, 
    @Inject(MAT_DIALOG_DATA) data
    ) {
      this.myID = data.id;
      if (this.myID !== 0)
      {
        this.myFormTitle = 'Edit Task:' + this.myID;
        this.myButtonText = 'Update';
      }
      this.myTask = data;
    }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: [
        this.myTask.title,
        [
          Validators.required
        ]],

      description: this.myTask.description,
      priority: [this.myTask.priority, [Validators.required, Validators.min(1), Validators.max(3)]]
      ,
      last_updated: this.myTask.last_updated,
      active: this.myTask.active,
      status: this.myTask.status,
      complete: this.myTask.complete
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  submitForm(): void {
    if (this.myForm.valid)
    {
      this.dialogRef.close(this.myForm.value);
    }
  }

  onClose(): void {
  //  this.dialogRef.close();
  }

  onSubmit(): void {

  }

  get title() {
    return this.myForm.get('title');
  }
  
  get description() {
    return this.myForm.get('description');
  }
  
  get priority() {
    return this.myForm.get('priority');
  }
  
  get last_updated() {
    return this.myForm.get('last_updated');
  }

  get active() {
    return this.myForm.get('active');
  }

  get status() {
    return this.myForm.get('status');
  }

  get complete() {
    return this.myForm.get('complete');
  }



}
