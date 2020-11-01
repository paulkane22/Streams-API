import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/_forms/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  dialogRef2: MatDialogRef<ConfirmDialogComponent>;

  public open(options) {
    this.dialogRef2 = this.dialog.open(ConfirmDialogComponent, {
         data: {
           title: options.title,
           message: options.message,
           cancelText: options.cancelText,
           confirmText: options.confirmText
         }
    });
  }

  public confirmed(): Observable<any> {

    return this.dialogRef2.afterClosed().pipe(take(1), map(res => {
      return res;
    }
  ));
  }


}
