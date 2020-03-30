import { LocationService } from './../location.service';
import { Component, OnInit } from '@angular/core'
import { APIService } from './../API.service'
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component'
import { MatDialog } from '@angular/material/dialog'


export interface DialogData {
  registration: string
}

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss']
})
export class CarTableComponent implements OnInit {
  carInfoList: any
  displayedColumns = ['registration', 'mileage', 'battery_status', 'fuel', 'location']

  constructor(
      private api: APIService,
      private dialog: MatDialog,
      private locationService: LocationService
    ) {}

  ngOnInit() {
    this.updateCarInfoList()
    this.onUpdateCar()
  }

  showOnMap(el: any) {
    this.locationService.newLocation(el.last_location_latitude, el.last_location_longitude)
  }

  async updateCarInfoList() {
    // TODO: handle error
    const result = await this.api.ListCars()
    this.carInfoList = result.items
  }

  async onUpdateCar() {
    this.api.OnUpdateCarListener.subscribe((next) => {
      console.log('update')
      console.log(next)
      this.updateCarInfoList()
    })
  }

  changeRegistrationDialog(id: string, registration: string) {
    // open registration dialog
    const dialogData: DialogData = {registration}
    const dialogRef = this.dialog.open(RegistrationDialogComponent, {
      width: '250px',
      data: dialogData
    });

    // change value accordingly to user input
    dialogRef.afterClosed().subscribe(result => {
      // dialog cancelled
      if (result === undefined) {
        return
      }

      // TODO: Input validation
      // dont use '===' because of inputs like {registration: 12}
      if (registration.localeCompare(result.registration) !== 0) {
        this.changeRegistration(id, result.registration)
      }
    });
  }

  async changeRegistration(id: string, registration: string){
    const input = {id, registration}
    const result = this.api.UpdateCar(input)
  }
}
