import { Component } from '@angular/core';
import { TempServiceService } from '../../../Service/temp-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-manage-tournament-teams',
  templateUrl: './manage-tournament-teams.component.html',
  styleUrls: ['./manage-tournament-teams.component.css']
})

export class ManageTournamentTeamsComponent {
  
  id: number;
  tournamentDetailData : any;
  allTeams: any;
  thisTournamentTeams: any;
  matches : any;
  filteredMatches : any;

  constructor(private service: TempServiceService, private route: ActivatedRoute, private router: Router){

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.getTournamentDetailsById(this.id).subscribe(x => {
      this.tournamentDetailData = x;
      this.thisTournamentTeams = this.tournamentDetailData.tournamentDetails;
      console.log(this.tournamentDetailData);
      console.log(this.thisTournamentTeams);
    });
    
    this.service.getTeamDetails().subscribe(x => {
      this.allTeams = x;
      console.log(this.allTeams);
    });

    this.service.getMatches().subscribe(x => {
      this.matches = x;
      console.log(this.matches);
      this.filteredMatches = this.matches.filter((match : any )=> match.tournamentId == this.id);
      console.log(this.filteredMatches);
    });
    console.log(this.id);
  }

  addForm = {
    tournamentId : this.route.snapshot.params['id'],
    teamId: ''
  }

  matchForm = {
    tournamentId : this.route.snapshot.params['id'],
    homeTeamId: '',
    awayTeamId: ''
  }

  addTeamToTournament(){
    const data = {
      tournamentId : Number(this.addForm.tournamentId),
      teamId: Number(this.addForm.teamId)
    }
    
    let exists = false;
    if(data.teamId == 0){
      alert("You must select a team before adding to tournament");
    } else {
      this.thisTournamentTeams.forEach((element : any) => {
        if(element.teamId == data.teamId){
          exists = true;
        }
      });
      if(!exists){
        this.service.postTournamentDetails(data).subscribe(x => {
          this.service.getTournamentDetailsById(this.id).subscribe(x => {
            this.tournamentDetailData = x;
            this.thisTournamentTeams = this.tournamentDetailData.tournamentDetails;
            console.log(this.tournamentDetailData);
            console.log(this.thisTournamentTeams);
          });
        });
      } else {
        alert("Team already exists in this tournament");
      }
    }
  }

  deleteTeam(id : number, tournamentTeamId: number){
    if(confirm("Are you sure you want to delete this team from the tournament?"))
    this.service.deleteTournamentDetailsById(tournamentTeamId).subscribe(() => {
      this.service.getTournamentDetailsById(this.id).subscribe(x => {
        this.tournamentDetailData = x;
        this.thisTournamentTeams = this.tournamentDetailData.tournamentDetails;
        console.log(this.tournamentDetailData);
        console.log(this.thisTournamentTeams);
      });
    })
  }

  editMatch(id: number){
    console.log(id);
  }

  deleteMatch(id: number){
    if(confirm("Are you sure you want to delete this match from the tournament?"))
    this.service.deleteMatchById(id).subscribe(x=> {
      this.service.getMatches().subscribe(x => {
        this.matches = x;
        console.log(this.matches);
        this.filteredMatches = this.matches.filter((match : any )=> match.tournamentId == this.id);
        console.log(this.filteredMatches);
      });
    });
  }

  addMatchToTournament(){
    const matchDetail = {
      tournamentId : Number(this.matchForm.tournamentId),
      homeTeamId: Number(this.matchForm.homeTeamId),
      awayTeamId: Number(this.matchForm.awayTeamId)
    }

    if(this.matchForm.homeTeamId == '' || this.matchForm.awayTeamId == ''){
      alert("Please pick home and away teams first");
    }
    else if(matchDetail.homeTeamId == matchDetail.awayTeamId){
      alert("Home team and away team cannot not be same");
    } else {
      const existingMatch = this.matches.find((match : any)=> 
        match.tournamentId === matchDetail.tournamentId &&
        ((match.homeTeamId === matchDetail.homeTeamId && match.awayTeamId === matchDetail.awayTeamId) ||
        (match.homeTeamId === matchDetail.awayTeamId && match.awayTeamId === matchDetail.homeTeamId))
      );
      console.log(matchDetail);
      if(existingMatch){
        alert("There already exists a match between these teams in this tournament");
      } else {
        this.service.postMatchToTournament(matchDetail).subscribe({
          next: () => {
            this.service.getMatches().subscribe(x => {
              this.matches = x;
              console.log(this.matches);
              this.filteredMatches = this.matches.filter((match : any )=> match.tournamentId == this.id);
              console.log(this.filteredMatches);
            });
          }, error : (err) => {
            alert("Error adding match to tournament");
          }
        });
      }
      // this.service.postMatchToTournament(matchDetail).subscribe({
      //   next: () => {
      //     window.location.reload();
      //   }, error : (err) => {
      //     alert("There already exists a match between these teams");
      //   }
      // });
    }
  }


}
