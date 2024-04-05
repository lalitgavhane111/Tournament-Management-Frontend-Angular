import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TempServiceService } from '../../../Service/temp-service.service';
@Component({
  selector: 'app-view-tournaments',
  templateUrl: './view-tournaments.component.html',
  styleUrls: ['./view-tournaments.component.css']
})
export class ViewTournamentsComponent {
  tournamentsData : any;
  selectedTournament : any;
  updatedTournament: any;
  updatedData : any = {
    id: '',
    name: '',
    startDate: '',
    endDate: '',
    winnerTeam: ''
  };

  constructor(private service: TempServiceService){
    service.getTournaments().subscribe(x => {
      console.log(x);
      this.tournamentsData = x;
    })
  }

  public tempFunction(tournament : any){
    this.selectedTournament = tournament;
    this.updatedData = this.selectedTournament;
  }

  updateTournamentDetails(data : any){
    this.updatedData = data.value;
    console.log(this.updatedData);
  }

  submit(data :any){
    console.log(data);
  }

  delete(id: number){
    if(confirm("Are you sure you want to delete?"))
      this.service.deleteTournamentById(id).subscribe(() => {
      // window.location.reload();
      this.tournamentsData = this.tournamentsData.filter((tournament: any) => tournament.id !== id);
    });
  }
}
