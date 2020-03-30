import { Component, OnInit } from '@angular/core'
import { APIService } from './../API.service'
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component'
import { MatDialog } from '@angular/material/dialog'


@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss']
})
export class CarTableComponent implements OnInit {
  carInfoList: any
  displayedColumns = ['registration', 'mileage', 'battery_status', 'fuel']

  constructor(
      private api: APIService,
      private dialog: MatDialog
    ) {}

  ngOnInit() {
    this.updateCarInfoList()
    this.onUpdateCar()
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
    const dialogRef = this.dialog.open(RegistrationDialogComponent, {
      width: '250px',
      data: registration
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.changeRegistration(id, result)
    });

  }

  async changeRegistration(id: string, registration: string){
    const input = {id, registration}
    console.log(input)
    const result = this.api.UpdateCar(input)
  }

}
