import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../../../assets/Data/Student';
import { AuthService } from '../../auth/auth.service';
import { University } from '../../../assets/Data/University';
import { UniversityDataService } from '../../../assets/Data/university-data.service';
import { ActivatedRoute } from '@angular/router';
import { UniversityService } from '../../study-abroad/university/university.service';
import { Observable } from 'rxjs/Observable';
import { Favorite } from '../../../assets/Data/Favorite';
import { forEach } from '@angular/router/src/utils/collection';
import { Applied } from '../../../assets/Data/applied';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss']
})
export class ProfileNavComponent implements OnInit {

  constructor(
    private studentservice: StudentService,
    private authService: AuthService,
    private universityService: UniversityService,
    private route: ActivatedRoute) { }

  student: Student; // student Objekt
  applied: Applied; // applied Objekt

  ngOnInit() {
    this.student = this.authService.getAuthenticatedObject(); // student Objekt zuweisen
    this.getAppliedById(); // das applied Objekt holen
  }
  // hol sich applied Objekt aus const applied Datenbank mit der id 1 (gibt nur einen)
  getAppliedById(): void {
    this.studentservice.getAppliedById(1)
      .subscribe(applied => this.applied = applied);
  }
  // schaut ob der Student sein Ranking der Universitäten abgeschlossen hat
  hasApplied(): boolean {
    if (this.applied === undefined) {
      return;
    } else {
      return this.applied.hasApplied;
    }
  }
}
