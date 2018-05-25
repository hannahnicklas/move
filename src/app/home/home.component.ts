import { Component, OnInit } from '@angular/core';
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
    console.log(this.authService);
  }

  /*fixNav() {
    document.getElementById('navPlaceholder').style.display = 'none';
     + (window.innerWidth - document.body.scrollTop);
  }*/

  doLogin() {
    this.studentService.getStudentByCredentials(this.model.username, this.model.password)
    .subscribe(users => this.authService.setAuthenticatedObject(users.pop()));
 // .subscribe(function (user) {this.authService.setAuthenticatedObject(user)}

  }

  doLogout() {
    this.authService.clear();
  }

}
