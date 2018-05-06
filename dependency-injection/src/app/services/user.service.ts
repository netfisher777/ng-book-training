import {Injectable} from '@angular/core';

@Injectable()
export  class UserService {
  user: any;

  setUser(user) {
    this.user = user;
  }

  getUser(): any {
    return this.user;
  }
}
