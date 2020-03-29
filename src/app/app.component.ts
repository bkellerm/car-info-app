import {Component, OnInit} from '@angular/core';
// import {APIService} from "./API.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'car-info-app';

  constructor() {
  }

  ngOnInit(): void {
    // populate database with json
  }
}

