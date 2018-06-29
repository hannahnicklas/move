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

  edit = false; // edit button
  student: Student;

  constructor(private studentservice: StudentService, private authService: AuthService) { }

  ngOnInit() {
    this.student = this.authService.getAuthenticatedObject();
  }

  ngAfterViewChecked() {
    document.getElementById('profilepic').setAttribute('style', 'height: 200px; width: auto;');
  }
  // überschreibt/updated die eingetragenen Daten des Studenten in die Datenbank
  save(): void {
    this.edit = !this.edit; // schaltet den Edit button um
    this.studentservice.updateStudent(this.student);
  }
  // loggt den Studenten aus
  logOut() {
    this.authService.clear();
  }
}
