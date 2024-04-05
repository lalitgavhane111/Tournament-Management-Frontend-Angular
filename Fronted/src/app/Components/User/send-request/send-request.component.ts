import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersideServiceService } from 'src/app/Service/userside-service.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent {
  allTeamsData: any;
  allPlayersData: any;
  allRequestsData : any;
  
  exists : boolean = false; //To check if user is already registered as a player or not

  
  localStorageUserId: number = 0 //Assign user id from local storage
  
  playerId: number = 0;


  requestData = {
    playerId: 0,
    teamId: 0,
    status: null
  }

  constructor(private service: UsersideServiceService, private route: Router){
    this.localStorageUserId = Number(localStorage.getItem('id'))
    this.service.getTeamsData().subscribe(x => {
      this.allTeamsData = x;
      console.log(this.allTeamsData);
    });

    this.service.getPlayersData().subscribe(x => {
      this.allPlayersData = x;
      for(var i=0; i<this.allPlayersData.length; i++){
      //Local storage wale user id se we will find player id
        if(this.allPlayersData[i].userId == this.localStorageUserId){
          this.playerId = this.allPlayersData[i].id;
          this.exists = true;
        }
      }
    });
  }

  requestToTeam(teamId: number){
    console.log(teamId);
    if(!this.exists){
      alert("You are not registered as a player. Register first and then try making a request");
      this.route.navigate(['/register-as-player']); //Navigate to player registration page
    } else {
      //Post request in requests table
      this.requestData.playerId = this.playerId;
      this.requestData.teamId = teamId;
      this.service.postTeamRequest(this.requestData).subscribe((response) => {
        alert("Team request sent");
      },
      (error) => {
        alert("You have already sent request to this team");
      });
    }
  }

  logout(){
    localStorage.clear();
  }
}
