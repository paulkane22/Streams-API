import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';

import { CoreModule } from './core/core.module';
import { TasksModule } from './tasks/tasks.module';
import { TasksComponent } from './tasks/tasks.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthModule } from './auth/auth.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './auth/_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { ProjectsModule } from './projects/projects.module';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { ProjectModule } from './project/project.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { ConfirmDialogComponent } from './_forms/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    TasksModule,
    ProjectsModule,
    ProjectModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TasksComponent
  ]
})
export class AppModule { }
