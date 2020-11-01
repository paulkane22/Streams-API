import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { IProject } from 'src/app/_models/project';
import { ProjectEditComponent } from '../project-edit/project-edit.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  filter = '';

  dataSource = new MatTableDataSource<IProject>();
  displayedColumns: string[] = [
    'id', 'project_image',  'name', 'active', 'completed', 'project-key', 'priority', 'workstream',
      'owner', 'startDate', 'deadlineDate', 'completedDate', 'createdDate' ];


     // ** Available columns **
     // number *
     // project_image *
     // id
     // name *
     // project-key *
     // project-type
     // workstream
     // organisation
     // active *
     // description
     // owner *
     // priority *
     // completed *
     // deadlineDate *
     // startDate *
     // completedDate *
     // createdDate *
     // actions


  isLoadingResults = true;
  resultsLength = 0;

  constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService,
    private projectService: ProjectService,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.isLoadingResults = true;
    return this.projectService.getProjects().subscribe(data => {
      this.isLoadingResults = false;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.changeDetectorRefs.detectChanges();
      this.resultsLength = data.length;
    });
  }

  onEditProject(project: IProject)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '800px';
    dialogConfig.data = project;
    const dialogRef1 = this.dialog.open(ProjectEditComponent, dialogConfig).afterClosed().subscribe(result => {
     // this.notification.openSnackBar('PROJECT UPDATED');
     console.log('RESULT:' + result);
     if (result)
     {
      this.refresh();
     }
    });
  }

  onAddProject()
  {
    const myProject: any = this.projectService.getNewProject();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '800px';
    dialogConfig.data = myProject;
    const dialogRef = this.dialog.open(ProjectEditComponent, dialogConfig).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  onRemoveProject()
  {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  clear_filter()
  {
    this.dataSource.filter = '';
    this.filter = '';
  }
}
