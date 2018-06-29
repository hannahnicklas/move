import { Component, OnInit, Input } from '@angular/core';
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

@Component({
  selector: 'app-profile-progress',
  templateUrl: './profile-progress.component.html',
  styleUrls: ['./profile-progress.component.scss']
})
export class ProfileProgressComponent implements OnInit {
  firstStage = true;
  secondStage = false;
  thirdStage = false;
  fourthStage = false;
  fifthStage = false;
  sixthStage = false;
  applicationFinished = false;
  student: Student; // student Objekt
  favorites: Favorite[]; // sind die favoriten vom Studenten


  constructor(
    private studentservice: StudentService,
    private authService: AuthService,
    private universityService: UniversityService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.student = this.authService.getAuthenticatedObject();
    this.getFavorites();

  }
  getFavorites(): void {
    this.studentservice.getFavorites()
      .subscribe(favorites => this.favorites = favorites);
  }
  initNextStage(stage: number) {
    switch (stage) {
      case 2: {
        this.switchAllSteps();
        this.secondStage = true;
        break;
      }
      case 3: {
        this.switchAllSteps();
        this.thirdStage = true;
        break;
      }
      case 4: {
        this.switchAllSteps();
        this.fourthStage = true;
        break;
      }
      case 5: {
        this.switchAllSteps();
        this.fifthStage = true;
        break;
      }
      case 6: {
        this.switchAllSteps();
        this.sixthStage = true;
        break;
      }
      default:
        break;
    }
  }
  switchAllSteps() {
    this.firstStage = false;
    this.secondStage = false;
    this.thirdStage = false;
    this.fourthStage = false;
    this.fifthStage = false;
    this.sixthStage = false;
  }
  finish() {
    this.switchAllSteps();
    this.applicationFinished = true;
  }

}