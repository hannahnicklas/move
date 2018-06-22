import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../../../assets/Data/Student';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit, AfterViewChecked {

  // edit button handler if edit is pressed then this goes true
  edit = false;

 student: Student;

  constructor(private studentservice: StudentService, private authService: AuthService) { }

  ngOnInit() {

    // old code: this.studentservice.getStudent(1).subscribe(student => this.student = student);

    // gets the student-objekt that is actually logged in and puts it in this.student
     this.student = this.authService.getAuthenticatedObject();
  }

  ngAfterViewChecked() {
    document.getElementById('profilepic').setAttribute('style', 'height: 200px; width: auto;');
  }
  // updates the fake Database with the new entered data of the user
  save(): void {
    // set back to non edit after save button is pressed
    this.edit = !this.edit;
    // calls the Method in studentservice to update the data
    this.studentservice.updateStudent(this.student);
  }
  logOut() {
    this.authService.clear();
  }
}
