import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseComponent } from 'src/app/core/components/base.component';
import { APIZephyrus } from '../config/config.core';
import { Observable } from 'rxjs';
import { LoginUserInterface, Pagination, User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseComponent {

  private APIZAuth: string = APIZephyrus.Auth;

  constructor(private httpClient: HttpClient) {
    super();
  }

  createUser(user: User): Observable<any> {
    return this.httpClient.post<User>(`${this.APIZAuth}/register`, user);
  }

  loginUser(loginUserInterface: LoginUserInterface): Observable<any> {
    return this.httpClient.post<any>(`${this.APIZAuth}/login`, loginUserInterface);
  }

  checkAuthStatus(): Observable<User> {
    return this.httpClient.get<any>(`${this.APIZAuth}/check-status`);
  }

  findAll(pagination: Pagination): Observable<User[]> {
    const { limit, offset } = pagination;
    return this.httpClient.get<any>(`${this.APIZAuth}/users?limit=${limit}&offset=${offset}`);
  }

}
