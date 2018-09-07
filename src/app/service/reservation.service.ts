import { Injectable } from '@angular/core';
import {Reservation} from '../model/reservation';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private url: string = 'http://localhost:8080/TPVolAngular';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.url}/rest/reservation`);
  }

  public findById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.url}/rest/reservation/${id}`);
  }

  public create(reservation: Reservation): Observable<any> {
    return this.http.post(`${this.url}/rest/reservation`, reservation);
  }

  public update(reservation: Reservation): Observable<any> {
    return this.http.put(`${this.url}/rest/reservation`, reservation);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/rest/reservation/${id}`);
  }
}
