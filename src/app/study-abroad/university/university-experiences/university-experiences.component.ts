import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService } from '../university.service';
import { University } from '../../../../assets/Data/University';
import { FilterComponent } from '../../../filter/filter.component';


@Component({
  selector: 'app-university-experiences',
  templateUrl: './university-experiences.component.html',
  styleUrls: ['./university-experiences.component.scss']

})

export class UniversityExperiencesComponent implements OnInit {
  @Input() university: University;

// Filterbegriffe _________________________________________

  sortings = ['Alphabetical', 'Helpful', 'Faculity', 'Latest', 'Rating', 'Study course'];
  languages = ['English', 'France', 'German', 'Italian', 'Chinese', 'Spanish'];

// /Filterbegriffe _________________________________________

  public show = false;
  public showMore = 'Show';


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

  // Show More & Less Button _____________________________________

  toggle(element, text) {
    element.textContent = text;
    this.show = !this.show;
    if (this.show) {
      this.showMore = 'Hide';
    } else {
      this.showMore = 'Show';
    }
    if ( !this.show) {
      element.textContent = 'More ...';
    }
  }

    // /Show More & Less Button _____________________________________
}
