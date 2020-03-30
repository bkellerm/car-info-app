import { OnUpdateCarSubscription } from './API.service';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';


export interface Location {
  longitude: number
  latitude: number
}


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private location = new Subject<google.maps.LatLng>()
  public location$ = this.location.asObservable()

  constructor() {}

  showLocationInMap(loc: Location) {

  }

  newLocation(latitude: number, longitude: number){
    this.location.next(new google.maps.LatLng(latitude, longitude))
  }
}
