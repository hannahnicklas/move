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

  sortings = ['Alphabetical', 'Helpful', 'Faculity', 'Latest', 'Rating', 'Study course'];
  languages = ['English', 'France', 'German', 'Italian', 'Chinese', 'Spanish'];

  public show = false;
  public showMore = 'Show';

  constructor(
    private universityService: UniversityService
  ) { }

  ngOnInit() {
    this.getUnis();
  }


  getUnis(): void {
    this.universityService.getUnis().subscribe(unis => this.unis = unis);
  }
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


  
}
