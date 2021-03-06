import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'

})
export class NazioniService {
  currentNation: string;
  constructor(private http: HttpClient) { }
  nationByContinent(continent: string): Observable<any> {

    let resp = this.http.get<any>('http://localhost:8080/nazioni?continent=' + continent, { observe: 'response' });
    return resp;
  };

  allCountries(): Observable<any> {
    let resp = this.http.get<any>('http://localhost:8080/allnazioni', { observe: 'response' });
    return resp;
  }
}