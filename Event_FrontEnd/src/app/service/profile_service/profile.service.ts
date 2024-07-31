import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../model/user_model/user';
import { Reservation } from '../../model/reservation_model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:8081/api/user';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // getUserProfile(id: number): Observable<User> {
  //   return this.http.get<User>(`${this.apiUrl}/profile/${id}`);
  // }
  getUserProfile(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${id}`, { headers: this.getAuthHeaders() }).pipe(
        catchError(this.handleError)
    );
  }

  updateUserProfile(id: number, updatedUser: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/user/${id}`, updatedUser, { headers: this.getAuthHeaders() }).pipe(
        catchError(this.handleError)
    );
  }

  getUserReservations(id: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations/${id}`, { headers: this.getAuthHeaders() }).pipe(
        catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
