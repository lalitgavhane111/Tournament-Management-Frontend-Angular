import { Component } from '@angular/core';
import { TempServiceService } from '../../../Service/temp-service.service';

@Component({
  selector: 'app-manage-requests',
  templateUrl: './manage-requests.component.html',
  styleUrls: ['./manage-requests.component.css']
})
export class ManageRequestsComponent {
  teamRequests : any;
  localStorageUserId : number = 0;
  allPlayersData : any;
  playerId : number = 0;

  updateTeamRequest = {
    id: 0,
    playerId: 0,
    teamId: 0,
    status: true
  }

  constructor(private service: TempServiceService){ 
    this.localStorageUserId = Number(localStorage.getItem('id'));
    this.service.getPlayerDetails().subscribe(x => {
      this.allPlayersData  = x;
    });

    for(var i=0; i<this.allPlayersData; i++){
      if(this.allPlayersData[i].userId == this.localStorageUserId){
        this.playerId = this.allPlayersData[i].id;
      }
    }

    this.service.getTeamRequests().subscribe(x=> {
      console.log(x);
      this.teamRequests = x;
    });
  }

  acceptRequest(requestId: number, playerId: number, teamId: number){
    this.updateTeamRequest.id = requestId;
    this.updateTeamRequest.playerId = playerId;
    this.updateTeamRequest.teamId = teamId;
    this.updateTeamRequest.status = true;
    console.log(this.updateTeamRequest);
    console.log(requestId);
    this.service.updateTeamRequestById(requestId, this.updateTeamRequest).subscribe(x=> {
      //window.location.reload();
      const index = this.teamRequests.findIndex((request : any) => request.id === requestId);
       if (index !== -1) {
         this.teamRequests[index].status = true;
       }
    });

    let playerData : any;
    let updateData : any = {
      id: 0,
      name: '',
      dob: '',
      teamId: '',
      playerRating: '',
      playerRole : '',
      userId: 0
    }
    let updatePlayerStats : any = {
      id: 0,
      playerId: 0,
      teamId: 0,
      matchPlayed: 0,
      goalScored: 0,
      tackles: 0,
      goalSaved: 0
    }

    this.service.getPlayerDetailsById(playerId).subscribe(x=> {
      playerData = x;
      console.log(playerData);
      updateData.id = playerData.id;
      updateData.name = playerData.name;
      updateData.dob = playerData.dob;
      updateData.teamId = teamId;
      updateData.playerRating = playerData.playerRating;
      updateData.playerRole = playerData.playerRole;
      updateData.userId = playerData.userId;

      updatePlayerStats.id = playerData.playerStats[0].id;
      updatePlayerStats.playerId = playerData.id;
      updatePlayerStats.teamId = teamId;
      updatePlayerStats.matchPlayed = playerData.playerStats[0].matchPlayed;
      updatePlayerStats.goalScored = playerData.playerStats[0].goalScored;
      updatePlayerStats.tackles = playerData.playerStats[0].tackles;
      updatePlayerStats.goalSaved = playerData.playerStats[0].goalSaved;

      this.service.updatePlayerDetailsById(updateData, updateData.id).subscribe(x=>{
        this.service.updatePlayerStatsById(updatePlayerStats.id, updatePlayerStats).subscribe(x=>{
          console.log("Updated player details and player stats");
        })
      });
    });
  }

  rejectRequest(requestId : number, playerId: number, teamId: number){
    this.updateTeamRequest.id = requestId;
    this.updateTeamRequest.playerId = playerId;
    this.updateTeamRequest.teamId = teamId;
    this.updateTeamRequest.status = false;
    console.log(this.updateTeamRequest);

     this.service.updateTeamRequestById(requestId, this.updateTeamRequest).subscribe(x=> {
        // window.location.reload();
        const index = this.teamRequests.findIndex((request :any) => request.id === requestId);
        if (index !== -1) {
          this.teamRequests[index].status = false;
        }
     });
  }

