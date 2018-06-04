import { Component, OnInit } from '@angular/core';
// import earthquakes from './earthquakes.geo.json';
import * as data from './earthquakes.geo.json';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {
  earthquakes = data;

  constructor() { }

  ngOnInit() {

  }

}
