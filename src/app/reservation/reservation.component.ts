import {Component, OnInit} from '@angular/core';
import {Reservation} from '../model/reservation';
import {ReservationService} from '../service/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  private _reservations: Reservation[];

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.list();
  }

  get reservations(): Reservation[] {
    return this._reservations;
  }

  set reservations(value: Reservation[]) {
    this._reservations = value;
  }

  private list() {
    this.reservationService.findAll().subscribe(
      resp => {
        this.reservations = resp;
      }
    );
  }
}
