import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniversityService } from '../../university.service';
import { University } from '../../../../../assets/Data/University';

@Component({
  selector: 'app-experiences-boxes',
  templateUrl: './experiences-boxes.component.html',
  styleUrls: ['./experiences-boxes.component.scss']
})
export class ExperiencesBoxesComponent implements OnInit {
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
  
  // Liest aus der URL die richtige ID aus und läd die entsprechende Universität aus der Datenbank
  getUniversity(): void {
     const id = +this.route.parent.snapshot.paramMap.get('id');
     this.universityService.getUniversity(id)
      .subscribe(university => this.university = university);
  }

}
