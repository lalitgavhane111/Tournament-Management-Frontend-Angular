import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TempServiceService } from 'src/app/Service/temp-service.service';

@Component({
  selector: 'app-tournament-matches',
  templateUrl: './tournament-matches.component.html',
  styleUrls: ['./tournament-matches.component.css']
})
export class TournamentMatchesComponent {
  id: number;
  matches : any;
  filteredMatches : any;
  tournamentName: string = '';
  dataLoaded: boolean = false;
  tournament : any;
  constructor(private service: TempServiceService, private route: ActivatedRoute, private router: Router){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.service.getMatches().subscribe(x => {
      this.matches = x;
      console.log(this.matches);
      this.filteredMatches = this.matches.filter((match : any )=> match.tournamentId == this.id);
      console.log(this.filteredMatches);
      this.dataLoaded = true;
    });

    this.service.getTournamentById(this.id).subscribe(x => {
      this.tournament = x;
      console.log(x);
      this.tournamentName = this.tournament.name;
      console.log(this.tournamentName);
    })
  }

  logout(){
    localStorage.clear();
  }

}
