import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService } from '../university.service';
import { University } from '../../../../assets/Data/University';

@Component({
  selector: 'app-university-general',
  templateUrl: './university-general.component.html',
  styleUrls: ['./university-general.component.scss']
})

export class UniversityGeneralComponent implements OnInit {
  @Input() university: University;

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
      console.log(this.university);
  }

}
