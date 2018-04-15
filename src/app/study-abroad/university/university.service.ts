import { Injectable } from '@angular/core';
import { University } from './University';
import { UNIS } from './unis-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UniversityService {

  constructor() { }

  getUnis(): Observable<University[]> {
    return of(UNIS);
  }

  getUniversity(id: number): Observable<University> {
    return of(UNIS.find(university => university.id === id));
  }
}
