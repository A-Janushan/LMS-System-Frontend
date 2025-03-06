import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import { StudentDashboardComponent } from '../../components/student/student-dashboard/student-dashboard.component';
import { CoursesComponent } from '../../components/student/courses/courses.component';
import { ScheduleComponent } from '../../components/student/schedule/schedule.component';
import { AssesmentsComponent } from '../../components/student/assesments/assesments.component';
import { SettingsComponent } from '../../components/student/settings/settings.component';
import { NotificationsComponent } from '../../components/student/notifications/notifications.component';
import { MaterialsComponent } from '../../components/student/materials/materials.component';

const routes: Routes = [{
  path:'',
  component:StudentLayoutComponent,
  canActivate:[],
  children:[
    {
      path: 'student_dashboard',
      component: StudentDashboardComponent,
    },
    {
      path: 'courses',
      component: CoursesComponent,
      children: [
        
      ],
    }, 
    {
      path: 'schedule',
      component:ScheduleComponent,
    },
    {
      path: 'assesments',
      component:AssesmentsComponent,
    },
    {
      path: 'materials',
      component:MaterialsComponent,
    },
    {
      path: 'settings',
      component:SettingsComponent,
    },
    {
      path: 'notifications',
      component:NotificationsComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
