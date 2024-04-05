import { Component, OnDestroy } from '@angular/core';
import { TempServiceService } from '../../../Service/temp-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.css']
})

export class ViewPlayersComponent implements OnDestroy {
  playersData : any;
  teamsData : any;
  playerSubscription: Subscription;

  constructor(private service: TempServiceService){
    this.playerSubscription = service.getPlayerDetails().subscribe(x => {
      console.log(x);
      this.playersData = x;
    });
  }

  editPlayer(player : any){
    console.log(player);
  }

  deletePlayer(player: any){
    if(confirm("Are you sure you want to delete this player?")){
      this.service.deletePlayerById(player.id).subscribe(x => {
        // window.location.reload();
        const index = this.playersData.findIndex((p : any) => p.id === player.id);
        if (index !== -1) {
          this.playersData.splice(index, 1);
        }
      });
    }   
  }

  ngOnDestroy(): void {
    this.playerSubscription.unsubscribe();
  }
}
