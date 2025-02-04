import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
    return this.http.post('/MyApI/Login/Login', JSON.stringify(credentials));
  }

  logout() { 
  }

  isLoggedIn() { 
    return false;
  }
}