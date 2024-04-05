import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournamentServicesService {

  private getUrl='https://backendtour.azurewebsites.net/api/Teams';


  
  constructor(private httpClient: HttpClient) { }
  
  
  public getEmployeeDetails() { 
    return this.httpClient.get("https://backendtour.azurewebsites.net/api/Teams");
  }
}
