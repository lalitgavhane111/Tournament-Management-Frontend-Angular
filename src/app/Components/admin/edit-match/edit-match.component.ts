import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TempServiceService } from '../../../Service/temp-service.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})

export class EditMatchComponent {

  editMatchWinner: FormGroup;
  matchURLId: number;
  tournamentURLId: number;

  homeTeamId: number = 0;
  awayTeamId: number = 0;
  homeTeam: any;
  awayTeam: any;

  matchDetails: any;

  constructor(private service: TempServiceService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { 
    this.editMatchWinner = this.formBuilder.group({
      id: '',
      tournamentId: '',
      homeTeamId: '',
      awayTeamId: '',
      matchWinner: ''
    });

    this.tournamentURLId =  this.route.snapshot.params['id'];
    this.matchURLId = this.route.snapshot.params['id2'];
    
    this.service.getMatchById(this.matchURLId).subscribe(
      (t) => this.editMatchWinner.patchValue(t)
    )

    this.service.getMatchById(this.matchURLId).subscribe(x => {
      this.matchDetails = x;
      this.homeTeamId = this.matchDetails.homeTeamId;
      this.awayTeamId = this.matchDetails.awayTeamId;
      this.service.getTeamDetailById(this.homeTeamId).subscribe(x=>{
        this.homeTeam = x;
      });
      this.service.getTeamDetailById(this.awayTeamId).subscribe(x => {
        this.awayTeam = x;
      });  
    });
  }

  submit(){
    // let temp = document.getElementById("inputHomeTeamName") as HTMLInputElement;
    // let temp2 = document.getElementById("inputAwayTeamName") as HTMLInputElement;

    // let homeTeamName = temp.value;
    // let awayTeamName = temp2.value;

    // let temp3 = document.getElementById("inputWinnerTeam") as HTMLInputElement;
    // let winnerTeamName = temp3.value;

    // if(winnerTeamName != homeTeamName && winnerTeamName != awayTeamName){
    //   if(winnerTeamName == 'Not Declared'){
    //     this.router.navigateByUrl(`/view-tournaments/${this.tournamentURLId}/manage`);
    //   } else {
    //     alert("Type correctly, winner team must be either one of the teams");
    //   }
    // } else {
    //   let updateMatchDetail = {
    //     id: Number(this.matchURLId),
    //     tournamentId: Number(this.tournamentURLId),
    //     homeTeamId: this.homeTeam.id,
    //     awayTeamId: this.awayTeam.id,
    //     matchWinner: winnerTeamName
    //   }
    //   this.service.updateMatchById(updateMatchDetail.id, updateMatchDetail).subscribe(x=>{
    //     this.router.navigateByUrl(`/admin-dashboard/view-tournaments/${updateMatchDetail.tournamentId}/manage`);
    //   });
    // }
    let temp = document.getElementById('winnerTeam') as HTMLInputElement;
    let winnerTeamName = temp.value;
    console.log(winnerTeamName);
    let updateMatchDetail = {
           id: Number(this.matchURLId),
           tournamentId: Number(this.tournamentURLId),
           homeTeamId: this.homeTeam.id,
           awayTeamId: this.awayTeam.id,
           matchWinner: winnerTeamName
    }

    this.service.updateMatchById(updateMatchDetail.id, updateMatchDetail).subscribe(x=>{
           this.router.navigateByUrl(`/admin-dashboard/view-tournaments/${updateMatchDetail.tournamentId}/manage`);
       });

    

  }
}
