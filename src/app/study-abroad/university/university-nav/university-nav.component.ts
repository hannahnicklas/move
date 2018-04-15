import { Component, OnInit } from '@angular/core';
import { University } from '../University';
import { UniversityGeneralComponent } from '../university-general/university-general.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-university-nav',
  templateUrl: './university-nav.component.html',
  styleUrls: ['./university-nav.component.scss']
})
export class UniversityNavComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

}
