import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CarLocation} from "../car-location";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-car-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,],
  templateUrl: './car-location.component.html',
  styleUrl: './car-location.component.css'
})

export class CarLocationComponent {
  @Input() carLocation!: CarLocation;
}
