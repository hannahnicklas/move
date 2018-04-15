import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { University } from '../../../assets/Data/University';

@Injectable()
export class UniversityService {

  constructor(private http: HttpClient
    ) { }
  private unisUrl = 'api/unis';

  getUnis(): Observable<University[]> {
    return this.http.get<University[]>(this.unisUrl);
  }

  getUniversity(id: number): Observable<University> {
    const url = `${this.unisUrl}/${id}`;
    return this.http.get<University>(url);
  }

}
