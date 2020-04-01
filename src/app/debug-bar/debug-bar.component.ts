import { Observable } from 'rxjs';
import { APIService } from './../API.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug-bar',
  templateUrl: './debug-bar.component.html',
  styleUrls: ['./debug-bar.component.scss']
})
export class DebugBarComponent {
  counter: Observable<number>


  constructor(private apiService: APIService) { }

  async resetTable() {
    console.log('reseting table')
    let response: any  = 'no api request'
    response = await this.apiService.ResetCars()
    location.reload()
  }
}
