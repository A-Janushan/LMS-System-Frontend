import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  coursesOpen = false;

  toggleCourses() {
    this.coursesOpen = !this.coursesOpen;

    // Add/remove class for smooth transition
    const content = document.querySelector('.accordion-content') as HTMLElement;
    if (this.coursesOpen) {
      content?.classList.add('show');
    } else {
      content?.classList.remove('show');
    }
  }
}
