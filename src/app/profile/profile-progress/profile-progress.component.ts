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

  // sind die einzelnen Schritte im Applikations-Progress
  // sind auch die *ngIf im HTML
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
  // holt sich die const favoriten aus der Datenbank
  getFavorites(): void {
    this.studentservice.getFavorites()
      .subscribe(favorites => this.favorites = favorites);
  }
  // schaltet die einzelnen Schritte je nach Nummereingabe frei/aus
  initNextStage(stage: number) {
    switch (stage) {
      case 1: {
        this.switchAllSteps();
        this.firstStage = true;
        break;
      }
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
  // schaltet alle Schritte aus
  switchAllSteps() {
    this.firstStage = false;
    this.secondStage = false;
    this.thirdStage = false;
    this.fourthStage = false;
    this.fifthStage = false;
    this.sixthStage = false;
  }
  // schließt den ganzen Applikations-progress ab
  finish() {
    this.switchAllSteps();
    this.applicationFinished = true;
  }

}
