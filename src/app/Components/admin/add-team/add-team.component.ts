import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TempServiceService } from '../../../Service/temp-service.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {
  formData : any;
  teamsData : any;
  nameErrorMessage: string = "";
  ratingErrorMessage: string = "";

  constructor(private temp: TempServiceService, private router : Router) { 
    temp.getTeamDetails().subscribe(x => {
      console.log(x);
      this.teamsData = x;
    });
  } 

  getData(data: NgForm){
    this.formData = data;

    if(this.formData.name != ""){ //Added
      let temp = document.getElementById('inputRating');
      if(temp?.classList.contains('invalid')){
        temp?.classList.remove('invalid');
        this.nameErrorMessage = "";
      }  
    }

    if(this.formData.teamRating != ""){ //Added
      let temp = document.getElementById('inputName');
      if(temp?.classList.contains('invalid')){
        temp?.classList.remove('invalid');
        this.ratingErrorMessage = "";
      }  
    }

    if(this.formData.name == ""){
      this.nameErrorMessage = "Name cannot be empty";
      let temp = document.getElementById('inputName');
      temp?.classList.add('invalid');
    }
    if(this.formData.teamRating == ""){
      this.ratingErrorMessage = "Rating cannot be empty";
      let temp = document.getElementById('inputRating');
      temp?.classList.add('invalid');
    }
    console.log(this.formData);
    console.log(this.teamsData);
    let exists = false;
    for(var i=0; i< this.teamsData.length; i++){
      if(this.teamsData[i].name === this.formData.name.trim()){
        exists = true;
      }
    }
    
    if(exists){
      alert("Team already exists");
    } else {
      if(this.formData.name != "" && this.formData.teamRating != ""){
        this.temp.addNewTeam(this.formData).subscribe(x=>{
          this.router.navigate(['/admin-dashboard/view-teams']);
        });
      }
    }
  }
}
