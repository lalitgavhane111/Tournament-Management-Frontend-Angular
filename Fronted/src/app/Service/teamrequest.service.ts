import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamrequestService {
  private baseUrl = '';

  constructor(private http: HttpClient) { }

  getPlayerId(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/authentication/player`, { headers }).pipe(
      catchError((error) => {
        return throwError('Could not get player ID');
      })
    );
  }

  sendTeamRequest(request: any, token: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/teamrequest`, request, { headers }).pipe(
      catchError((error) => {
        return throwError('Could not send team request');
      })
    );
  }
}

