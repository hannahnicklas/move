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
  showHover: boolean;

  // Filter
  sortings = ['Alphabetical', 'Movers', 'Rating'];
  languages = ['English', 'France', 'German', 'Italian', 'Chinese', 'Spanish'];

  // show more less Variablen
  public show = false;
  public showMore = 'Show';


  uniDescription: String;

  /// default settings
  map: mapboxgl.Map;
  style = 'mapbox://styles/grandmagauss/cjggub0jm00242so9u41xd01o';
  lat = 20;
  lng = 10;
  zoom = 2;

  constructor(
    private mapService: MapService,
    private universityService: UniversityService,
    private http: HttpClient
  ) {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiY2hzNTQyMSIsImEiOiJjamlmbnRxaW0wNXEwM3ByMm0yaGE5MnQ3In0.HK9VqcBSfLpSs6LfcWENRw';
  }


  ngOnInit() {
    // angular.module('app', ['ngAnimate']).controller('ctrl', function() { });


    this.showPopup = false;
    this.showHover = false;
    this.buildMap();
    this.buildData();
  }
// show more Button
  toggle(element, text) {
    element.textContent = text;
    this.show = !this.show;
    if (this.show) {
      this.showMore = 'Hide';
    } else {
      this.showMore = 'Show';
    }
    if (!this.show) {
      element.textContent = 'More ...';
    }
  }

  onClickMe(e) {
    this.map.flyTo({
      center: [
          e.target.getAttribute('lang'),
          e.target.getAttribute('id')], // id=latitude
      zoom: 3
    });
    // this.map.setZoom(6);
  }
  async buildData() {
    this.unis = <University[]>await this.universityService.getUnisAsync();
    this.uni = this.unis[0];

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

    this.map.addLayer({
      id: 'unis',
      type: 'symbol',
      source: {
        type: 'geojson',
        data:  this.data
      },
      layout: {
        'icon-image': 'town-hall-15',
        'icon-allow-overlap': true
      },
      paint: { }
    });
  }


  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 1.5,
      center: [11.5, 38.05]
    });

    /// Add map controls
    this.map.setMaxZoom(5);
    this.map.setMinZoom(1.6);
    // this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', () => {


      this.map.on('click', 'unis', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        this.uni = this.unis[e.features[0].properties.description];

        this.uniDescription = this.uni.descriptionText.substring(0, 300).concat('...');

        this.showPopup = true;
      });

      this.map.on('mouseenter', 'unis',  (e) => {
        this.map.getCanvas().style.cursor = 'pointer';
        this.uni = this.unis[e.features[0].properties.description];

        this.showHover = true;

        console.log(e);

        const hover = document.getElementById('uniHover');
        console.log(hover);
        hover.style.display = 'initial';
        hover.style.top = e.point.y + 'px';
        hover.style.left = e.point.x + 20 + 'px';
      });

      this.map.on('mouseleave', 'unis', () => {
        this.map.getCanvas().style.cursor = '';
        this.showHover = false;
        const hover = document.getElementById('uniHover');
        hover.style.display = 'none';
      });

      });


  }

  closeWindow() {
    this.showPopup = false;
  }

}
