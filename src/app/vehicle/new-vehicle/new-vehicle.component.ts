import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {

  makes: any[]
  models: any[]
  features: any[]
  vehicle: any = {};
  constructor(private vs: VehicleService) { }

  ngOnInit() {
    this.vs.getMakes().subscribe(data => {
      this.makes = data
    })
  }

  onChange() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.make);
    this.models = selectedMake ? selectedMake.models : [];
    console.log(this.models)
  }
}