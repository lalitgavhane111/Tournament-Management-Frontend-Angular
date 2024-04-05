import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamsUrl = 'https://backendtour.azurewebsites.net/api/Teams'

  constructor(private http: HttpClient) { }

  // method to get teams data from JSON file
  getTeams(): Observable<any[]> {
    return this.http.get<any[]>(this.teamsUrl)
      .pipe(
        map(data => data.map(team => ({
          name: team.name,
          rating: team.teamRating
        })))
      );
  }

}
