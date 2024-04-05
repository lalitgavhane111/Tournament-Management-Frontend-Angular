import { Component } from '@angular/core';
import { TempServiceService } from '../../../Service/temp-service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})

export class PlayerStatsComponent {
  playerId : number;
  playerDetails : any;

  playerStatsId : number = 0; 
  playerStats : FormGroup;

  constructor(private service: TempServiceService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    this.playerStats = this.formBuilder.group({
      id: '',
      playerId: '',
      teamId: '',
      matchPlayed: '',
      goalScored: '',
      tackles: '',
      goalSaved: ''
    });
    
    

    this.playerId = this.route.snapshot.params['id'];
    console.log(this.playerId);
    this.service.getPlayerDetailsById(this.playerId).subscribe(x => {
      this.playerDetails = x;
      console.log(this.playerDetails);

      this.playerStatsId = this.playerDetails.playerStats[0].id;
      this.service.getPlayerStatsById(this.playerStatsId).subscribe(
        (t) => this.playerStats.patchValue(t)
      );
    });

  }

  editPlayerStats(id: any){
    const el = document.getElementById('playerStatsForm');
    if(el != null){
      el.style.display = 'block';
      
    }
  }

  saveChanges(){
    this.service.updatePlayerStatsById(this.playerStatsId, this.playerStats.value).subscribe(x => {
      this.service.getPlayerDetailsById(this.playerId).subscribe(x => {
        this.playerDetails = x;
        const el = document.getElementById('playerStatsForm');
        if(el != null)
          el.style.display = 'none';
      });
    });
  }
}
