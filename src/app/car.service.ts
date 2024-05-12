import { Injectable } from '@angular/core';
import {CarLocation} from "./car-location";

@Injectable({
  providedIn: 'root'
})

export class CarService {
  readonly baseUrl = 'https://source.unsplash.com/random';
  carLocationList: CarLocation[] = [];

  constructor() {
    this.generateCarLocations()
  }

  generateCarLocations() {
    for (let i = 0; i < 16; i++) {
      const carLocation: CarLocation = {
        id: i,
        name: "Test Car " + (i),
        city: "Test City " + (i),
        state: "UA " + i,
        photo: `${this.baseUrl}/?car&${i}`,
        availableUnits: i,
      }
      this.carLocationList.push(carLocation);
    }
  }
  getAllCarLocations(): CarLocation[] {
    return this.carLocationList;
  }
  getCarLocationById(id: number): CarLocation | undefined {
    return this.carLocationList.find(
      carLocation => carLocation.id === id
    );
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Car application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
