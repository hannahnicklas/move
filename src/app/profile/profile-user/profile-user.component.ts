import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../../../assets/Data/Student';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {

 student: Student;

  constructor(private studentservice: StudentService, private authService: AuthService) { }

  ngOnInit() {

    // this.studentservice.getStudent(1).subscribe(student => this.student = student);
     this.student = this.authService.getAuthenticatedObject();

  }

}
