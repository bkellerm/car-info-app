import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { APIService } from './API.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

import { MatToolbarModule} from '@angular/material/toolbar'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { DebugBarComponent } from './debug-bar/debug-bar.component'
import { CarTableComponent } from './car-table/car-table.component';
import { RegistrationDialogComponent } from './car-table/registration-dialog/registration-dialog.component';
import { MapComponent } from './map/map.component'


@NgModule({
  declarations: [
    AppComponent,
    CarTableComponent,
    DebugBarComponent,
    RegistrationDialogComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AmplifyAngularModule,

    FormsModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AmplifyService,
    APIService
  ],
  bootstrap: [AppComponent],
  entryComponents: [RegistrationDialogComponent]
})
export class AppModule { }
