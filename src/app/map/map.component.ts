import { LocationService } from './../location.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef
  map: google.maps.Map
  markers: google.maps.Marker[] = []

  // initial map configuration
  mapOptions: google.maps.MapOptions = {
    center: new google.maps.LatLng(51, 0), // greenwhich
    zoom: 3,
  };

  constructor(public locationService: LocationService) { }

  ngOnInit() {
    this.locationUpdateInitializer()
  }

  ngAfterViewInit() {
    this.mapInitializer()
  }

  locationUpdateInitializer() {
    this.locationService.location$.subscribe(loc => {
      this.clearMarkers()

      // create new marker and center on it
      const options: google.maps.MapOptions = {
        center: loc,
        zoom: 16,
      }
      const marker = new google.maps.Marker({
        position: loc,
        map: this.map,
      });
      this.map.setValues(options)
      marker.setMap(this.map)
      this.markers.push(marker)
    })
  }

  clearMarkers() {
    this.markers.forEach(x => {
      console.log('this one')
      x.setMap(null)
    })
    this.markers = []
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions)
  }
}
