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
import { Applied } from '../../../assets/Data/Applied';


@Component({
  selector: 'app-profile-application',
  templateUrl: './profile-application.component.html',
  styleUrls: ['./profile-application.component.scss']
})
export class ProfileApplicationComponent implements OnInit {

  firstStage = true;
  secondStage = false;
  thirdStage = false;
  fourthStage = false;
  fifthStage = false;
  sixthStage = false;

  applied: Applied;
  student: Student; // student Objekt
  favorites: Favorite[]; // sind die favoriten vom Studenten
  applicationIsReady: boolean; // set the finish Button ready
  finishApplication = false; // goes true if you press the finish Button

  receivedData: Array<any> = [];

  // this method gets the dragged data as an event and pushes it to the dropped array (receivedData)
  transferDataSuccess($event: any) {

    if ($event.dragData === undefined) {
      return;
    }
    if (this.receivedData.length >= 5) {
      return;

    }
    const university = $event.dragData;
    if (this.receivedData.indexOf(university) !== -1) {
      return;
    }
    this.receivedData.push(university);

  }
  constructor(
    private studentservice: StudentService,
    private authService: AuthService,
    private universityService: UniversityService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.applicationIsReady = false;
    this.student = this.authService.getAuthenticatedObject();
    this.getAppliedById();
    this.getFavorites();

  }
  getAppliedById(): void {
    this.studentservice.getAppliedById(1)
      .subscribe(applied => this.applied = applied);
  }

  // um die favs der Studenten zu bekommen
  getFavorites(): void {
    this.studentservice.getFavorites()
      .subscribe(favorites => this.favorites = favorites);
  }

  // method to set isFav to false
  setAsNotFav(favorite: Favorite): void {
    favorite.isFav = false;
    this.studentservice.updateIsFav(favorite).subscribe();
    // this.ngOnInit();
  }

  onDeleteUni(index: number) {
    this.receivedData.splice(index, 1);
  }
  // console log über die favortie elemente
  showFinishButton(): boolean {
    if (this.receivedData === undefined || this.favorites === undefined) {
      return false;
    }
    let counter = 0;
    for (let i = 0; i < this.favorites.length; i++) {
      if (this.receivedData[i] !== undefined) {
        counter++;
      }
    }
    if (counter >= 1) {
      this.applicationIsReady = true;
      return true;
    } else {
      return false;
    }
  }
  finishApp(): void {
    this.firstStage = false;
    this.finishApplication = true;
     // set applied status to true
     this.applied.hasApplied = true;
     console.log(this.applied.hasApplied);
     this.studentservice.updateHasApplied(this.applied).subscribe();
  }
}


