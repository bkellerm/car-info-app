import { graphqlOperation } from '@aws-amplify/api';
import { APIService } from './../API.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug-bar',
  templateUrl: './debug-bar.component.html',
  styleUrls: ['./debug-bar.component.scss']
})
export class DebugBarComponent implements OnInit {

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }


  async resetTable() {
    console.log('reseting table')
    const response = await this.apiService.ResetCars()
    console.log(response)
  }
}
