import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminDashboardComponent } from '../../components/admin/admin-dashboard/admin-dashboard.component';
import { BatchComponent } from '../../components/admin/batch/batch.component';
import { CourseComponent } from '../../components/admin/course/course.component';
import { GroupComponent } from '../../components/admin/group/group.component';

const routes: Routes = [{
  path : '',
  component:AdminLayoutComponent ,
  
  children:[
    {
      path: 'admin_dashboard',
      component: AdminDashboardComponent,
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
