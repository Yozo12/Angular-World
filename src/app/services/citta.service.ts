import { Injectable, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Constant } from '../const/constant';

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
  ordinaCity(codNation:string,ord:string):Observable<any>{
    let resp=this.http.get<any>('http://localhost:8080/citta?codNazione='+codNation +'&ord='+ord,{ observe: 'response' }) ;
    return resp;
  }
}