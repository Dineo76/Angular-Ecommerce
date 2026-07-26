import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../service/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  private authService = inject(AuthService);

  user: User = {
    id: 0,
    fullName: '',
    email: '',
    password: ''
  };

  showPassword = false;

  
nameError = '';
emailError = '';
passwordError = '';
confirmPasswordError = '';
successMessage = '';

confirmPassword = '';

  constructor() {

    const currentUser = this.authService.getCurrentUser();

    if (currentUser) {
      this.user = { ...currentUser };
    }

  }

updateProfile() {

  this.nameError = '';
  this.emailError = '';
  this.passwordError = '';
  this.confirmPasswordError = '';
  this.successMessage = '';

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!this.user.fullName.trim()) {

    this.nameError = 'Full name is required.';
    return;

  }

  if (!nameRegex.test(this.user.fullName)) {

    this.nameError =
      'Name can only contain letters and spaces.';
    return;

  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!this.user.email.trim()) {

    this.emailError = 'Email is required.';
    return;

  }

  if (!emailRegex.test(this.user.email)) {

    this.emailError = 'Please enter a valid email address.';
    return;

  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (!passwordRegex.test(this.user.password)) {

    this.passwordError =
      'Password must be at least 8 characters and include an uppercase letter, lowercase letter, number, and special character.';
    return;

  }

  if (this.user.password !== this.confirmPassword) {

    this.confirmPasswordError =
      'Passwords do not match.';
    return;

  }

  const updated = this.authService.updateProfile(this.user);

  if (!updated) {

    this.emailError =
      'This email address is already registered.';
    return;

  }

  this.successMessage =
    'Profile updated successfully!';

}

}