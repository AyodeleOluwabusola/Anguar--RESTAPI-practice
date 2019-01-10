import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { Data } from './data';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  data : Data[]
  constructor(
    private http: HttpClient,
  ) { }

  private baseUrl = 'http://localhost:5200/persons'
  // private baseUrl = 'https://jsonplaceholder.typicode.com/users/';


  getData(): Observable<any> {
    return this.http.get(this.baseUrl)
  }

  private extractData(res: Response) {
    let body = <any>res.json();
    return body || [];
  }
  getUserId( id: number): Observable<any> {
    let url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  updateHero (): Observable<any> {
    return this.http.put(this.baseUrl, httpOptions)
  }
  
}
