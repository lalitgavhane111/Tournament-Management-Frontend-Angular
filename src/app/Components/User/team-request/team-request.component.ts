import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamrequestService } from 'src/app/Service/teamrequest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-request',
  templateUrl: './team-request.component.html',
  styleUrls: ['./team-request.component.css']
})
export class TeamRequestComponent implements OnInit {
  requestForm!: FormGroup;
  loading = false;
  submitted = false;
  error: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private teamRequestService: TeamrequestService
  ) { }

  ngOnInit() {
    this.requestForm = this.formBuilder.group({
      teamId: ['', Validators.required]
    });
  }

  get f() { return this.requestForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.requestForm.invalid) {
      return;
    }

    this.loading = true;

    // Get the user token from local storage
    const token = localStorage.getItem('userToken');

    // Get the player ID from the token
    this.teamRequestService.getPlayerId(`${token}`).subscribe(
      (data) => {
        const playerId = data.id;

        // Create the team request object
        const request = {
          playerId: playerId,
          teamId: this.f['teamId'].value
        };

        // Send the team request
        this.teamRequestService.sendTeamRequest(request, `${token}`).subscribe(
          () => {
            this.loading = false;
            alert('Team request sent successfully!');
            this.router.navigate(['/']);
          },
          (error) => {
            this.loading = false;
            this.error = error;
          }
        );
      },
      (error) => {
        this.loading = false;
        this.error = error;
      }
    );
  }
}




/*import { Component ,OnInit} from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { TeamrequestService } from 'src/app/Service/teamrequest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-team-request',
  templateUrl: './team-request.component.html',
  styleUrls: ['./team-request.component.css']
})
export class TeamRequestComponent implements OnInit{
  requestForm!: FormGroup 
  loading = false;
  submitted = false;
  error: any 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private teamRequestService: TeamrequestService
  ) { }

  ngOnInit() {
    this.requestForm = this.formBuilder.group({
      teamId: ['', Validators.required]
    });
  }
  get f() { return this.requestForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.requestForm.invalid) {
      return;
    }

    this.loading = true;

    // Get the user token from local storage
    const token = localStorage.getItem('userToken');

    // Get the player ID from the token
    this.teamRequestService.getPlayerId(`${token}`).subscribe(
      (data) => {
        const playerId = data.id;
        // Create the team request object
        const request = {
          playerId: playerId,
          teamId: this.f['teamId'].value
        };

        // Send the team request
        this.teamRequestService.sendTeamRequest(request, `${token}`).subscribe(
          () => {
            this.loading = false;
            alert('Team request sent successfully!');
            this.router.navigate(['/']);
          },
          (error) => {
            this.loading = false;
            this.error = error;
          }
        );
      },
      (error) => {
        this.loading = false;
        this.error = error;
      }
    );
  }
}

*/
