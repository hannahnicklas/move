import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

 private authenticatedObject: any;

  private authKey = 'auth';

 setAuthenticatedObject(authenticatedObject) {
   window.localStorage.setItem(this.authKey, JSON.stringify(authenticatedObject));
  }

  getAuthenticatedObject() {
    const data = window.localStorage.getItem(this.authKey);
    return JSON.parse(data);
  }

  hasAuthenticatedObject() {
    return !!window.localStorage.getItem(this.authKey);
  }

  clear() {
    window.localStorage.removeItem(this.authKey);
  }

}
