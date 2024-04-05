import { Component } from '@angular/core';
import { TempServiceService } from '../../../Service/temp-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent {
  teamData : any;
  id : number;
  updatePlayerOnRemove = {
    id : '',
    name: '',
    dob: '',
    teamId: null,
    playerRating: '',
    playerRole: '',
    userId: ''
  }
  constructor(private route: ActivatedRoute, private temp: TempServiceService, private router: Router){
    this.id = this.route.snapshot.params['id'];

    temp.getTeamDetailById(this.id).subscribe(x => {
      console.log(x);
      this.teamData = x;
    });
  } 

  removePlayerFromTeam(player: any){
    this.updatePlayerOnRemove.id = player.id;
    this.updatePlayerOnRemove.name = player.name;
    this.updatePlayerOnRemove.dob = player.dob;
    this.updatePlayerOnRemove.playerRating = player.playerRating;
    this.updatePlayerOnRemove.playerRole = player.playerRole;
    this.updatePlayerOnRemove.userId = player.userId;

    let updatePlayerStats : any = {
      id: 0,
      playerId: 0,
      teamId: 0,
      matchPlayed: 0,
      goalScored: 0,
      tackles: 0,
      goalSaved: 0
    }

    console.log(player);

    updatePlayerStats.id = player.playerStats[0].id;
    updatePlayerStats.playerId = player.id;
    updatePlayerStats.teamId = null;
    updatePlayerStats.matchPlayed = player.playerStats[0].matchPlayed;
    updatePlayerStats.goalScored = player.playerStats[0].goalScored;
    updatePlayerStats.tackles = player.playerStats[0].tackles;
    updatePlayerStats.goalSaved = player.playerStats[0].goalSaved;

    console.log(updatePlayerStats);

    if(confirm("Are you sure you want to remove this player?"))
      this.temp.updatePlayerDetailsById(this.updatePlayerOnRemove, player.id).subscribe(x=>{
        this.temp.updatePlayerStatsById(updatePlayerStats.id, updatePlayerStats).subscribe(x => {
          this.temp.getTeamDetailById(this.id).subscribe(x => {
            console.log(x);
            this.teamData = x;
          });
        });
      });
  }
}
