import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';

  showPassword = false;


  login(){

    if(!this.email || !this.password){

      alert('Please enter email and password.');
      return;

    }


    const success = this.authService.login(
      this.email,
      this.password
    );


    if(!success){

      alert('Invalid email or password.');
      return;

    }


    alert('Login successful!');


    // clear fields
    this.email = '';
    this.password = '';


    this.router.navigate(['/']);

  }

}