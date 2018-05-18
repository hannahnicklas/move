import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService } from '../university.service';
import { University } from '../../../../assets/Data/University';

@Component({
  selector: 'app-university-courses',
  templateUrl: './university-courses.component.html',
  styleUrls: ['./university-courses.component.scss']
})
export class UniversityCoursesComponent implements OnInit {
  @Input() university: University;

  languages = ['English', 'France', 'German', 'More ...'];
  sortingssmall = ['Alphabetical', 'Movers', 'Rating'];
  focuses = ['Information Technology', 'Design & Architecture', 'Business', 'Communication', 'Engineering', 'More ...'];

  constructor(
    private route: ActivatedRoute,
    private universityService: UniversityService,
    private location: Location,
    private router: Router
    ) { }


  ngOnInit() {
    this.getUniversity();
  }

  getUniversity(): void {
    const id = +this.route.parent.snapshot.paramMap.get('id');
    this.universityService.getUniversity(id)
     .subscribe(university => this.university = university);
 }

}
