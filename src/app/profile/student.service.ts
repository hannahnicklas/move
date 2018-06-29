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

  private studentsUrl = 'api/students';
  private favoritesUrl = 'api/favorites';
  private appliedUrl = 'api/applied';

  constructor(private http: HttpClient,
    private uniService: UniversityService
  ) { }


  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

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
  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, httpOptions);
  }
  // to update the boolean isFav in favorites
  updateIsFav(favorites: Favorite): Observable<any> {
    return this.http.put(this.favoritesUrl, favorites, httpOptions);
  }
  /* updateStudentUniversity(student: Student, university: Observable<University>): Observable<any> {
    const url = `${this.studentsUrl}/${student.id}/universities`;
    return this.http.post(url, university, httpOptions);
  } */
  updateStudentUniversity(student: Student, university: Observable<University>): Observable<any> {
    console.log(this.http.post<University>(this.studentsUrl, university, httpOptions));
    console.log(university);
    return this.http.post<University>(this.studentsUrl, university, httpOptions);
  }
  getFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(this.favoritesUrl);
  }
  addUni(favorite: Favorite): Observable<Favorite> {
    return this.http.post<Favorite>(this.favoritesUrl, favorite, httpOptions);
  }
  getFavById(id: number): Observable<Favorite> {
    const url = `${this.favoritesUrl}/${id}`;
    return this.http.get<Favorite>(url).pipe(
      catchError(this.handleError<Favorite>(`getFavById id=${id}`)));
  }
  updateHasApplied(applied: Applied): Observable<any> {
    return this.http.put(this.appliedUrl, applied, httpOptions);
  }
  getApplied(): Observable<Applied[]> {
    return this.http.get<Applied[]>(this.appliedUrl);
  }
  getAppliedById(id: number): Observable<Applied> {
    const url = `${this.appliedUrl}/${id}`;
    return this.http.get<Applied>(url).pipe(
      catchError(this.handleError<Applied>(`getFavById id=${id}`)));
  }
  // Observable<University>
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

