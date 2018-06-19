import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService } from '../university.service';
import { University } from '../../../../assets/Data/University';
import { StudentService } from '../../../profile/student.service';
import { Favorite } from '../../../../assets/Data/Favorite';

@Component({
  selector: 'app-university-nav',
  templateUrl: './university-nav.component.html',
  styleUrls: ['./university-nav.component.scss']
})
export class UniversityNavComponent implements OnInit {
  favorite: Favorite;
  // isFavInDb: boolean;
  @Input() university: University;
  constructor(
    private route: ActivatedRoute,
    private universityService: UniversityService,
    private location: Location,
    private studentService: StudentService
    ) { }

  ngOnInit() {
    this.getUniversity();
    this.getFavById();
    // check if it is in database
    /* setTimeout(() => {
      if (!this.favorite) {
        this.isFavInDb = true;
        console.log(this.isFavInDb);
        console.log(this.favorite);
      } else {
        this.isFavInDb = false;
        console.log(this.isFavInDb);
        console.log(this.favorite);
      }
    }, 1000); */
    console.log(this.route.snapshot.paramMap.get('id'));
  }
  /* getFavById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getFavOfStudById(id)
      .subscribe(favorite => this.favorite = favorite);
  } */
  getFavById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getFavById(id)
      .subscribe(favorite => this.favorite = favorite);
  }
  setAsFav(): void {
    this.favorite.isFav = true;
    this.studentService.updateIsFav(this.favorite).subscribe();
  }

  getUniversity(): void {
     const id = +this.route.snapshot.paramMap.get('id');
     this.universityService.getUniversity(id)
      .subscribe(university => this.university = university);
  }
  log(id: string) {
    console.log('klicked' + id);
  }
  isFav(): boolean {
    if (this.favorite === undefined) {
      return false;
    } else {
      return this.favorite.isFav;
    }
  }

}
