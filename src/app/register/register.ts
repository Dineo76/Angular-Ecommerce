import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../service/auth.service';
import { User } from '../models/user.model'; // Change to models if your folder is named models

@Component({
  selector: 'app-register',
  standalone: true,
   imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  user: User = {
    id: 0,
    fullName: '',
    email: '',
    password: ''
  };

  confirmPassword = '';

  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {

    // Check if all fields are filled
    if (
      !this.user.fullName ||
      !this.user.email ||
      !this.user.password ||
      !this.confirmPassword
    ) {
      alert('Please fill in all fields.');
      return;
    }

    // Check passwords match
    if (this.user.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Generate a simple ID
    this.user.id = Date.now();

    // Register user
    const success = this.authService.register(this.user);
    if (
  !this.user.fullName ||
  !this.user.email ||
  !this.user.password ||
  !this.confirmPassword
) {
  alert('Please fill in all fields.');
  return;
}

const nameRegex = /^[A-Za-z\s]+$/;

if (!nameRegex.test(this.user.fullName.trim())) {
  alert('Full name can only contain letters.');
  return;
}

if (this.user.fullName.trim().length < 3) {
  alert('Full name must be at least 3 characters long.');
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(this.user.email.trim())) {
  alert('Please enter a valid email address.');
  return;
}

const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

if (!passwordRegex.test(this.user.password)) {
  alert(
    'Password must be at least 8 characters and include an uppercase letter, a lowercase letter, and a number.'
  );
  return;
}
    if (!success) {
      alert('An account with this email already exists.');
      return;
    }

    alert('Registration successful!');

    this.router.navigate(['/login']);
  }

  
}