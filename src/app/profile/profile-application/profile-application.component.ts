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
  transferData: Object = {id: 1, msg: 'Hello'};
    receivedData: Array<any> = [];

    transferDataSuccess($event: any) {
      if (this.receivedData.length < 5 ) {
        this.receivedData.push($event);
        console.log($event.dragData.msg);
      }
    }
    // {{data | json}} to show everything
    logThatShit(data: any) {
      console.log(data);
    }


  constructor( private studentservice: StudentService, private authService: AuthService) { }

  ngOnInit() {

    // this.studentservice.getStudent(1).subscribe(student => this.student = student);
     this.student = this.authService.getAuthenticatedObject();


  }
  onDeleteUni(index: number) {
    this.receivedData.splice(index, 1);
  }
  // console log über die favortie elemente
  myLog() {
    for (let i = 0; i <  this.student.universities.length; i++) {
      console.log(this.student.universities[i].name);
    }
  }
  /* fillUnis() {
    for (let i = 0; i < this.student.universities.length; i++) {
      this.unis[i] = this.student.universities[i].name;
    } */
  }
  // method to get uniname with student id
  /*   getUniversity(id: number): string {
       if (this.student.university === id) {
         return this.uni.name;
       }
   } */


