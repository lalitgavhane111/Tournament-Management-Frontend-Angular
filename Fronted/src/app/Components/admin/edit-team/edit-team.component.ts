import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { TempServiceService } from '../../../Service/temp-service.service';
@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})

export class EditTeamComponent {


  editTeam : FormGroup;
  id : number;

  constructor(private temp: TempServiceService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute){
    this.editTeam = this.formBuilder.group({
      id: '',
      name: '',
      teamRating: ''
    });

    this.id = this.route.snapshot.params['id'];

    this.temp.getTeamDetailById(this.id).subscribe(
      (t) => this.editTeam.patchValue(t)
    )
  }

  nameErrorMessage = "";

  submit(){

    console.log(this.editTeam.controls['name'].value);

    if(this.editTeam.controls['name'].value == ""){ //Added
      let temp = document.getElementById('inputName');
      temp?.classList.add('invalid');
      this.nameErrorMessage = "Team name cannot be empty";
  
    }

    if(this.editTeam.controls['name'].value != ""){ //Added
      let temp = document.getElementById('inputName');
      if(temp?.classList.contains('invalid')){
        temp?.classList.remove('invalid');
        this.nameErrorMessage = "";
      }  
    }

    if(this.editTeam.controls['name'].value != ""){
      this.temp.updateTeamById(this.id, this.editTeam.value).subscribe(()=> 
      {
        this.router.navigate(['/admin-dashboard/view-teams']);
      });
    }
  }

  }
