import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsersideServiceService {

  private teamsURL = "https://backendtour.azurewebsites.net/api/Teams";
  private playersURL = "https://backendtour.azurewebsites.net/api/Players";
  private teamRequestsURL = "https://backendtour.azurewebsites.net/api/TeamRequests";
  private playerStatsURL = "https://backendtour.azurewebsites.net/api/PlayerStats";

  constructor(private httpClient: HttpClient) { }
  
  getTeamsData(){ 
    return this.httpClient.get(this.teamsURL);
  }

  getPlayersData(){
    return this.httpClient.get(this.playersURL);
  }

  postPlayersData(data: any){
    return this.httpClient.post(this.playersURL, data);
  }

  getTeamRequests(){
    return this.httpClient.get(this.teamRequestsURL);
  }

  postTeamRequest(data: any){
    return this.httpClient.post(this.teamRequestsURL, data);
  }
 
  deleteRequestById(requestId: any){
    return this.httpClient.delete(this.teamRequestsURL+'/'+requestId);
  }

  postPlayerStats(data: any){
    return this.httpClient.post(this.playerStatsURL, data);
  }
}
