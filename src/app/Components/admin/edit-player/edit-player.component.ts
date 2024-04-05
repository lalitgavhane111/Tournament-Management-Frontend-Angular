import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TempServiceService } from '../../../Service/temp-service.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent {
  currentDate: any;


  editPlayer : FormGroup;
  id: number;
  teams: any;

  data: any;
  nameErrorMessage : string = "";
  teamErrorMessage : string = "";
  roleErrorMessage : string = "";
  dateErrorMessage : string = "";
  ratingErrorMessage : string = "";
  
  constructor(private service: TempServiceService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute ){
    this.currentDate = new Date().toISOString().split("T")[0];
   
    this.editPlayer = this.formBuilder.group({
      id: '',
      name: '',
      dob: '',
      teamId: '',
      playerRating: '',
      playerRole: '',
      userId: ''
    });

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.service.getPlayerDetailsById(this.id).subscribe(
      (t) => this.editPlayer.patchValue(t)
    )

      this.service.getTeamDetails().subscribe(x => {
        this.teams = x;
        console.log(this.teams);
      });
   }

   saveChanges(){
    this.data = this.editPlayer.value;
    console.log(this.data);
    if(this.data.name != ""){ //Added
      let temp = document.getElementById('inputName');
      if(temp?.classList.contains('invalid')){
        temp?.classList.remove('invalid');
        this.nameErrorMessage = "";
      }  
    }

    if(this.data.name == ""){
      this.nameErrorMessage = "Name cannot be empty";
      let temp = document.getElementById('inputName');
      temp?.classList.add('invalid');
    }


      if(this.data.name == ""){
        console.log("Enter complete details");
      } else {
        this.service.updatePlayerDetailsById(this.editPlayer.value, this.id).subscribe(x=> {
          this.router.navigate(['/admin-dashboard/view-players']);
        });
      }
   }
}
