import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {HttpClient} from '@angular/common/http';
import { ProjectService } from '../core/services/project.service';
import { IProject } from '../_models/project';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProjectEditReactiveComponent } from './project-edit-reactive/project-edit-reactive.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

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


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  displayedColumns: string[] = [
    'profile_image', 'name', 'priority', 'active',
     'started', 'deadline',  'owner', 'project-key', 'created' ];

  dataSource = new MatTableDataSource<IProject>();
  projects: any;

  resultsLength;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private projectService: ProjectService,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
    ) {}

  ngOnInit()
  {
    this.refresh();
  }



refresh() {
  this.isLoadingResults = true;
  this.projectService.getProjects().subscribe(data => {
    this.projects = data;
  });

  return this.projectService.getProjects().subscribe(data => {
    this.isLoadingResults = false;
    this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.changeDetectorRefs.detectChanges();
    this.resultsLength = data.length;
  });
}


  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '800px';
    dialogConfig.data = row;
    const dialogRef = this.dialog.open(ProjectEditReactiveComponent, dialogConfig).afterClosed().subscribe(result => {
      this.refresh();
    });
}



  applyFilter(event: Event) {
  }

  clear_filter() { }

  addProject(){
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }
}

