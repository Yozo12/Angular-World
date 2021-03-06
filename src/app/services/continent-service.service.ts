import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContinentServiceService {
  navigate: any;

  constructor(private http: HttpClient) { }
  showAll(): Observable<any> {
    let resp = this.http.get<any>('http://localhost:8080/continent', { observe: 'response' });
    return resp;
  }
}
