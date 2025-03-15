import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/shared/landing-page/landing-page.component';
import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { StaffManagementComponent } from './components/admin/staff-management/staff-management.component';
import { StaffLayoutComponent } from './pages/staff/staff-layout/staff-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'staff',
        component: StaffLayoutComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./pages/admin/admin.module').then(
            (m) => m.AdminModule
          ),
      },
      
      {
        path: 'student',
        loadChildren: () =>
          import('./pages/student/student-routing.module').then(
            (m) => m.StudentRoutingModule
          ),
      }
     
    ];
