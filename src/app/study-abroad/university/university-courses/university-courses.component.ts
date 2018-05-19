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

  public show = false;
  public showMore = 'Show';
  public fshow = false;
  public showFocus = 'Show';


  languages = ['English', 'France', 'German', 'Italian', 'Chinese', 'Spanish'];
  sortingssmall = ['Alphabetical', 'Movers', 'Rating'];
  focuses = ['Information Technology', 'Design & Architecture', 'Business', 'Communication', 'Engineering'];

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

  toggle(element, text) {
    element.textContent = text;
    this.show = !this.show;
    if (this.show) {
      this.showMore = 'Hide';
    } else {
      this.showMore = 'Show';
    }
    if (!this.show) {
      element.textContent = 'More ...';
    }
  }

  togglefocus(element, text) {
    element.textContent = text;
    this.fshow = !this.fshow;
    if (this.fshow) {
      this.showFocus = 'Hide';
    } else {
      this.showFocus = 'Show';
    }
    if (!this.fshow) {
      element.textContent = 'More ...';
    }
  }
}
