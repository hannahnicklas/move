import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../../../assets/Data/Student';
import { AuthService } from '../../auth/auth.service';
import { University } from '../../../assets/Data/University';
import { UniversityDataService } from '../../../assets/Data/university-data.service';

@Component({
  selector: 'app-profile-application',
  templateUrl: './profile-application.component.html',
  styleUrls: ['./profile-application.component.scss']
})
export class ProfileApplicationComponent implements OnInit {

  student: Student;
  // here should be uni DB
  // uni: University;

  constructor( private studentservice: StudentService, private authService: AuthService) { }

  ngOnInit() {

    // this.studentservice.getStudent(1).subscribe(student => this.student = student);
     this.student = this.authService.getAuthenticatedObject();

  }
  // console log über die favortie elemente
  myLog() {
    for (let i = 0; i <  this.student.universities.length; i++) {
      console.log(this.student.universities[i].name);
    }
  }
  // method to get uniname with student id
  /*   getUniversity(id: number): string {
       if (this.student.university === id) {
         return this.uni.name;
       }
   } */

}
