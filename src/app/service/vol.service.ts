import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vol} from '../model/vol';

@Injectable({
  providedIn: 'root'
})
export class VolService {

  url: string = 'http://localhost:8080/TPVolAngular';

  constructor(private http: HttpClient) {
  }

  public list(): Observable<Vol[]> {
    return this.http.get<Vol[]>(`${this.url}/rest/vol`);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/rest/vol/${id}`);
  }

  public findById(id: number): Observable<Vol> {
    return this.http.get<Vol>(`${this.url}/rest/vol/${id}`);
  }

  public save(vol: Vol): Observable<any> {
    if (vol.id) {
      // update
      return this.http.put(`${this.url}/rest/vol/`, vol);
    } else {
      // create
      const o = {
        id: vol.id, dateDepart: vol.dateDepart, dateArrivee: vol.dateArrivee
      };
      return this.http.post(`${this.url}/rest/vol/`, o);
    }
  }

}
