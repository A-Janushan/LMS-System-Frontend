import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-student-management',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, FontAwesomeModule, HttpClientModule],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.css'
})
export class StudentManagementComponent {
selectedClassId: any;
userRole: any;
classes: any;
filteredStudents: any;
onClassChange() {
throw new Error('Method not implemented.');
}
DeleteStudent(arg0: any) {
throw new Error('Method not implemented.');
}
EditStudent(arg0: any) {
throw new Error('Method not implemented.');
}

}
