import { Injectable } from '@angular/core';

/**
Der Auth Service speichert nach erfolgreichem Abgleicher der Daten mit der Datenbank (passiert unter home) den
eingeloggten Studenten im Local Stoarge und kann ihn bei Bedarf (User loggt sich aus) wieder entfernen.
Damit umgehen wir das Problem, dass der Nutzer mit einem Shift Reload der Seite automatisch ausgeloggt wird
da wir, weil wir nur eine Angular pseudo Datenbank verwendet haben, nicht zu Laufzeit in unsere Datenbank
schreiben können.
*/
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
