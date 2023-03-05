import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
 
  private loggedIn = false;

  constructor() {}

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}

