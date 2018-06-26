import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, throttle, throttleTime, delay } from 'rxjs/operators';
import { University } from '../../../assets/Data/University';
import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
/**
 * Service um Universitäten aus der Datenbank zu laden.
 */
@Injectable()
export class UniversityService {

  constructor(private http: HttpClient
  ) { }
  private unisUrl = 'api/unis';

  getUnis(): Observable<University[]> {
    return this.http.get<University[]>(this.unisUrl);
  }

  async getUnisAsync() {
    const response = await this.http.get(this.unisUrl).toPromise();
    return response;
  }

  getUniversity(id: number): Observable<University> {
    const url = `${this.unisUrl}/${id}`;
    return this.http.get<University>(url);
  }

  // hier noch die richtige ID bekommen Implementieren
  getUniversitiesForStudent(ids: number[]) {
    return this.http.get<University[]>(this.unisUrl);
  }
}
