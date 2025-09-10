import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // Added
import { RouterModule } from '@angular/router'; // Added for router-outlet
import { FormsModule } from '@angular/forms'; // Added for ngModel
import { AuthInterceptor } from './interceptors/auth-interceptor'; // Added

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './components/login/login'; // Corrected path and class name
import { DashboardComponent } from './components/dashboard/dashboard'; // Corrected path and class name
import { ClientListComponent } from './components/client-list/client-list'; // Corrected path and class name
import { ClientFormComponent } from './components/client-form/client-form'; // Corrected path and class name

@NgModule({
  declarations: [
    App,
    LoginComponent,
    DashboardComponent,
    ClientListComponent,
    ClientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Added
    FormsModule // Added for ngModel
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } // Added
  ],
  bootstrap: [App]
})
export class AppModule { }
