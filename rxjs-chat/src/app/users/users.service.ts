import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from '../user/user.model';

@Injectable()
export class UsersService {
  currentUser: Subject<User> = new BehaviorSubject(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export const usersServiceInjectables = [
  UsersService
];
