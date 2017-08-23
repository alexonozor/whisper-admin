import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MenuComponent } from '../dashboard/menu.component';
import { ContraceptiveComponent } from '../contraceptive/contraceptive.component';
import { ContraceptiveDetailsComponent } from '../contraceptive/contraceptive-details.component'
import { AssessmentComponent } from '../contraceptive/assessment/assessment.component';
import { UserComponent } from '../user/user.component';
import { UserDetailsComponent } from '../user/user-details/user-details.component';
import { UsersComponent } from '../user/users/users.component';

const appRoutes: Routes = [
   { path: '',  component: LoginComponent },
   { path: 'signup', component: SignupComponent },
   { path: 'dashboard', component: DashboardComponent,
     children: [
        { path: '', component: MenuComponent },
        { path: 'users', component: UserComponent,
          children: [
           { path: '', component: UsersComponent},
           { path: ':id', component: UserDetailsComponent}
          ]  
        },
        { path: 'contraceptives', component: ContraceptiveComponent,
        children: [
         { path: ':id', component: ContraceptiveDetailsComponent, outlet: 'details' },
         { path: ':assessmentId',  component: AssessmentComponent, outlet: 'assessment' },
        ]
      }
     ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RouteModule { }
