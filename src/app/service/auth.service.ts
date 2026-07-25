import { Injectable } from '@angular/core';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USERS_KEY = 'users';
  private CURRENT_USER_KEY = 'currentUser';

  register(user: User): boolean {

    const users = this.getUsers();

    const exists = users.find(
      u => u.email === user.email
    );

    if (exists) {
      return false;
    }

    users.push(user);

    localStorage.setItem(
      this.USERS_KEY,
      JSON.stringify(users)
    );

    return true;
  }

  login(email: string, password: string): boolean {

    const users = this.getUsers();

    const user = users.find(
      u =>
        u.email === email &&
        u.password === password
    );

    if (!user) {
      return false;
    }

    localStorage.setItem(
      this.CURRENT_USER_KEY,
      JSON.stringify(user)
    );

    return true;
  }

  logout(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.CURRENT_USER_KEY);
  }

  getCurrentUser(): User | null {
  return JSON.parse(
    localStorage.getItem(this.CURRENT_USER_KEY) || 'null'
    );
  }

  private getUsers(): User[] {
    return JSON.parse(
      localStorage.getItem(this.USERS_KEY) || '[]'
    );
  }
}