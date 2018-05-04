import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Student } from '../../assets/Data/Student';

@Injectable()
export class StudentService {

    private studentsUrl = 'api/students';

  constructor(private http: HttpClient
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
    return this.http.get<Student[]>(url);
  }

}
