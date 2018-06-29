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

  applied: Applied;
  student: Student; // student Objekt
  favorites: Favorite[]; // sind die favoriten vom Studenten
  applicationIsReady: boolean; // um den finish button anzuzeigen
  finishApplication = false; // wird true wenn finish Button gedrückt wird

  receivedData: Array<any> = []; // dropped Data Array

  // um die gedraggten Daten, die als event kommen in ein neues array zu speichern
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
  // holt sich den applied Objekt mit der bestimmten ID aus Der Datenbank
  getAppliedById(): void {
    this.studentservice.getAppliedById(1)
      .subscribe(applied => this.applied = applied);
  }

  // um die favs der Studenten zu bekommen
  getFavorites(): void {
    this.studentservice.getFavorites()
      .subscribe(favorites => this.favorites = favorites);
  }

  // um die favorisierten Universitäten wieder aus der Favoritenliste zu löschen
  setAsNotFav(favorite: Favorite): void {
    favorite.isFav = false;
    this.studentservice.updateIsFav(favorite).subscribe();
  }
  // löscht die universitäten in der Rankingliste
  onDeleteUni(index: number) {
    this.receivedData.splice(index, 1);
  }
  // schaut ob mindestens ein Objekt in der Rankinliste ist wenn ja zeigt er denn Button zum abschließen
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
  /* schließt den Rankingprozess ab und updatet das hasApplied in der
  Datenbank auf ja sodass profile-progress angezeigt werden kann */
  finishApp(): void {
    this.finishApplication = true;
    this.applied.hasApplied = true;
    console.log(this.applied.hasApplied);
    this.studentservice.updateHasApplied(this.applied).subscribe();
  }
}


