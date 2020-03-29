import {Component, OnInit} from '@angular/core';
// import {APIService} from "../API.service";

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss']
})
export class CarTableComponent implements OnInit {
  allCarInfo: any[]
  displayedColumns = ['registration', 'mileage', 'battery_status', 'fuel']

  constructor() { }

  ngOnInit() {
    console.log('initializing table')
  }

  async createCarInfoEntry() {
    const newCarInfoEntry = {
      registration: 'ZH-123',
      latitude: 0.0,
      longitude: 0,
      mileage: 50,
      fuel_level: 80,
      fuel_liters: 65,
      battery_status: 'GOOD'
    }
    // let result = await this.apiService.CreateCarInfo(newCarInfoEntry)
  }

  async carInfoList() {
    // this.allCarInfo = await this.apiService.ListCarInfos()
  }

}
