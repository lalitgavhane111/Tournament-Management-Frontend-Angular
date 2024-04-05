import { Component } from '@angular/core';
import { TournamentHomeService } from 'src/app/Service/tournament-home.service';
@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent {
  tourList :any
  tourMatch:any
  teamDetail:any
  constructor(private getData:TournamentHomeService) {
    //tournament details
    getData.getTournamentList().subscribe(result=>{
      console.log(result)
      this.tourList=result
// match details 
/*
    getData.getMatch().subscribe(result1=>{
      console.log(result1)
      this.tourMatch= result1
      */
    

   
    }) 
   }
showDetails = false;
  
  toggleCard() {
    this.showDetails = !this.showDetails;

}

}
