import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkAuthentication(): string | null {
    return sessionStorage.getItem('loggedInUser')
  }
}
