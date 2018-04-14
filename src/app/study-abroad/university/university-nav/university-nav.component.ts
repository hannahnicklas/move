import { Component, OnInit, Input } from '@angular/core';
import { University } from '../University';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university-nav',
  templateUrl: './university-nav.component.html',
  styleUrls: ['./university-nav.component.scss']
})
export class UniversityNavComponent implements OnInit {
  @Input() university: University;
  constructor(
    private route: ActivatedRoute,
    private universityService: UniversityService,
    private location: Location,
    ) { }

  ngOnInit() {
    this.getUniversity();
  }

  getUniversity(): void {
     const id = +this.route.snapshot.paramMap.get('id');
     this.universityService.getUniversity(id)
      .subscribe(university => this.university = university);
  }

}
