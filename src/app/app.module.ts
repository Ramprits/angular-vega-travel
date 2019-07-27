import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { NewVehicleComponent } from './vehicle/new-vehicle/new-vehicle.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, VehicleComponent, NewVehicleComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
