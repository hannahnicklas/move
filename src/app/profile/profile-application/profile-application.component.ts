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


  // here should be uni DB
  // uni: University;
  transferData: Object = { id: 1, msg: 'Hello' };
  receivedData: Array<any> = [];

  // this method gets the dragged data as an event and pushes it to the dropped array (receivedData)
  transferDataSuccess($event: any) {
    if (this.receivedData.length < 5 && $event.dragData !== undefined) {
      this.receivedData.push($event);
      console.log($event);
    }
  }
  // {{data | json}} to show everything
  logThis(data: any) {
    console.log(data);
  }


  constructor(
    private studentservice: StudentService,
    private authService: AuthService,
    private universityService: UniversityService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    // this.studentservice.getStudent(1).subscribe(student => this.student = student);
    this.student = this.authService.getAuthenticatedObject();
    this.getFavorites();
    // routeparam
    // console.log(this.fakeData[0].id);


    this.data = this.route.snapshot.params.data;
    // this.add(this.data);
    console.log(this.universityService.getUniversity(this.data));
    console.log(this.data);
    console.log(JSON.stringify(this.student));
    // this.submit();
    if (this.data) {
      this.getFavById(this.data);
    }
    // this.add(this.favorite.name);


  }

  /* submit() {
    this.studentservice.updateStudentUniversity(this.student, this.universityService.getUniversity(this.data));
  } */
  /* add(id: number): void {
    console.log(this.universityService.getUniversity(id));

    this.studentservice.updateStudentUniversity(this.student, this.universityService.getUniversity(id))
      .subscribe(university => {
        this.student.universities.push(university);
        console.log(university);
      });
  } */
  // um die favs der Studenten zu bekommen
  getFavorites(): void {
    this.studentservice.getFavorites()
      .subscribe(favorites => this.favorites = favorites);
  }
  // hier sollte der name der uni reinkommen um es anzeigen zu lassen
  /* add(name: string): void {
    // name = name.trim();
    if (!name) { return; }
    this.studentservice.addUniToFavOfStudents({ name } as Favorite)
      .subscribe(favorite => {
        this.favorites.push(favorite);
      });

  } */

  // method to get the id and filter it from the fakedatabase and put it to add
  /* getFavoriteByUrlId(urlId: number): string {
    return this.fakeData[urlId - 1].name;
  } */
  // um den Favoriten von der Datenbank mit der Id zu bekommen als string

  /* getFavById(urlId: number): string {
    this.studentservice.getFavById(urlId)
      .subscribe(favorite => this.favorite = favorite);
      // has to be asynch else its undefined
        return this.favorite.name;
  } */
  async getFavById(urlId: number) {
    this.favorite = <Favorite>await this.studentservice.getFavByIdAsync(urlId);
    const name = this.favorite.name;
    if (!name) { return; }
    this.studentservice.addUniToFavOfStudents({ name } as Favorite)
      .subscribe(favorite => {
        this.favorites.push(favorite);
      });
  }
  // method to set isFav to false
  setAsNotFav(favorite: Favorite): void {
    favorite.isFav = false;
    this.studentservice.updateIsFav(favorite).subscribe();
    // this.ngOnInit();
  }



  delete(favorite: Favorite): void {
    this.favorites = this.favorites.filter(f => f !== favorite);
    this.studentservice.deleteFav(favorite).subscribe();
  }

  onDeleteUni(index: number) {
    this.receivedData.splice(index, 1);
  }
  // console log über die favortie elemente
  loggy() {
    for (let i = 0; i < this.favorites.length; i++) {
      console.log(this.favorites[i]);
    }
  }

}


