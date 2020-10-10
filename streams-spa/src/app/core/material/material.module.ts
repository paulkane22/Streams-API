import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenav} from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatDialogModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatDialogModule,
    MatListModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
