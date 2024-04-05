import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TournamentHomeService {
  private url = 'https://backendtour.azurewebsites.net/api/Tournaments'
  //private url1 = 'https://localhost:7291/api/Matches'
  private url_team = 'https://backendtour.azurewebsites.net/api/Teams'
  // for admin 
  constructor(private http : HttpClient) { }
  // function retrieving tournament details from web api
  getTournamentList(){
    return this.http.get(this.url)
  }

  /*function for retriveing tournament details fro web api
  getMatch(){
    return this.http.get(this.url1)
  }
  */
  getTeamDetails(){
    return this.http.get(this.url_team)
  }
}
