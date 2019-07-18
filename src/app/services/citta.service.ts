import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CittaService {

  constructor(private http: HttpClient) { }
 allCities(nation:string): Observable<any> {
   
    let resp = this.http.get<any>('http://localhost:8080/citta/elenco?nazione='+nation, { observe: 'response' });
    return resp;
}
}
