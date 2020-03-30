import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { APIService } from './API.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarTableComponent } from './car-table/car-table.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DebugBarComponent } from './debug-bar/debug-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CarTableComponent,
    DebugBarComponent
  ],
  imports: [
    BrowserModule,
    AmplifyAngularModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    AmplifyService,
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
