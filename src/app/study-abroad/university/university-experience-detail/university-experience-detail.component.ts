import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService } from '../university.service';
import { University } from '../../../../assets/Data/University';

@Component({
  selector: 'app-university-experience-detail',
  templateUrl: './university-experience-detail.component.html',
  styleUrls: ['./university-experience-detail.component.scss']
})
export class UniversityExperienceDetailComponent implements OnInit {

  @Input() university: University;

  data: any;

  constructor(
    private route: ActivatedRoute,
    private universityService: UniversityService,
    private location: Location,
    private router: Router
    ) { }

  ngOnInit() {
    // Liest den mitgeschickten Namen des Studenten aus und bindet ihn in die Seite ein
    this.data = this.route.snapshot.params.data;
  }


}
