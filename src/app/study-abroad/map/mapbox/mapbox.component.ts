import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { University } from '../../../../assets/Data/University';
import { UniversityService } from '../../university/university.service';


@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {

  unis: University[]; // Liste aller Universitäten
  data;
  uni: University; // Die ausgewählte Universität (Bei Hover oder Klick)
  showPopup: boolean; // Boolean der die Popup Anzeige Regelt
  showHover: boolean; // Boolean der die Hover Anzeige Regelt

  // Filter
  sortings = ['Alphabetical', 'Movers', 'Rating'];
  languages = ['English', 'France', 'German', 'Italian', 'Chinese', 'Spanish'];

  // show more less Variablen
  public show = false;
  public showMore = 'Show';

  // Die gekürzte Universitätsbeschreibung im Popup
  uniDescription: String;

  // Standard Einstellungen der Karte
  map: mapboxgl.Map;
  style = 'mapbox://styles/grandmagauss/cjggub0jm00242so9u41xd01o';

  constructor(
    private universityService: UniversityService,
    private http: HttpClient
  ) {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiY2hzNTQyMSIsImEiOiJjamlmbnRxaW0wNXEwM3ByMm0yaGE5MnQ3In0.HK9VqcBSfLpSs6LfcWENRw';
  }


  ngOnInit() {
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

  // Zentriert die Karte bei der Universität, über die in der Liste gehovert wurde
  onHoverList(e) {
    this.map.flyTo({
      center: [
        e.target.getAttribute('lang'),
        e.target.getAttribute('id')], // id=latitude
      zoom: 4
    });
  }

  // Lässt den Kreis in der Mitte wieder verschwinden
  showCircle() {
    document.getElementById('focus_ring').setAttribute('style', 'opacity: 1; z-index: 1;');
  }
  hideCircle() {
    document.getElementById('focus_ring').setAttribute('style', 'opacity: 0; z-index: -1');
  }

  async buildData() {
    this.unis = <University[]>await this.universityService.getUnisAsync();
    this.uni = this.unis[0];

    const iterations = this.unis.length;

    const toAdd = new Array<{ type: string;
                              properties: {
                                description: string;
                                ADDRESS?: undefined;
                              };
                              geometry: {
                                type: string;
                                coordinates: number[];
                              };
                            } | { type: string;
                              properties: {
                                Name: string;
                                ADDRESS: string;
                                Address?: undefined;
                              }; geometry: {
                                type: string;
                                coordinates: number[];
                              };
                            }>(iterations);

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

    this.data = { type: 'FeatureCollection', features: toAdd };

    this.map.addLayer({
      id: 'unis',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: this.data
      },
      layout: {
        'icon-image': 'town-hall-15',
        'icon-allow-overlap': true,
        'icon-size': 1.5
      },
      paint: {}
    });
  }


  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 1.5,
      center: [11.5, 38.05]
    });

    // Regeln für den minimalen und Maximalen Zoom
    this.map.setMaxZoom(5);
    this.map.setMinZoom(1.6);

    this.map.on('load', () => {
      // Das Verhalten für den Klick auf eine Universität auf der Karte
      this.map.on('click', 'unis', (e) => {

        // Die geklickte Univeristät wird identifiziert und abgespeichert
        this.uni = this.unis[e.features[0].properties.description];

        this.uniDescription = this.uni.descriptionText.substring(0, 300).concat('...');
        // Der Boolean wird auf true gesetzt, um das Popup auf der Seite anzeigen zu lassen
        this.showPopup = true;
      });

      // Universitätsname anzeigen wenn über ein Symbol gehovert wird
      this.map.on('mouseenter', 'unis', (e) => {
        this.map.getCanvas().style.cursor = 'pointer';

        // Die gehoverte Univeristät wird identifiziert und abgespeichert
        this.uni = this.unis[e.features[0].properties.description];

        // Da ngIf asynchron arbeitet, kann hier nicht damit gearbeitet werden. Als workaround wird mit der Display Variable gearbeitet.
        const hover = document.getElementById('map-hover-university');
        hover.style.display = 'initial'; // Macht den Hovereffekt sichtbar
        hover.style.top = e.point.y + 'px'; // Setzt die richtige y Position
        hover.style.left = e.point.x + 20 + 'px'; // Setzt die richtige x Position
      });

      this.map.on('mouseleave', 'unis', () => {
        this.map.getCanvas().style.cursor = '';
        const hover = document.getElementById('map-hover-university');
        hover.style.display = 'none'; // Macht den Hovereffekt wieder unsichtbar
      });

    });
  }

  closeWindow() {
    this.showPopup = false;
  }

}
