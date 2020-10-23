import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { ITask, TaskService } from '../core/services/task.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { TaskFormComponent } from './task-form/task-form.component';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: any;
  ELEMENT_DATA2: ITask[];
  ELEMENT: ITask;
  displayedColumns: string[] = [
    'id', 'title', 'description', 'priority',
   'last_updated', 'active', 'status', 'complete', 'actions'
  ];


  constructor( private snackBar: MatSnackBar, private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.ELEMENT_DATA2 = this.taskService.getTasks();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA2);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  // 'id', 'title', 'description', 'priority',
  // 'last_updated', 'active', 'status', 'complete', 'actions'

  addNewTask(): void {
    this.openSnackBar('Add Task');
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = {id: 0, title: '', priority: 1};
    const dialogRef = this.dialog.open(TaskFormComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(
      data => this.ELEMENT_DATA2.push(data)
    );
  }


  onRemove(row): void {
    this.taskService.removeTask(row);
    this.ELEMENT_DATA2 = this.taskService.getTasks();
    this.dataSource.data = this.ELEMENT_DATA2;
    this.openSnackBar('Removed Task ' + row.id);
  }


  onEdit(row): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = row;
    const dialogRef = this.dialog.open(TaskFormComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(
      data => {
        this.ELEMENT = data;
        console.log('UPDATING:' + data.title);
        for (let i in this.ELEMENT_DATA2) {
          if (this.ELEMENT_DATA2[i].id === this.ELEMENT.id) {
            console.log('ARRAY:' + this.ELEMENT_DATA2[i].id);
            this.openSnackBar('Edit Task Found');
            this.ELEMENT_DATA2[i] = this.ELEMENT;
            break;
          }
        }
        this.dataSource.data = this.ELEMENT_DATA2;
      }
    );
  }


  openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clear_filter() {

  }
}
