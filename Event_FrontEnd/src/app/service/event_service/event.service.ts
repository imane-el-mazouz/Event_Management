import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Event } from '../../model/event_model/event';
import {Category} from "../../enums/category";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://localhost:8081/api/event';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/all`, { headers: this.getHeaders() });
  }


  searchEvents(location: string, category: Category, dateTime: Date | null): Observable<Event[]> {
    let params = new HttpParams();
    if (location) params = params.set('location', location);
    if (category) params = params.set('category', category);
    if (dateTime) params = params.set('dateTime', dateTime.toISOString());

    return this.http.get<Event[]>(`${this.apiUrl}/search`, { headers: this.getHeaders(), params })
      .pipe(catchError(this.handleError));
  }



  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong, please try again later.'));
  }
}
