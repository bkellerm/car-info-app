import { graphqlOperation } from '@aws-amplify/api';
import { APIService, ListCarsQuery } from './../API.service';
import {Component, OnInit} from '@angular/core';
import { observable } from 'rxjs';
// import {APIService} from "../API.service";

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss']
})
export class CarTableComponent implements OnInit {
  carInfoList: any
  displayedColumns = ['registration', 'mileage', 'battery_status', 'fuel']

  constructor(private api: APIService) { }

  ngOnInit() {
    this.getCarInfoList()
    // this.api.OnUpdateCarListener.subscribe(x => {
    //   console.log('update')
    //   console.log(x)
    // })
  }

  async getCarInfoList(){
    const result = await this.api.ListCars()
    // console.log(response)
    this.carInfoList = result.items
  }
}
