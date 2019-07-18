import { Injectable, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CittaService {

  constructor(private http: HttpClient, private route: Router) { }

  allCities(nation: string): Observable<any> {
    let resp = this.http.get<any>('http://localhost:8080/citta/elenco?nazione=' + nation, { observe: 'response' });
    return resp;
  }


  deleteCity(id: number): Observable<any> {
    let resp = this.http.delete('http://localhost:8080/citta/elimina?id=' + id, { observe: 'response' });
    return resp;
  }
}