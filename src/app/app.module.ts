import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DevsComponent } from './devs/devs.component';
import { LoginService } from './services/login.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginRedirect } from './services/login-redirect.service';
import { UsersService } from './services/users.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DevsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  
    
  ],
  providers: [
    LoginService,
    LoginRedirect,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
