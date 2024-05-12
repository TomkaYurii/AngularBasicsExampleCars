import { Component, inject } from '@angular/core';
import {CommonModule} from "@angular/common";

import {CarLocationComponent} from "../car-location/car-location.component";

import {CarLocation} from "../car-location";
import {CarService} from "../car.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>

    <section class="results">
      <app-car-location
        *ngFor="let carLocation of filteredLocationList"
        [carLocation]="carLocation">
      </app-car-location>
    </section>
  `,
  styleUrl: './home.component.css'
})


export class HomeComponent {
  carLocationList: CarLocation[] = [];
  carService: CarService = inject(CarService);
  filteredLocationList: CarLocation[] = [];

  constructor() {
    this.carLocationList = this.carService.getAllCarLocations();
    this.filteredLocationList = this.carLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.carLocationList;
      return;
    }

    this.filteredLocationList = this.carLocationList.filter(
      carLocation => carLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
