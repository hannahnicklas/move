import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university/university.service';
import { University } from '../../../assets/Data/University';
import { MapboxComponent } from './mapbox/mapbox.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  unis: University[];


  constructor(
    private universityService: UniversityService
  ) { }

  ngOnInit() {
    this.getUnis();
  }


  getUnis(): void {
    this.universityService.getUnis().subscribe(unis => this.unis = unis);
  }
}
