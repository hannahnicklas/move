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
  }

  // Liest aus der URL die richtige ID aus und läd den entsprechenden Favoriten aus der Favoritenliste.
  // Ergibt null wenn die Universität nicht favorisiert ist.
  getFavById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getFavById(id)
      .subscribe(favorite => this.favorite = favorite);
  }

  // Setzt die Universität als Favorit
  setAsFav(): void {
    this.favorite.isFav = true;
    this.studentService.updateIsFav(this.favorite).subscribe();
  }

  // Entfernt die Universität von der Favoritenliste
  removeAsFav(): void {
    this.favorite.isFav = false;
    this.studentService.updateIsFav(this.favorite).subscribe();
  }

  // Liest aus der URL die richtige ID aus und läd die entsprechende Universität aus der Datenbank
  getUniversity(): void {
     const id = +this.route.snapshot.paramMap.get('id');
     this.universityService.getUniversity(id)
      .subscribe(university => this.university = university);
  }

  // Überprüft ob die Uni favorisiert ist und zeigt über das ngIf den entsprechenden Button an.
  isFav(): boolean {
    if (this.favorite === undefined) {
      return false;
    } else {
      return this.favorite.isFav;
    }
  }

}
