import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.css'
})
export class StudentLayoutComponent {

  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  constructor
  (
    private router:Router
  ) {}


  logout() {
    // Clear local storage
    localStorage.clear();

    // Redirect to the home page
    this.router.navigate(['/']);
  }
}
