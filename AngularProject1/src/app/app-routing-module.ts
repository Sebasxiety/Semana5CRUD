import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login'; // Import LoginComponent
import { DashboardComponent } from './components/dashboard/dashboard'; // Import DashboardComponent
import { ClientListComponent } from './components/client-list/client-list'; // Import ClientListComponent
import { ClientFormComponent } from './components/client-form/client-form'; // Import ClientFormComponent
import { AuthGuard } from './guards/auth-guard'; // Import AuthGuard

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'clients', component: ClientListComponent },
      { path: 'clients/add', component: ClientFormComponent },
      { path: 'clients/edit/:id', component: ClientFormComponent },
      { path: '', redirectTo: 'clients', pathMatch: 'full' } // Default child route
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route to login
  { path: '**', redirectTo: '/login' } // Wildcard route for any other path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
