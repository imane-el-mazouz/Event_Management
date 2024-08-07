import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Contact} from "../../model/contact_model/contact";
import {Observable, tap, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Reservation} from "../../model/reservation_model/reservation";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8081/api/contact';

  constructor( private http : HttpClient) { }

  private getHeaders() : HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }


  saveContact(contact : Contact ): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiUrl}/add`, contact, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(() => new Error('Something went wrong, please try again later.'));
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/all`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }


  getAbout(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/about`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }




}

