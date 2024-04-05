import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersideServiceService } from 'src/app/Service/userside-service.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-register-as-player',
  templateUrl: './register-as-player.component.html',
  styleUrls: ['./register-as-player.component.css']
})
export class RegisterAsPlayerComponent {
  playersData : any = [];
  currentDate: any;

  formPlayerData : FormGroup;
  newplayer: any;
  localstorageuserid :number = 0

  constructor(private service: UsersideServiceService, private formBuilder: FormBuilder, private route: Router){ 
    //Max (current date)
    this.currentDate = new Date().toISOString().split("T")[0];

  // Set the maximum date value of the input element
    
    
    this.localstorageuserid = Number(localStorage.getItem('id'))
    this.formPlayerData = this.formBuilder.group({
      name: '',
      dob: '',
      teamId: null,
      playerRating: 0,
      playerRole: '',
      userId:  this.localstorageuserid 
    });

    this.service.getPlayersData().subscribe(x => {
      this.playersData = x;
      console.log(x);
    });
  }

  registerPlayer(){
    let newPlayerId = 0;

    this.newplayer = this.formPlayerData.value;
    this.newplayer.name = this.newplayer.name.trim();
    console.log(this.newplayer);
    if(this.newplayer.name == '' || this.newplayer.dob == '' || this.newplayer.playerRole == ''){
      alert("Enter all details before submitting");
    }else{
      for(var i=0; i<this.playersData.length; i++){
        if(this.playersData[i].name == this.newplayer.name && ((this.playersData[i].dob).substring(0,10)) ==  this.newplayer.dob){
          alert("You have already registered as a player");
          //Route to home page or somewhere like team request page that i made
          this.route.navigate(["send-request"]);
        }
      }
      // this.service.postPlayersData(this.newplayer).subscribe(y => {
      //   this.service.getPlayersData().subscribe(x => {
      //     this.playersData = x;
      //     console.log(x);
      //   });
  
      //   for(var i=0; i<this.playersData.length; i++){
      //     if(this.playersData[i].userId == this.localstorageuserid){
      //       newPlayerId = this.playersData[i].id;
      //     }
      //   }
  
      //   let newPlayerStats = {
      //     playerId: newPlayerId,
      //     teamId: null,
      //     matchPlayed: 0,
      //     goalScored: 0,
      //     tackles: 0,
      //     goalSaved: 0
      //   };
      //   console.log(newPlayerStats);
        
      //   this.service.postPlayerStats(newPlayerStats).subscribe(x => {
      //     this.route.navigate(["send-request"]);
      //   });
      // });

      this.service.postPlayersData(this.newplayer).pipe(
        switchMap(() => this.service.getPlayersData()),
        switchMap((x) => {
          this.playersData = x;
          console.log(x);
      
          let newPlayerId = null;
      
          for (var i = 0; i < this.playersData.length; i++) {
            if (this.playersData[i].userId == this.localstorageuserid) {
              newPlayerId = this.playersData[i].id;
              break; // Exit the loop once the newPlayerId is found
            }
          }
      
          let newPlayerStats = {
            playerId: newPlayerId,
            teamId: null,
            matchPlayed: 0,
            goalScored: 0,
            tackles: 0,
            goalSaved: 0
          };
      
          console.log(newPlayerStats);
      
          return this.service.postPlayerStats(newPlayerStats);
        })
      ).subscribe(() => {
        this.route.navigate(['send-request']);
      });

      
    }
  }
  
}


