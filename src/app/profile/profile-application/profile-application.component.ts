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
  selector: 'app-profile-application',
  templateUrl: './profile-application.component.html',
  styleUrls: ['./profile-application.component.scss']
})
export class ProfileApplicationComponent implements OnInit {

  student: Student;
  favorites: Favorite[]; // sind die favoriten vom Studenten
  showFavorites: Favorite[];
  // favorite: Favorite; // der einzelne Favorite den man sich holt
  favorite: Favorite; // der einzelne Favorite den man sich holt
  data: number;
  applicationIsReady: boolean;
  finishApplication = false;


  // here should be uni DB
  // uni: University;
  // transferData: Object = { id: 1, msg: 'Hello' };
  receivedData: Array<any> = [];

  // this method gets the dragged data as an event and pushes it to the dropped array (receivedData)
  transferDataSuccess($event: any) {

    if ($event.dragData === undefined) {
      return;
    }
    if (this.receivedData.length >= 5) {
      alert('Sind zu viele');
      return;

    }
    const university = $event.dragData;
    if (this.receivedData.indexOf(university) !== -1) {
      alert('Die Universität ist bereits enthalten');
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
    // this.studentservice.getStudent(1).subscribe(student => this.student = student);
    this.student = this.authService.getAuthenticatedObject();
    this.getFavorites();



    this.data = this.route.snapshot.params.data;
    // this.add(this.data);
    console.log(this.universityService.getUniversity(this.data));
    console.log(this.data);
    // console.log(JSON.stringify(this.student));
    // this.submit();
    /* if (this.data) {
      this.getFavById(this.data);
    } */
    // this.add(this.favorite.name);


  }

  // um die favs der Studenten zu bekommen
  getFavorites(): void {
    this.studentservice.getFavorites()
      .subscribe(favorites => this.favorites = favorites);
  }

  /* async getFavById(urlId: number) {
    this.favorite = <Favorite>await this.studentservice.getFavByIdAsync(urlId);
    const name = this.favorite.name;
    if (!name) { return; }
    this.studentservice.addUniToFavOfStudents({ name } as Favorite)
      .subscribe(favorite => {
        this.favorites.push(favorite);
      });
  } */
  // method to set isFav to false
  setAsNotFav(favorite: Favorite): void {
    favorite.isFav = false;
    this.studentservice.updateIsFav(favorite).subscribe();
    // this.ngOnInit();
  }

  /* delete(favorite: Favorite): void {
    this.favorites = this.favorites.filter(f => f !== favorite);
    this.studentservice.deleteFav(favorite).subscribe();
  } */

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
  finishApp() {
    this.finishApplication = true;
  }

}


