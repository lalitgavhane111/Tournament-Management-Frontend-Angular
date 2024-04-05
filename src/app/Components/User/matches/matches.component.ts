import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/Service/users-data.service';
import { forkJoin, of } from 'rxjs';
import { map, groupBy, mergeMap, toArray} from 'rxjs/operators'

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent{
  title = 'Matches';
  matches:any;
  teams: any;
  tournaments: any;
  tournamentMatches: any[] = [];
  constructor(private service :UsersDataService)
  {
    // userData.matches().subscribe((data: any)=>{
    //   console.warn("matches",data);
    //   this.matches=data
    // });
    // userData.team().subscribe((data: any)=>{
    //   console.warn("team",data);
    //   this.teams=data
    // });
    // userData.tournaments().subscribe((data: any)=>{
    //   console.warn("tournaments",data);
    //   this.tournaments=data
    // });

    service.getTournaments().subscribe(x => {
      this.tournaments = x;
      console.log(x);
    });
    
    }

    logout(){
      localStorage.clear();
    }
//     ngOnInit(): void {
//       const matches$ = this.userData.matches();
//       const teams$ = this.userData.team();
//       const tournaments$ = this.userData.tournaments();
      

//       forkJoin([matches$,teams$,tournaments$]).subscribe((results:any[]) =>{
//         const matches = results[0];
//         const teams = results[1];
//         const tournaments = results[2];    
        

      
//         for (const tournament of tournaments) {
//           const tournamentMatches = matches.filter((match: { tournamentId: any; }) => match.tournamentId === tournament.id);
//         }

        

//         this.matches = matches.map((match: {
//           tournamentId: any; homeTeamId: any; awayTeamId: any; 
// }) => {
//           const homeTeam = teams.find((team: { id: any; }) => team.id === match.homeTeamId);
//           const awayTeam = teams.find((team: { id: any; }) => team.id === match.awayTeamId);

//           const tournament = tournaments.find((tournament: { id: any; }) => tournament.id === match.tournamentId)

//           return{
//             ...match,
//             homeTeamName: homeTeam ? homeTeam.name : '',
//             awayTeamName: awayTeam ? awayTeam.name : '',
//             tournamentName: tournament ? tournament.name:''
//           };
//         });
//         }
//       )
//       }
    }
      


