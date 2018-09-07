import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Passager} from '../model/passager';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {

  url: string = 'http://localhost:8080/TPVolAngular';

  /*  headers: HttpHeaders;*/

  constructor(private http: HttpClient) {

  }

  public list(): Observable<Passager[]> {
    return this.http.get<Passager[]>(`${this.url}/rest/passager/`);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/rest/passager/${id}`);
  }

  public findBYId(id: number): Observable<Passager> {
    return this.http.get<Passager>(`${this.url}/rest/passager/${id}`);
  }

  public save(passager: Passager): Observable<any> {
    if (passager.id) {
      return this.http.put(`${this.url}/rest/passager/`, passager);
    } else {
      const o = {
        id: passager.id, nom: passager.nom, prenom: passager.prenom
      };
      console.log(o);
      return this.http.post(`${this.url}/rest/passager`, o);
    }
  }


}
