import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from '../../components/admin/admin-dashboard/admin-dashboard.component';
import { BatchComponent } from '../../components/admin/batch/batch.component';
import { CourseComponent } from '../../components/admin/course/course.component';
import { GroupComponent } from '../../components/admin/group/group.component';
import { StaffManagementComponent } from '../../components/admin/staff-management/staff-management.component';
import { StudentManagementComponent } from '../../components/admin/student-management/student-management.component';
import { LecturerManagementComponent } from '../../components/admin/lecturer-management/lecturer-management.component';

const routes: Routes = [{
  path : '',
  component:AdminLayoutComponent ,
  
  children:[
    {
      path: 'admin_dashboard',
      component: AdminDashboardComponent,
    },
    {
      path: 'staffmanagement',
      component: StaffManagementComponent,
    },
   
    {
      path: 'studentmanagement',
      component: StudentManagementComponent,
    },

    {
      path: 'lecturesmanagement',
      component: LecturerManagementComponent,
    }
   
    // {
    //   path: 'course',
    //   component: CourseComponent,
    //   children: [
    //     {path: 'batch',component: BatchComponent},
    //     {path:'group',component:GroupComponent}
    //   ],
    // },
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
