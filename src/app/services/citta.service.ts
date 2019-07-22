import { Injectable, forwardRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Constant } from '../const/constant';
import { City } from '../model/city';
import { Body } from '../model/body';

@Injectable({
  providedIn: 'root'
})
export class CittaService {
currentCityid:number;
 params=new HttpParams();
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
  loadCity(id:number):Observable<any>{
    let resp=this.http.get<any>('http://localhost:8080/citta/load?id='+id,{ observe: 'response' }) ;
    return resp;
  }
 
addModCity(paramBody:Body):Observable<any>{
  let resp= this.http.post<any>('http://localhost:8080/citta',{ params:paramBody,observe: 'response'});
return resp;
  
  
  
}
  }
