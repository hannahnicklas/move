import { Component, OnInit, Input } from '@angular/core';
import { University } from '../University';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService } from '../university.service';

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
    private location: Location
    ) { }

  ngOnInit() {
    this.getUniversity();
  }

  getUniversity(): void {
    console.log(this.route.snapshot.paramMap.keys);
    const id = +this.route.snapshot.paramMap.get('id');
    this.universityService.getUniversity(id)
      .subscribe(university => this.university = university);
  }

}