  deleteRequest(requestId: number){
    this.service.deleteTeamRequestById(requestId).subscribe(x => {
      // window.location.reload();
      this.teamRequests = this.teamRequests.filter(
        (request: any) => request.id !== requestId
      );
    })
  }

  // teamRequests : any;
  // updateTeamRequest = {
  //   id: 0,
  //   playerId: 0,
  //   teamId: 0,
  //   status: true
  // }

  // constructor(private service: TempServiceService){ 
  //   this.service.getTeamRequests().subscribe(x=> {
  //     console.log(x);
  //     this.teamRequests = x;
  //   });
  // }

  // acceptRequest(requestId: number, playerId: number, teamId: number){
  //   this.updateTeamRequest.id = requestId;
  //   this.updateTeamRequest.playerId = playerId;
  //   this.updateTeamRequest.teamId = teamId;
  //   this.updateTeamRequest.status = true;
  //   console.log(this.updateTeamRequest);
  //   console.log(requestId);
  //   this.service.updateTeamRequestById(requestId, this.updateTeamRequest).subscribe(x=> {
  //     //window.location.reload();
  //     const index = this.teamRequests.findIndex((request : any) => request.id === requestId);
  //      if (index !== -1) {
  //        this.teamRequests[index].status = true;
  //      }
  //   });

  //   let playerData : any;
  //   let updateData : any = {
  //     id: 0,
  //     name: '',
  //     dob: '',
  //     teamId: '',
  //     playerRating: '',
  //     playerRole : '',
  //     userId: 0
  //   }
  //   let updatePlayerStats : any = {
  //     id: 0,
  //     playerId: 0,
  //     teamId: 0,
  //     matchPlayed: 0,
  //     goalScored: 0,
  //     tackles: 0,
  //     goalSaved: 0
  //   }

  //   this.service.getPlayerDetailsById(playerId).subscribe(x=> {
  //     playerData = x;
  //     console.log(playerData);
  //     updateData.id = playerData.id;
  //     updateData.name = playerData.name;
  //     updateData.dob = playerData.dob;
  //     updateData.teamId = teamId;
  //     updateData.playerRating = playerData.playerRating;
  //     updateData.playerRole = playerData.playerRole;
  //     updateData.userId = playerData.userId;

  //     updatePlayerStats.id = playerData.playerStats[0].id;
  //     updatePlayerStats.playerId = playerData.id;
  //     updatePlayerStats.teamId = teamId;
  //     updatePlayerStats.matchPlayed = playerData.playerStats[0].matchPlayed;
  //     updatePlayerStats.goalScored = playerData.playerStats[0].goalScored;
  //     updatePlayerStats.tackles = playerData.playerStats[0].tackles;
  //     updatePlayerStats.goalSaved = playerData.playerStats[0].goalSaved;

  //     this.service.updatePlayerDetailsById(updateData, updateData.id).subscribe(x=>{
  //       this.service.updatePlayerStatsById(updatePlayerStats.id, updatePlayerStats).subscribe(x=>{
  //         console.log("Updated player details and player stats");
  //       })
  //     });
  //   });
  // }

  // rejectRequest(requestId : number, playerId: number, teamId: number){
  //   this.updateTeamRequest.id = requestId;
  //   this.updateTeamRequest.playerId = playerId;
  //   this.updateTeamRequest.teamId = teamId;
  //   this.updateTeamRequest.status = false;
  //   console.log(this.updateTeamRequest);

  //    this.service.updateTeamRequestById(requestId, this.updateTeamRequest).subscribe(x=> {
  //       // window.location.reload();
  //       const index = this.teamRequests.findIndex((request :any) => request.id === requestId);
  //       if (index !== -1) {
  //         this.teamRequests[index].status = false;
  //       }
  //    });
  // }

  // deleteRequest(requestId: number){
  //   console.log(requestId);
  //   this.service.deleteTeamRequestById(requestId).subscribe(x=>{
  //     window.location.reload()
  //   })
  // }
}
