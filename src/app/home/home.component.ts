import { Component, OnInit, HostListener } from '@angular/core';
import { StudentService } from '../profile/student.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  model: any = {username: '', password: ''};
  constructor(private studentService: StudentService, public authService: AuthService) { }

  ngOnInit() {
    // this.fixNav();
    document.getElementById('main-nav').style.backgroundColor = ('rgba(0,0,0,0)');
    console.log(this.authService);
  }


  doLogin() {
    this.studentService.getStudentByCredentials(this.model.username, this.model.password)
    .subscribe(users => this.authService.setAuthenticatedObject(users));
 // .subscribe(function (user) {this.authService.setAuthenticatedObject(user)}

  }

  doLogout() {
    this.authService.clear();
  }
}
