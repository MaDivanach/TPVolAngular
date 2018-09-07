import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from '../model/client';
import {Observable} from 'rxjs';
import {Reservation} from '../model/reservation';
import {ClientEl} from '../model/clientEl';
import {ClientMoral} from '../model/clientMoral';
import {ClientPhysique} from '../model/clientPhysique';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url: string = 'http://localhost:8080/TPVolAngular';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
   // this.headers = new HttpHeaders({'Content-type': 'Application/json', 'Authorization': 'Basic ' + btoa('gege:olivier')});
  }

  public list(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}/rest/client/`);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/rest/client/${id}`);
  }

  public findById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/rest/client/${id}`);
  }

  public findReservationsById(id: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.url}/rest/client/reservations/${id}`);
  }

  public save(client: Client): Observable<any> {

    if (client.id) {
      return this.http.put(`${this.url}/rest/client/`, client);
    } else {
      if (client instanceof ClientEl) {
        const o = {
          id: client.id,
          nom: client.nom,
          numeroTel: client.numeroTel,
          numeroFax: client.numeroFax,
          email: client.email,
          adresse: client.adresse,
          login: client.login,
          prenom: client.prenom
        };
        return this.http.post(`${this.url}/rest/client/el`, o);
      } else if (client instanceof ClientMoral) {
        const o = {
          id: client.id,
          nom: client.nom,
          numeroTel: client.numeroTel,
          numeroFax: client.numeroFax,
          email: client.email,
          adresse: client.adresse,
          login: client.login,
          siret: client.siret
        };
        return this.http.post(`${this.url}/rest/client/moral`, o);
      } else if (client instanceof ClientPhysique) {
        const o = {
          id: client.id,
          nom: client.nom,
          numeroTel: client.numeroTel,
          numeroFax: client.numeroFax,
          email: client.email,
          adresse: client.adresse,
          login: client.login,
          prenom: client.prenom
        };
        return this.http.post(`${this.url}/rest/client/physique`, o);
      }
    }
  }
}
