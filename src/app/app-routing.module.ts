import { LoginRedirect } from './services/login-redirect.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DevsComponent } from './devs/devs.component';


const routes: Routes = [
      {  
        path: '', 
        component: LoginComponent,
        // canActivate:[LoginRedirect]
      },      
      {  
        path: 'login', 
        component: LoginComponent
      },
      {  
        path: 'admin', 
        component: AdminComponent,
        canActivate:[LoginRedirect]
      }, 
      {  
        path: 'devs', 
        component: DevsComponent,
        // canActivate:[LoginRedirect]
      }, 
      { 
        path: '**', 
        component: LoginComponent,
        // canActivate:[LoginRedirect]
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }