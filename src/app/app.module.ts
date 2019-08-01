import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { NewVehicleComponent } from './vehicle/new-vehicle/new-vehicle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VehicleService } from './services/vehicle.service';
import { ToursService } from './services/tours.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    { path: '', component: VehicleComponent },
    { path: 'new-vehicle', component: NewVehicleComponent },
  ])],
  declarations: [AppComponent, VehicleComponent, NewVehicleComponent, NavbarComponent],
  bootstrap: [AppComponent],
  providers: [VehicleService, ToursService]
})
export class AppModule { }
