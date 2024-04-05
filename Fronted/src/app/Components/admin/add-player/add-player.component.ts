import { Component } from '@angular/core';
import { TempServiceService } from '../../../Service/temp-service.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {

  currentDate: any;


  nameErrorMessage : string = '';
  ratingErrorMessage : string = '';
  dateErrorMessage : string = '';
  roleErrorMessage : string = '';
  teamErrorMessage : string = '';
  playerDetails: any;
  playerStats = {
    playerId: '',
    teamId: ''
  }

  addForm={
    name:'',
    dob:'',
    teamId:'',
    playerRating:'',
    playerRole:'',
    userId:null
  }

  teams : any;
  constructor(private temp : TempServiceService, private router: Router){
    this.currentDate = new Date().toISOString().split("T")[0];

    temp.getTeamDetails().subscribe(x => {
      console.log(x);
      this.teams = x;
    });
  }

  getData(){

    const data={
      name:this.addForm.name,
      dob:this.addForm.dob,
      teamId: Number(this.addForm.teamId),
      playerRating: this.addForm.playerRating,
      playerRole: this.addForm.playerRole,
      userId: this.addForm.userId
    }

    if(data.name != ""){ //Added
      let temp = document.getElementById('inputName');
      if(temp?.classList.contains('invalid')){
        temp?.classList.remove('invalid');
        this.nameErrorMessage = "";
      }  
    }

    if(data.dob != ""){ //Added
      let temp = document.getElementById('inputDate');
      if(temp?.classList.contains('invalid')){
        temp?.classList.remove('invalid');
        this.dateErrorMessage = "";
      }  
    }

    if(data.playerRole != ""){ //Added
      let temp = document.getElementById('playerRole');
      if(temp?.classList.contains('invalid')){
        temp?.classList.remove('invalid');
        this.roleErrorMessage = "";
      }  
    }

    if(data.playerRating != ""){ //Added
      let temp = document.getElementById('playerRating');
      if(temp?.classList.contains('invalid')){
        temp?.classList.remove('invalid');
        this.ratingErrorMessage = "";
      }  
    }

    if(data.teamId != 0){ //Added
      let temp = document.getElementById('inputTeam');
      if(temp?.classList.contains('invalid')){
        temp?.classList.remove('invalid');
        this.teamErrorMessage = "";
      }  
    }

    if(data.name == ""){
      this.nameErrorMessage = "Name cannot be empty";
      let temp = document.getElementById('inputName');
      temp?.classList.add('invalid');
    }

    if(data.teamId == 0){
      this.teamErrorMessage = "Please select team";
      let temp = document.getElementById('inputTeam');
      temp?.classList.add('invalid');
    }

    if(data.dob == ""){
      this.dateErrorMessage = "Date cannot be empty";
      let temp = document.getElementById('inputDate');
      temp?.classList.add('invalid');
    }

    if(data.playerRole == ""){
      this.roleErrorMessage = "Please select a role";
      let temp = document.getElementById('playerRole');
      temp?.classList.add('invalid');
    }

    if(data.playerRating == ""){
      this.ratingErrorMessage = "Please give rating";
      let temp = document.getElementById('inputRating');
      temp?.classList.add('invalid');
    }


    if(data.name == '' || data.dob == '' || data.playerRating == '' || data.playerRole == '' || data.teamId == 0){
      console.log("Fill all details");
    } else {
       console.log(data);
    this.temp.postPlayerDetails(data).subscribe(x => {
      this.temp.getPlayerDetails().subscribe(y => {
        this.playerDetails = y;
        console.log(y);
        const lastElement = this.playerDetails.slice(-1);
        this.playerStats.playerId = lastElement[0].id;
        this.playerStats.teamId = lastElement[0].teamId;
        this.temp.postPlayerStats(this.playerStats).subscribe();  
      });
      this.router.navigate(['/admin-dashboard/view-players']);
    });

    }

  }
}
