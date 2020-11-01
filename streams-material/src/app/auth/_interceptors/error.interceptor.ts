import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { NotificationService } from 'src/app/core/services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private notificationService: NotificationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.errors)
              {
                const modalStateErrors = [];
                for (const key in error.error.errors) {
                  if (error.error.errors[key]) {
                    modalStateErrors.push(error.error.errors[key]);
                  }
                }
                throw modalStateErrors.flat();
              }
              else
              {
                this.notificationService.openSnackBar(error.statusText);

                // this.snackbar.open(error.statusText, error.status,
                //   {
                //     duration: 2000,
                //     horizontalPosition: 'center',
                //     verticalPosition: 'bottom',
                //     panelClass: ['mat-toolbar', 'mat-primary']
                //   }
                //   );
              }
              break;
            case 401:
              this.notificationService.openSnackBar(error.statusText);
              // this.snackbar.open(error.statusText, error.status,
              // {
              //   duration: 2000,
              //   horizontalPosition: 'center',
              //   verticalPosition: 'bottom',
              //   panelClass: ['mat-toolbar', 'mat-primary']
              // }
              // );
              break;
            case 404:
              this.notificationService.openSnackBar('Not FOUND');
              this.router.navigateByUrl('/not-found');
              break;
            case 500:
              const navigationExtras: NavigationExtras = {state: {error: error.error}};
              this.router.navigateByUrl('/server-error', navigationExtras);
              break;
            default:
              this.notificationService.openSnackBar('Something unexpected went wrong');
              console.log(error);
              break;
          }
        }
        return throwError(error);
      })
    );
  }
}
