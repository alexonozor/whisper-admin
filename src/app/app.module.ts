import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouteModule } from './route/route.module';
import { MaterializeModule } from 'angular2-materialize';
import { AuthModule } from './auth/auth.module';
import { GooglePlaceModule } from 'ng2-google-place-autocomplete';
import { DndModule } from 'ng2-dnd';


import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { AssessmentService } from './assessment.service';
import { PhamaciesService } from './phamacies.service';
import { HospitalService } from './hospital.service';
import { NotificationService } from './notification.service';
import { ThreadService } from './thread.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './dashboard/menu.component';
import { ContraceptiveComponent } from './contraceptive/contraceptive.component';
import { ContraceptiveDetailsComponent } from './contraceptive/contraceptive-details.component';
import { AssessmentComponent } from './contraceptive/assessment/assessment.component';
import { AssessmentResponseComponent } from './contraceptive/assessment-response/assessment-response.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UsersComponent } from './user/users/users.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { NotificationComponent } from './notification/notification.component';
import { ContactUsersComponent } from './contact-users/contact-users.component';
import { HospitalComponent } from './hospital/hospital.component';





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
    UserComponent,
    UserDetailsComponent,
    UsersComponent,
    UserNewComponent,
    UserEditComponent,
    PharmacyComponent,
    AssessmentResponseComponent,
    ShippingComponent,
    SearchFilterPipe,
    NotificationComponent,
    ContactUsersComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouteModule,
    MaterializeModule,
    ReactiveFormsModule,
    AuthModule,
    GooglePlaceModule,
    DndModule.forRoot()
  ],
  providers: [
    UserService,
    AuthenticationService,
    AssessmentService,
    PhamaciesService,
    NotificationService,
    ThreadService,
    HospitalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
