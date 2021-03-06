import { Injectable, forwardRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Constant } from '../const/constant';
import { City } from '../model/city';
import { Body } from '../model/body';
import { Review } from '../model/review';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class CittaService {
  currentCityid: number;
  params = new HttpParams();
  constructor(private http: HttpClient) { }

  allCities(nation: string): Observable<any> {
    let resp = this.http.get<any>('http://localhost:8080/citta/elenco?nazione=' + nation, { observe: 'response' });
    return resp;
  }


  deleteCity(id: number): Observable<any> {
    let resp = this.http.delete('http://localhost:8080/citta/elimina?id=' + id, { observe: 'response' });
    return resp;
  }
  ordinaCity(codNation: string, ord: string): Observable<any> {
    let resp = this.http.get<any>('http://localhost:8080/citta?codNazione=' + codNation + '&ord=' + ord, { observe: 'response' });
    return resp;
  }
  loadCity(id: number): Observable<any> {
    let resp = this.http.get<any>('http://localhost:8080/citta/load?id=' + id, { observe: 'response' });
    return resp;
  }

  addModCity(paramBody: Body): Observable<any> {

    let resp = this.http.post<any>('http://localhost:8080/citta', paramBody, { observe: 'response' });
    return resp;
  }
  getNation(code: String): Observable<any> {

    let resp = this.http.get<any>('http://localhost:8080/nationbycode?code=' + code, { observe: 'response' });
    return resp;
  }
  getAuthor(idauthor: number): Observable<any> {

    let resp = this.http.get<any>('http://localhost:8080/author?idauthor=' + idauthor, { observe: 'response' });
    return resp;
  }
  getReview(idcity: number): Observable<any> {

    let resp = this.http.get<any>('http://localhost:8080/reviewforcity?idcity=' + idcity, { observe: 'response' });
    return resp;
  }
  insertReview(review: Review): Observable<any> {

    let resp = this.http.post<any>('http://localhost:8080/insertreview', review, { observe: 'response' });
    return resp;
  }
  insertAuthor(author: Author): Observable<any> {

    let resp = this.http.post<any>('http://localhost:8080/insertauthor', author, { observe: 'response' });
    return resp;
  }
  getCitiesByLike(name: String): Observable<any> {

    let resp = this.http.get<any>('http://localhost:8080/citylike?name=' + name, { observe: 'response' });
    return resp;
  }
  allCitiesFromWorld(): Observable<any> {

    let resp = this.http.get<any>('http://localhost:8080/allcities', { observe: 'response' });
    return resp;
  }
  findAuthorName(name: String): Observable<any> {

    let resp = this.http.get<any>('http://localhost:8080/authorbyname?name=' + name);
    console.log(resp);
    return resp;
  }
  login(name: string, pass: string): Observable<any> {

    let resp = this.http.get<any>('http://localhost:8080/login?name=' + name + '&pass=' + pass, { observe: 'response' });
    console.log(resp);
    return resp;

  }
}