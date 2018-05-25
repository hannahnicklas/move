import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

 private authenticatedObject: any;

 setAuthenticatedObject(authenticatedObject) {
    this.authenticatedObject = authenticatedObject;
  }

  getAuthenticatedObject() {
    return this.authenticatedObject;
  }

  hasAuthenticatedObject() {
    return !!this.authenticatedObject;
  }

  clear() {
    this.authenticatedObject = null;
  }

}
