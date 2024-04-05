import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TempServiceService {
  private playersURL =  "https://backendtour.azurewebsites.net/api/Players";
  private teamsURL = "https://backendtour.azurewebsites.net/api/Teams";
  private tournamentsURL = "https://backendtour.azurewebsites.net/api/Tournaments";
  private teamRequestsURL = "https://backendtour.azurewebsites.net/api/TeamRequests";
  private TournamentDetailsURL = "https://backendtour.azurewebsites.net/api/TournamentDetails";
  private manageMatchesURL = "https://backendtour.azurewebsites.net/api/Matches";
  private playerStatsURL = "https://backendtour.azurewebsites.net/api/PlayerStats";

  constructor(private httpClient: HttpClient) { }

  getPlayerDetails(){
    return this.httpClient.get(this.playersURL);
  }
  getPlayerDetailsById(id: number){
    return this.httpClient.get(this.playersURL + '/' + id);
  }
  postPlayerDetails(player: any){
    return this.httpClient.post(this.playersURL, player);
  }
  updatePlayerDetailsById(data: any, id : number){
    return this.httpClient.put(`${this.playersURL}/${id}`, data);
  }
  deletePlayerById(id: number){
    return this.httpClient.delete(`${this.playersURL}/${id}`);
  }


  //Team Requests
  getTeamRequests(){
    return this.httpClient.get(this.teamRequestsURL);
  }
  updateTeamRequestById(id: number, data: any){
    return this.httpClient.put(`${this.teamRequestsURL}/${id}`, data);
  }
  deleteTeamRequestById(id: number){
    return this.httpClient.delete(`${this.teamRequestsURL}/${id}`);
  }


  //Teams
  getTeamDetails(){
    return this.httpClient.get(this.teamsURL);
  }
  getTeamDetailById(id : number){
    return this.httpClient.get(this.teamsURL + '/' + id);
  }
  addNewTeam(team : any){
    return this.httpClient.post(this.teamsURL, team);
  }
  updateTeamById(id : number, data: any){
    return this.httpClient.put(`${this.teamsURL}/${id}`, data)
  }
  deleteTeamById(id : number){
    return this.httpClient.delete(`${this.teamsURL}/${id}`);
  }


  //Tournaments
  getTournaments(){
    return this.httpClient.get(this.tournamentsURL);
  }
  getTournamentById(id: number){
    return this.httpClient.get(this.tournamentsURL + '/' + id);
  }
  addNewTournament(tournament : any) {
    return this.httpClient.post(this.tournamentsURL, tournament);
  }
  updateTournamentById(id: number, data: any){
    return this.httpClient.put(`${this.tournamentsURL}/${id}`, data);
  }
  deleteTournamentById(id: number){
    return this.httpClient.delete(`${this.tournamentsURL}/${id}`);
  }


//Tournament Details
  getTournamentDetailsById(id: number){
   return this.httpClient.get(this.TournamentDetailsURL + '/' + id);
  }
  deleteTournamentDetailsById(id : number){
    return this.httpClient.delete(`${this.TournamentDetailsURL}/${id}`);
  }
  postTournamentDetails(data : any){
    return this.httpClient.post(this.TournamentDetailsURL, data);
  }


  //Playerstats
  getPlayerStatsById(id: number){
    return this.httpClient.get(this.playerStatsURL + '/' + id);
  }
  postPlayerStats(data: any){
    return this.httpClient.post(this.playerStatsURL, data);
  }
  updatePlayerStatsById(id: any, data: any){
    return this.httpClient.put(`${this.playerStatsURL}/${id}`, data);
  }


  //Matches
  getMatches(){
    return this.httpClient.get(this.manageMatchesURL);
  }
  postMatchToTournament(data: any){
    return this.httpClient.post(this.manageMatchesURL, data);
  }
  deleteMatchById(id: number){
    return this.httpClient.delete(this.manageMatchesURL + '/' + id);
  }
  getMatchById(id: number){
    return this.httpClient.get(`${this.manageMatchesURL}/${id}`);
  }
  updateMatchById(id : number, data: any){
    return this.httpClient.put(`${this.manageMatchesURL}/${id}`, data);
  }

}

