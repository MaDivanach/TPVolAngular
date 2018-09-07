import {Component, OnInit} from '@angular/core';
import {Reservation} from '../model/reservation';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css']
})
export class ReservationEditComponent implements OnInit {
  private _reservation: Reservation;

  constructor() {
  }

  ngOnInit() {
  }

  get reservation(): Reservation {
    return this._reservation;
  }

  set reservation(value: Reservation) {
    this._reservation = value;
  }
}
