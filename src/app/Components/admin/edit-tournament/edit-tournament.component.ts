import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { TempServiceService } from '../../../Service/temp-service.service';

@Component({
  selector: 'app-edit-tournament',
  templateUrl: './edit-tournament.component.html',
  styleUrls: ['./edit-tournament.component.css']
})
export class EditTournamentComponent {
  editTournament : FormGroup;
  id : number;
  tournamentTeams : any;

  tournamentDetailData : any;
  thisTournamentTeams : any;

  nameErrorMessage : string = "";
  constructor(private temp: TempServiceService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.editTournament = this.formBuilder.group({
      id: '',
      name: '',
      startDate: '',
      endDate: '',
      winnerTeam: ''
    });

    this.id = this.route.snapshot.params['id'];
    this.temp.getTournamentDetailsById(this.id).subscribe(x => {
      this.tournamentDetailData = x;
      this.thisTournamentTeams = this.tournamentDetailData.tournamentDetails;
      console.log(this.tournamentDetailData);
      console.log(this.thisTournamentTeams);
    });

    console.log(this.id);

    this.temp.getTournamentById(this.id).subscribe(
      (t) => this.editTournament.patchValue(t)
    )
   }

   submit(){

    if(this.editTournament.controls['name'].value != ""){
     this.temp.updateTournamentById(this.id, this.editTournament.value).subscribe(()=> 
       { 
        this.router.navigate(['/admin-dashboard/view-tournaments']);
      });
     } else {
        this.nameErrorMessage = "Name cannot be empty";
        let temp = document.getElementById('inputName');
        temp?.classList.add('invalid');
     }
   }

}
