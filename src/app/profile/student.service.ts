import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, mergeMap } from 'rxjs/operators';
import { Student } from '../../assets/Data/Student';
import { University } from '../../assets/Data/University';
import { UniversityService } from '../study-abroad/university/university.service';
import { Favorite } from '../../assets/Data/Favorite';
import { Applied } from '../../assets/Data/Applied';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService {

  private studentsUrl = 'api/students'; // const student aus Db
  private favoritesUrl = 'api/favorites'; // const favorites aus Db
  private appliedUrl = 'api/applied'; // const applied aus Db

  constructor(private http: HttpClient,
    private uniService: UniversityService
  ) { }

  // gibt alle Studenten zurück
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }
  // gibt Student aus der Datenbank mit der eingegebenen ID zurück
  getStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url);
  }

  getStudentByCredentials(username: string, password: string) {
    // gib Student zurück mit username
    const url = `${this.studentsUrl}?username=${username}`;
    console.log(url);
    return this.http.get<Student[]>(url)
      .pipe(map(students => students.pop()))
      .pipe(mergeMap(student => this.uniService.getUniversitiesForStudent((student as any).universityIDs), (student, universities) => {
        student.universities = universities;
        return student;
      }));
  }
  // überschreibt die Daten des Studenten in der Datenbank
  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, httpOptions);
  }
  // überschreibt/updated die favoriten in der const favorites Datenbank
  updateIsFav(favorites: Favorite): Observable<any> {
    return this.http.put(this.favoritesUrl, favorites, httpOptions);
  }
  // gibt alle Favoriten im const favorites Datenbank
  getFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(this.favoritesUrl);
  }
  // gibt den favoriten mit bestimmter ID in der const favorites Datenbank zurück
  getFavById(id: number): Observable<Favorite> {
    const url = `${this.favoritesUrl}/${id}`;
    return this.http.get<Favorite>(url).pipe(
      catchError(this.handleError<Favorite>(`getFavById id=${id}`)));
  }
  // überschreibt/updated den const applied in der Datenbank
  updateHasApplied(applied: Applied): Observable<any> {
    return this.http.put(this.appliedUrl, applied, httpOptions);
  }
  // gibt den const applied array von der Datenbank zurück
  getApplied(): Observable<Applied[]> {
    return this.http.get<Applied[]>(this.appliedUrl);
  }
  // gibt den applied mit der bestimmten ID aus der const applied Datenbank zurück
  getAppliedById(id: number): Observable<Applied> {
    const url = `${this.appliedUrl}/${id}`;
    return this.http.get<Applied>(url).pipe(
      catchError(this.handleError<Applied>(`getFavById id=${id}`)));
  }
  // Errorhandling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

