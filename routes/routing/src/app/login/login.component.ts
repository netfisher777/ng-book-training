import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string;

  constructor(public authService: AuthService) {
    this.clearMessage();
  }

  login(username: string, password: string): boolean {
    this.clearMessage();
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials';
      setTimeout(function () {
        this.clearMessage();
      }.bind(this), 2500);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

  clearMessage(): void {
    this.message = '';
  }

}
