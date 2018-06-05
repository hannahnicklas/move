import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../map.service';
import { GeoJson, FeatureCollection } from '../map';
import { FormsModule } from '@angular/forms';

import { environment } from '../../environments/environment';
import * as data from './earthquakes.geo.json';



@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss']
})
export class MapBoxComponent implements OnInit {
  earthquakes = data;

  /// default settings
  map: mapboxgl.Map;
  style = 'mapbox://styles/grandmagauss/cjggub0jm00242so9u41xd01o';
  lat = 20;
  lng = 10;
  zoom = 1;

  constructor(private mapService: MapService) {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiZ3JhbmRtYWdhdXNzIiwiYSI6ImNqZ2dvdzJpazAwM3MzOHFubjJ2NDYyaDcifQ.8rLg5amk491arsu10b67uQ';
  }

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    console.log(this.earthquakes);
    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 1.4,
      center: [this.lng, this.lat]
    });

    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());


    this.map.on('load', () => {
    // Add a layer showing the places.
    mapboxgl.GeoJSONSource.apply(this.earthquakes);

  this.map.addLayer({
      'id': 'places',
      'type': 'symbol',
      'source': {
          'type': 'geojson',
          'data': {
              'type': 'FeatureCollection',
              'features': [{
                  'type': 'Feature',
                  'properties': {
                      // tslint:disable-next-line:max-line-length
                      'description': ' <a href=\"/localhost:4200/studyAbroad/1/general\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png\">',
                      'icon': 'theatre'
                    },
                  'geometry': {
                      'type': 'Point',
                      'coordinates': [-77.038659, 38.931567]
                    }
                }]
            }
        },
      'layout': {
          'icon-image': '{icon}-15',
          'icon-allow-overlap': true
        }
  });

  this.map.on('click', 'places', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(this.map);
  });

  this.map.on('mouseenter', 'places',  () => {
      this.map.getCanvas().style.cursor = 'pointer';
  });

  this.map.on('mouseleave', 'places', () => {
      this.map.getCanvas().style.cursor = '';
  });
});
}

}
