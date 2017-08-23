import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouteModule } from './route/route.module';
import { MaterializeModule } from 'angular2-materialize';
import { AuthModule } from './auth/auth.module';

import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './dashboard/menu.component';
import { ContraceptiveComponent } from './contraceptive/contraceptive.component';
import { ContraceptiveDetailsComponent } from './contraceptive/contraceptive-details.component';
import { AssessmentComponent } from './contraceptive/assessment/assessment.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ContraceptiveComponent,
    MenuComponent,
    ContraceptiveDetailsComponent,
    AssessmentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouteModule,
    MaterializeModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [
    UserService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
