import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  private url1 = 'https://backendtour.azurewebsites.net/api/TeamRequests';
  private url2 = 'https://backendtour.azurewebsites.net/api/Teams';
  private url3 = 'https://backendtour.azurewebsites.net/api/Matches';
  private url4 = 'https://backendtour.azurewebsites.net/api/Tournaments'

  private tournamentsURL = "https://backendtour.azurewebsites.net/api/Tournaments";
  

  constructor(private httpClient:HttpClient) { }
  // teamrequest(){
  //   return this.http.get(this.url1);
  // }
  // getdata(){
  //   return this.http.post(this.url1,null);
  // }
  // team(){
  //   return this.http.get(this.url2);
  // }
  // matches(){
  //   return this.http.get(this.url3);
  // }
  // tournaments(){
  //   return this.http.get(this.url4);
  // }
  getTournaments() {
    return this.httpClient.get(this.tournamentsURL);
  }
}
