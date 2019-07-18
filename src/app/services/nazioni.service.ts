import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContinentComponent } from '../components/continent/continent.component';

@Injectable({
  providedIn: 'root'
})
export class NazioniService {
  
  constructor(private http: HttpClient) { }
  nationByContinent(continent:string): Observable<any> {
    let resp = this.http.get<any>('http://localhost:8080/'+continent+'/nazioni', { observe: 'response' });
    return resp;
}
}