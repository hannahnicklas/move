import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { University } from '../../../../assets/Data/University';
import { UniversityService } from '../../university/university.service';
import { MapService } from '../../../map.service';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {

  unis: University[];
  data;
  uni: University;
  showPopup: boolean;


  /// default settings
  map: mapboxgl.Map;
  style = 'mapbox://styles/grandmagauss/cjggub0jm00242so9u41xd01o';
  lat = 20;
  lng = 10;
  zoom = 1;

  constructor(private mapService: MapService, private universityService: UniversityService, private http: HttpClient) {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiZ3JhbmRtYWdhdXNzIiwiYSI6ImNqZ2dvdzJpazAwM3MzOHFubjJ2NDYyaDcifQ.8rLg5amk491arsu10b67uQ';
  }


  ngOnInit() {
    this.showPopup = false;
    this.buildData();
    this.buildMap();
    // console.log(this.data);
    // this.buildData();
    // console.log(this.data);
  }

  routeMe(id) {
    console.log(id);
  }
  async buildData() {
    this.unis = <University[]>await this.universityService.getUnisAsync();

    const iterations = this.unis.length;
    // tslint:disable-next-line:max-line-length
    const toAdd = new Array<{ type: string; properties: { description: string; ADDRESS?: undefined; }; geometry: {type: string; coordinates: number[]; }; } | { type: string; properties: { Name: string; ADDRESS: string; Address?: undefined; }; geometry: { type: string; coordinates: number[]; }; }>(iterations);
    for (let i = 0; i < iterations; i++) {
      toAdd[i] = {
        type: 'Feature',
        properties: {
          description: (String(i)),
        },
        geometry: {
          type: 'Point',
          coordinates: [this.unis[i].lang, this.unis[i].lat]
        }
      };
    }

    this.data = { type: 'FeatureCollection', features: toAdd};

  }


  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 1.4,
      center: [0, 45]
    });

    /// Add map controls
    this.map.setMaxZoom(5);
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', () => {
    // Add a layer showing the places.
    // mapboxgl.GeoJSONSource.apply(this.earthquakes);

    this.map.addLayer({
      id: 'unis',
      type: 'symbol',
      source: {
        type: 'geojson',
        data:  this.data
      },
      layout: {
        'icon-image': 'hospital-15'
      },
      paint: { }
    });


  this.map.on('click', 'unis', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      this.uni = this.unis[e.features[0].properties.description];
      this.showPopup = true;
  });

  this.map.on('mouseenter', 'unis',  () => {
      this.map.getCanvas().style.cursor = 'pointer';
  });

  this.map.on('mouseleave', 'unis', () => {
      this.map.getCanvas().style.cursor = '';
  });
});
}

}
