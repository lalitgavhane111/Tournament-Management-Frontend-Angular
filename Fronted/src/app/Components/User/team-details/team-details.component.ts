import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/Service/teamdetails.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit{
  teams: any
 constructor(private team : TeamService) { }
  
 ngOnInit(): void {
  this.team.getTeams().subscribe(
    data => {
      this.teams = data;
      this.teams.sort((a: { rating: number; }, b: { rating: number; }) => {
        return b.rating - a.rating;
      });
      console.log(this.teams);
    },
    error => {
      console.log(error);
    }
  );
  
}
  }






