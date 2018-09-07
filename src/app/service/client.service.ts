import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Client} from '../model/client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url: string = 'http://localhost:8080/TPVolAngular';
  headers: HttpHeaders;

  constructor(private http: HttpHeaders) {
    this.headers = new HttpHeaders({'Content-type': 'Application/json', 'Authorization': 'Basic ' + btoa('gege:olivier')});
  }

  public list(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}/rest/client/`, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/rest/client/${id}`, {headers: this.headers});
  }

  public findById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/rest/client/${id}`, {headers: this.headers});
  }

  public save(client: Client): Observable<any> {
    if (client.id) {
      // update si existe
      return this.http.put(`${this.url}/rest/client/`, client, {headers: this.headers});
    } else {
      // create
      console.log(client);
      const o = {
        id: client.id,
        nom: client.nom,
        numeroTel: client.numeroTel,
        numeroFax: client.numeroFax,
        email: client.email,
        adresse: client.adresse,
        login: client.login
      };
      console.log(o);
      return this.http.post(`${this.url}/rest/client/`, o, {headers: this.headers});
    }
  }
}
