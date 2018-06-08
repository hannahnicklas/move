import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, mergeMap } from 'rxjs/operators';
import { Student } from '../../assets/Data/Student';
import { University } from '../../assets/Data/University';
import { UniversityService } from '../study-abroad/university/university.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService {

    private studentsUrl = 'api/students';

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
  updateStudent (student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, httpOptions);
  }

}
