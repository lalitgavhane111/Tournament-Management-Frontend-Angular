import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TempServiceService } from '../../../Service/temp-service.service';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent {

  currentDate: any;

  tournamentFormData : any = {};
  tournamentsData : any;
  nameErrorMessage : string = "";
  startDateErrorMessage : string = "";
  endDateErrorMessage : string = "";

  constructor(private temp: TempServiceService,  private router: Router) { 
    this.currentDate = new Date().toISOString().split("T")[0];

    temp.getTournaments().subscribe(x => {
      this.tournamentsData = x;
    });
  }
 
  getData(data : NgForm){
    this.tournamentFormData = data;

    if(this.tournamentFormData.name != ""){ //Added
      let temp = document.getElementById('inputName');
      if(temp?.classList.contains('invalid')){
        temp?.classList.remove('invalid');
        this.nameErrorMessage = "";
      }  
    }

    if(this.tournamentFormData.startDate != ""){ //Added
      let temp = document.getElementById('inputStartDate');
      if(temp?.classList.contains('invalid')){
        temp?.classList.remove('invalid');
        this.startDateErrorMessage = "";
      }  
    }

    if(this.tournamentFormData.endDate != ""){ //Added
      let temp = document.getElementById('inputEndDate');
      if(temp?.classList.contains('invalid')){
        temp?.classList.remove('invalid');
        this.endDateErrorMessage = "";
      }  
    }

    if(this.tournamentFormData.name == ""){
      this.nameErrorMessage = "Name cannot be empty";
      let temp = document.getElementById('inputName');
      temp?.classList.add('invalid');
    }
    if(this.tournamentFormData.startDate == ""){
      this.startDateErrorMessage = "Please pick";
      let temp = document.getElementById('inputStartDate');
      temp?.classList.add('invalid');
    }
    if(this.tournamentFormData.endDate == ""){
      this.endDateErrorMessage = "Please pick";
      let temp = document.getElementById('inputEndDate');
      temp?.classList.add('invalid');
    }

    console.log(this.tournamentFormData);
    let exists = false;
    for(var i=0; i < this.tournamentsData.length; i++){
      if(this.tournamentsData[i].name === this.tournamentFormData.name.trim()){
        exists = true;
      }
    }
    
    if(exists){
      alert("Tourament already exists");
    } else {
      if(this.tournamentFormData.name != "" && this.tournamentFormData.startDate != "" && this.tournamentFormData.endDate != ""){
        const d1 = Date.parse(this.tournamentFormData.startDate);
        const d2 = Date.parse(this.tournamentFormData.endDate);
        if(d2 < d1){
          alert("End date cannot be less than start date")
        }else {
          this.temp.addNewTournament(this.tournamentFormData).subscribe(x=>{
            this.router.navigate(['/admin-dashboard/view-tournaments']);
          });
        }
      }
    }
  }
}

