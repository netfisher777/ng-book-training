import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  static readonly USERNAME = 'username';

  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'password') {
      localStorage.setItem(AuthService.USERNAME, user);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(AuthService.USERNAME);
  }

  getUser(): any {
    return localStorage.getItem(AuthService.USERNAME);
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
