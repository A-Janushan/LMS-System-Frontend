import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import the FontAwesomeModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, FontAwesomeModule, HttpClientModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  template: `<i class="fa-brands fa-java"></i>`,

})
export class LandingPageComponent {
  
}
